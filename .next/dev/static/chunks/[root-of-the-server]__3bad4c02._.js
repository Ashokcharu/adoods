(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/websites/adoods/pages/shop.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Shop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const items = [
    // T-Shirts
    {
        id: 1,
        name: 'A26',
        img: '/img/Design_1.jpeg',
        price: '₹499',
        category: 't-shirts'
    },
    {
        id: 2,
        name: 'A27',
        img: '/img/Design_2.jpeg',
        price: '₹549',
        category: 't-shirts'
    },
    {
        id: 3,
        name: 'A31',
        img: '/img/Design_3.jpeg',
        price: '₹499',
        category: 't-shirts'
    },
    {
        id: 4,
        name: 'A34',
        img: '/img/Design_4.jpeg',
        price: '₹599',
        category: 't-shirts'
    },
    {
        id: 5,
        name: 'A47',
        img: '/img/Design_5.jpeg',
        price: '₹549',
        category: 't-shirts'
    },
    {
        id: 6,
        name: 'A49',
        img: '/img/Design_6.jpeg',
        price: '₹499',
        category: 't-shirts'
    },
    {
        id: 7,
        name: 'A50',
        img: '/img/Design_7.jpeg',
        price: '₹599',
        category: 't-shirts'
    },
    {
        id: 8,
        name: 'A51',
        img: '/img/Design_8.jpeg',
        price: '₹549',
        category: 't-shirts'
    },
    {
        id: 9,
        name: 'A101',
        img: '/img/Design_9.jpeg',
        price: '₹499',
        category: 't-shirts'
    },
    {
        id: 10,
        name: 'A53',
        img: '/img/Design_10.jpeg',
        price: '₹599',
        category: 't-shirts'
    },
    {
        id: 11,
        name: 'A64',
        img: '/img/Design_11.jpeg',
        price: '₹549',
        category: 't-shirts'
    },
    {
        id: 12,
        name: 'A69',
        img: '/img/Design_12.jpeg',
        price: '₹499',
        category: 't-shirts'
    },
    {
        id: 13,
        name: 'A82',
        img: '/img/Design_13.jpeg',
        price: '₹599',
        category: 't-shirts'
    },
    // Other categories
    {
        id: 14,
        name: 'Tank Top 1',
        img: '/img/Design_1.jpeg',
        price: '₹449',
        category: 'tank-tops'
    },
    {
        id: 15,
        name: 'Hoodie 1',
        img: '/img/Design_2.jpeg',
        price: '₹899',
        category: 'hoodies'
    },
    {
        id: 16,
        name: 'Sweatshirt 1',
        img: '/img/Design_3.jpeg',
        price: '₹799',
        category: 'sweatshirts'
    },
    {
        id: 17,
        name: 'Jersey 1',
        img: '/img/Design_4.jpeg',
        price: '₹699',
        category: 'jerseys'
    },
    {
        id: 18,
        name: 'Shorts 1',
        img: '/img/Design_5.jpeg',
        price: '₹599',
        category: 'shorts'
    },
    {
        id: 19,
        name: 'Track Pants 1',
        img: '/img/Design_6.jpeg',
        price: '₹799',
        category: 'track-pants'
    },
    {
        id: 20,
        name: 'Training Pants 1',
        img: '/img/Design_7.jpeg',
        price: '₹749',
        category: 'training-pants'
    }
];
function Shop() {
    _s();
    // State for search and filtering
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // State for order form
    const [showOrderForm, setShowOrderForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        success: false,
        message: ''
    });
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orderDetails, setOrderDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        quantity: 1,
        productName: '',
        productId: ''
    });
    // Handle order details change
    const handleOrderDetailsChange = (e)=>{
        const { name, value } = e.target;
        setOrderDetails((prev)=>({
                ...prev,
                [name]: name === 'quantity' ? parseInt(value) || 1 : value
            }));
    };
    // Handle order submission
    const handleOrderSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({
            success: false,
            message: ''
        });
        try {
            // Format the email body
            const subject = `New Order: ${orderDetails.productName}`;
            const body = `New Order Details:%0D%0A%0D%0A` + `Product: ${orderDetails.productName}%0D%0A` + `Name: ${orderDetails.name}%0D%0A` + `Phone: ${orderDetails.phone}%0D%0A` + `Quantity: ${orderDetails.quantity}%0D%0A%0D%0A` + `Order Time: ${new Date().toLocaleString()}`;
            // Create mailto link
            const mailtoLink = `mailto:adoodshosur@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            // Open email client in a new tab
            window.open(mailtoLink, '_blank');
            // Show success message
            setSubmitStatus({
                success: true,
                message: 'Order submitted successfully! Please check your email client to send the message. We will contact you shortly.'
            });
            // Reset form after 5 seconds
            setTimeout(()=>{
                setShowOrderForm(false);
                setOrderDetails({
                    name: '',
                    phone: '',
                    quantity: 1,
                    productName: selectedProduct ? selectedProduct.name : '',
                    productId: selectedProduct ? selectedProduct.id : ''
                });
                setSubmitStatus({
                    success: false,
                    message: ''
                });
            }, 5000);
        } catch (error) {
            console.error('Error submitting order:', error);
            setSubmitStatus({
                success: false,
                message: 'Failed to submit order. Please try again or contact us directly.'
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    // Handle order now button click
    const handleOrderNow = (e, product)=>{
        e.preventDefault();
        e.stopPropagation();
        setSelectedProduct(product);
        setOrderDetails((prev)=>({
                ...prev,
                productName: product.name,
                productId: product.id,
                quantity: 1
            }));
        setShowOrderForm(true);
    };
    // Filter items based on search and category using useMemo to prevent unnecessary recalculations
    const filteredItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Shop.useMemo[filteredItems]": ()=>{
            let result = [
                ...items
            ];
            // Filter by category first if not 'all'
            if (selectedCategory !== 'all') {
                result = result.filter({
                    "Shop.useMemo[filteredItems]": (item)=>item.category === selectedCategory
                }["Shop.useMemo[filteredItems]"]);
            }
            // Then filter by search term if any
            if (searchTerm) {
                const term = searchTerm.toLowerCase().trim();
                result = result.filter({
                    "Shop.useMemo[filteredItems]": (item)=>item.name.toLowerCase().includes(term) || item.category.toLowerCase().includes(term)
                }["Shop.useMemo[filteredItems]"]);
            }
            return result;
        }
    }["Shop.useMemo[filteredItems]"], [
        searchTerm,
        selectedCategory
    ]);
    const categoryGroups = {
        '👕 Upper Wear': [
            {
                id: 't-shirts',
                name: '👕 T-Shirts'
            },
            {
                id: 'tank-tops',
                name: '💪 Tank Tops'
            },
            {
                id: 'hoodies',
                name: '🧥 Hoodies'
            },
            {
                id: 'sweatshirts',
                name: '👕 Sweatshirts'
            },
            {
                id: 'jerseys',
                name: '🏆 Jerseys'
            }
        ],
        '👖 Lower Wear': [
            {
                id: 'shorts',
                name: '🩳 Shorts'
            },
            {
                id: 'track-pants',
                name: '👖 Track Pants'
            },
            {
                id: 'training-pants',
                name: '🏋️ Training Pants'
            }
        ]
    };
    // Flatten categories for easier access
    const allCategories = [
        {
            id: 'all',
            name: 'All Products'
        },
        ...Object.values(categoryGroups).flat()
    ];
    // Styles
    const containerStyle = {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '20px',
        minHeight: '100vh',
        boxSizing: 'border-box' // Ensure padding is included in the element's total width and height
    };
    const headerStyle = {
        textAlign: 'center',
        marginBottom: '20px',
        padding: '20px 0',
        borderBottom: '1px solid #eee'
    };
    const titleStyle = {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '30px',
        fontWeight: '700',
        letterSpacing: '1px'
    };
    const mainContentStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        alignItems: 'flex-start'
    };
    // Media query for mobile
    const mobileStyles = `
    @media (max-width: 1023px) {
      .main-content {
        flex-direction: column;
      }
      .sidebar {
        width: 100% !important;
        position: static !important;
      }
      .products-grid {
        padding-left: 0 !important;
        padding-top: 20px !important;
      }
    }
  `;
    const sidebarStyle = {
        width: '300px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        position: 'sticky',
        top: '20px',
        flexShrink: 0
    };
    const productsGridStyle = {
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '0 0 0 20px'
    };
    const categoryGroupsStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    };
    const categoryGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    };
    const groupTitleStyle = {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#333',
        whiteSpace: 'nowrap'
    };
    const categoriesContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '15px'
    };
    const productCardStyle = {
        background: '#fff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
        }
    };
    const productImageContainerStyle = {
        position: 'relative',
        paddingTop: '100%',
        overflow: 'hidden'
    };
    const productImageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease'
    };
    const productInfoStyle = {
        padding: '15px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    };
    const productNameStyle = {
        fontSize: '1rem',
        fontWeight: '600',
        margin: 0,
        color: '#333',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const orderButtonStyle = {
        backgroundColor: '#111',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: '#333'
        }
    };
    const modalOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '20px',
        boxSizing: 'border-box'
    };
    const modalContentStyle = {
        backgroundColor: '#fff',
        borderRadius: '12px',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
    };
    const closeButtonStyle = {
        position: 'absolute',
        top: '15px',
        right: '20px',
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        color: '#666',
        zIndex: 10
    };
    const modalContentInnerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        padding: '30px'
    };
    const modalImageContainerStyle = {
        width: '100%',
        borderRadius: '8px',
        overflow: 'hidden',
        background: '#f9f9f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    };
    const modalImageStyle = {
        maxWidth: '100%',
        maxHeight: '400px',
        objectFit: 'contain'
    };
    const modalInfoStyle = {
        flex: '1'
    };
    const modalTitleStyle = {
        fontSize: '1.8rem',
        margin: '0 0 10px 0',
        color: '#333',
        fontWeight: '700'
    };
    const modalPriceStyle = {
        fontSize: '1.5rem',
        color: '#111',
        margin: '0 0 20px 0',
        fontWeight: '600'
    };
    const addToCartButtonStyle = {
        backgroundColor: '#111',
        color: '#fff',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#333'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        className: `jsx-${mobileStyles.__hash}` + " " + "shop-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: mobileStyles.__hash,
                children: mobileStyles
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: headerStyle,
                className: `jsx-${mobileStyles.__hash}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: titleStyle,
                    className: `jsx-${mobileStyles.__hash}`,
                    children: "Shop Our Collection"
                }, void 0, false, {
                    fileName: "[project]/websites/adoods/pages/shop.js",
                    lineNumber: 423,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: mainContentStyle,
                className: `jsx-${mobileStyles.__hash}` + " " + "main-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        style: sidebarStyle,
                        className: `jsx-${mobileStyles.__hash}` + " " + "sidebar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: categoryGroupsStyle,
                            className: `jsx-${mobileStyles.__hash}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '15px'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: '0 0 15px',
                                                fontSize: '1.2rem'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "Categories"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedCategory('all'),
                                            style: {
                                                padding: '8px 15px',
                                                borderRadius: '20px',
                                                border: selectedCategory === 'all' ? '2px solid #111' : '1px solid #ddd',
                                                backgroundColor: selectedCategory === 'all' ? '#f0f0f0' : 'white',
                                                cursor: 'pointer',
                                                fontSize: '0.9rem',
                                                marginBottom: '10px',
                                                width: '100%',
                                                textAlign: 'left'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "All Products"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 431,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                Object.entries(categoryGroups).map(([groupName, categories])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: categoryGroupStyle,
                                        className: `jsx-${mobileStyles.__hash}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: groupTitleStyle,
                                                className: `jsx-${mobileStyles.__hash}`,
                                                children: groupName
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/shop.js",
                                                lineNumber: 451,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: categoriesContainerStyle,
                                                className: `jsx-${mobileStyles.__hash}`,
                                                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedCategory(category.id),
                                                        style: {
                                                            padding: '6px 12px',
                                                            borderRadius: '15px',
                                                            border: selectedCategory === category.id ? '1px solid #111' : '1px solid #ddd',
                                                            backgroundColor: selectedCategory === category.id ? '#f0f0f0' : 'white',
                                                            cursor: 'pointer',
                                                            fontSize: '0.85rem',
                                                            whiteSpace: 'nowrap',
                                                            transition: 'all 0.2s ease'
                                                        },
                                                        className: `jsx-${mobileStyles.__hash}`,
                                                        children: category.name
                                                    }, category.id, false, {
                                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                                        lineNumber: 454,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/shop.js",
                                                lineNumber: 452,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, groupName, true, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 450,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 428,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/shop.js",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        className: `jsx-${mobileStyles.__hash}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '20px',
                                    padding: '15px',
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                },
                                className: `jsx-${mobileStyles.__hash}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        maxWidth: '600px',
                                        margin: '0 auto',
                                        position: 'relative'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search products...",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            style: {
                                                width: '100%',
                                                padding: '12px 20px 12px 45px',
                                                borderRadius: '25px',
                                                border: '1px solid #ddd',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                transition: 'all 0.3s ease'
                                            },
                                            onFocus: (e)=>e.target.style.borderColor = '#999',
                                            onBlur: (e)=>e.target.style.borderColor = '#ddd',
                                            className: `jsx-${mobileStyles.__hash}`
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 492,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: 'absolute',
                                                left: '15px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: '#999',
                                                fontSize: '1.2rem'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 509,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/shop.js",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '20px',
                                    padding: '0 10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                className: `jsx-${mobileStyles.__hash}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: 0,
                                            fontSize: '1.5rem'
                                        },
                                        className: `jsx-${mobileStyles.__hash}`,
                                        children: selectedCategory === 'all' ? 'All Products' : categoryGroups['👕 Upper Wear'].concat(categoryGroups['👖 Lower Wear']).find((cat)=>cat.id === selectedCategory)?.name || 'Products'
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'center'
                                        },
                                        className: `jsx-${mobileStyles.__hash}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '0.9rem',
                                                color: '#666'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: [
                                                filteredItems.length,
                                                " ",
                                                filteredItems.length === 1 ? 'item' : 'items'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 533,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/shop.js",
                                lineNumber: 521,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: productsGridStyle,
                                className: `jsx-${mobileStyles.__hash}` + " " + "products-grid",
                                children: [
                                    filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: productCardStyle,
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: productImageContainerStyle,
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.img,
                                                        alt: item.name,
                                                        style: productImageStyle,
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            setSelectedProduct(item);
                                                            setOrderDetails((prev)=>({
                                                                    ...prev,
                                                                    productName: item.name,
                                                                    productId: item.id,
                                                                    quantity: 1
                                                                }));
                                                            setShowOrderForm(true);
                                                        },
                                                        className: `jsx-${mobileStyles.__hash}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                                        lineNumber: 543,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 542,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: productInfoStyle,
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: productNameStyle,
                                                            className: `jsx-${mobileStyles.__hash}`,
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                                            lineNumber: 561,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: '15px'
                                                            },
                                                            className: `jsx-${mobileStyles.__hash}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    setSelectedProduct(item);
                                                                    setOrderDetails((prev)=>({
                                                                            ...prev,
                                                                            productName: item.name,
                                                                            productId: item.id,
                                                                            quantity: 1
                                                                        }));
                                                                    setShowOrderForm(true);
                                                                },
                                                                style: {
                                                                    ...orderButtonStyle,
                                                                    width: '100%',
                                                                    padding: '10px',
                                                                    fontSize: '1rem'
                                                                },
                                                                className: `jsx-${mobileStyles.__hash}`,
                                                                children: "Order Now"
                                                            }, void 0, false, {
                                                                fileName: "[project]/websites/adoods/pages/shop.js",
                                                                lineNumber: 565,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                                            lineNumber: 564,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 560,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 541,
                                            columnNumber: 13
                                        }, this)),
                                    filteredItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            gridColumn: '1 / -1',
                                            textAlign: 'center',
                                            padding: '40px 20px',
                                            color: '#666'
                                        },
                                        className: `jsx-${mobileStyles.__hash}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '1.1rem',
                                                    marginBottom: '10px'
                                                },
                                                className: `jsx-${mobileStyles.__hash}`,
                                                children: "No products found"
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/shop.js",
                                                lineNumber: 599,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `jsx-${mobileStyles.__hash}`,
                                                children: "Try adjusting your search or filter criteria"
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/shop.js",
                                                lineNumber: 600,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSearchTerm('');
                                                    setSelectedCategory('all');
                                                },
                                                style: {
                                                    marginTop: '15px',
                                                    padding: '8px 20px',
                                                    backgroundColor: '#f0f0f0',
                                                    border: '1px solid #ddd',
                                                    borderRadius: '20px',
                                                    cursor: 'pointer',
                                                    fontSize: '0.9rem'
                                                },
                                                className: `jsx-${mobileStyles.__hash}`,
                                                children: "Clear Filters"
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/shop.js",
                                                lineNumber: 601,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 593,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/shop.js",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/shop.js",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                    padding: '20px',
                    overflow: 'auto'
                },
                onClick: ()=>setSelected(null),
                className: `jsx-${mobileStyles.__hash}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '30px',
                        maxWidth: '800px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        position: 'relative'
                    },
                    onClick: (e)=>{
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                    },
                    className: `jsx-${mobileStyles.__hash}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                e.nativeEvent.stopImmediatePropagation();
                                setSelected(null);
                            },
                            style: {
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                padding: '5px 10px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                '&:hover': {
                                    backgroundColor: '#f5f5f5'
                                }
                            },
                            className: `jsx-${mobileStyles.__hash}`,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 652,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: modalContentInnerStyle,
                            className: `jsx-${mobileStyles.__hash}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: modalImageContainerStyle,
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: selected.img,
                                        alt: selected.name,
                                        style: modalImageStyle,
                                        className: `jsx-${mobileStyles.__hash}`
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 683,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 682,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: modalInfoStyle,
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: modalTitleStyle,
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: selected.name
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 691,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: modalPriceStyle,
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: selected.price
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 692,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: addToCartButtonStyle,
                                            onClick: ()=>{
                                                // Add to cart functionality here
                                                alert(`${selected.name} added to cart!`);
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "Add to Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 693,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: '30px'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        margin: '0 0 10px',
                                                        fontSize: '1.1rem'
                                                    },
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 704,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: '#666',
                                                        lineHeight: '1.6'
                                                    },
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: [
                                                        "This is a high-quality ",
                                                        selected.name,
                                                        " made from premium materials. It's designed for comfort and style, perfect for any occasion."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 705,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 703,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: '20px',
                                                fontSize: '0.9rem',
                                                color: '#666'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: "Free shipping on all orders"
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 712,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: "30-day return policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 713,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: "Secure checkout"
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 714,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 711,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 690,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 681,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/shop.js",
                    lineNumber: 639,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 625,
                columnNumber: 9
            }, this),
            showOrderForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                    padding: '20px'
                },
                className: `jsx-${mobileStyles.__hash}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '30px',
                        maxWidth: '500px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        position: 'relative'
                    },
                    className: `jsx-${mobileStyles.__hash}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCloseForm,
                            style: {
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#666',
                                zIndex: 1
                            },
                            disabled: isSubmitting,
                            className: `jsx-${mobileStyles.__hash}`,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 747,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginTop: 0,
                                marginBottom: '20px'
                            },
                            className: `jsx-${mobileStyles.__hash}`,
                            children: "Order Details"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 765,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginTop: 0,
                                marginBottom: '25px',
                                fontSize: '1.1rem'
                            },
                            className: `jsx-${mobileStyles.__hash}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: "Product:"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 767,
                                    columnNumber: 15
                                }, this),
                                " ",
                                orderDetails.productName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 766,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleOrderSubmit,
                            className: `jsx-${mobileStyles.__hash}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '8px',
                                                fontWeight: '500'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "Your Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 772,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "name",
                                            value: orderDetails.name,
                                            onChange: handleOrderDetailsChange,
                                            required: true,
                                            style: {
                                                width: '100%',
                                                padding: '10px 15px',
                                                borderRadius: '4px',
                                                border: '1px solid #ddd',
                                                fontSize: '1rem',
                                                outline: 'none'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 779,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 771,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '8px',
                                                fontWeight: '500'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "Phone Number *"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 797,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            name: "phone",
                                            value: orderDetails.phone,
                                            onChange: handleOrderDetailsChange,
                                            required: true,
                                            style: {
                                                width: '100%',
                                                padding: '10px 15px',
                                                borderRadius: '4px',
                                                border: '1px solid #ddd',
                                                fontSize: '1rem',
                                                outline: 'none'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 804,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 796,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '25px'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '8px',
                                                fontWeight: '500'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 822,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "quantity",
                                            min: "1",
                                            value: orderDetails.quantity,
                                            onChange: handleOrderDetailsChange,
                                            style: {
                                                width: '100px',
                                                padding: '10px 15px',
                                                borderRadius: '4px',
                                                border: '1px solid #ddd',
                                                fontSize: '1rem',
                                                outline: 'none'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 829,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 821,
                                    columnNumber: 15
                                }, this),
                                submitStatus.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        margin: '15px 0',
                                        padding: '10px',
                                        backgroundColor: submitStatus.success ? '#e8f5e9' : '#ffebee',
                                        color: submitStatus.success ? '#2e7d32' : '#c62828',
                                        borderRadius: '4px',
                                        textAlign: 'center',
                                        fontSize: '0.9rem'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: submitStatus.message
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 847,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isSubmitting,
                                    style: {
                                        backgroundColor: isSubmitting ? '#888' : '#111',
                                        color: 'white',
                                        padding: '12px 30px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        width: '100%',
                                        marginTop: '10px',
                                        opacity: isSubmitting ? 0.7 : 1,
                                        transition: 'all 0.3s ease'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: isSubmitting ? 'Sending...' : 'Place Order'
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 859,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 770,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/shop.js",
                    lineNumber: 737,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 724,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/websites/adoods/pages/shop.js",
        lineNumber: 420,
        columnNumber: 5
    }, this);
}
_s(Shop, "+Ig8hinySthQVLJc13O/WD0AB3E=");
_c = Shop;
var _c;
__turbopack_context__.k.register(_c, "Shop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/websites/adoods/pages/shop.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/shop";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/websites/adoods/pages/shop.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/websites/adoods/pages/shop\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/websites/adoods/pages/shop.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__3bad4c02._.js.map