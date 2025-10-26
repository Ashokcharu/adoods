module.exports = [
"[project]/websites/adoods/pages/shop.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Shop
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
"use client";
;
;
function Shop() {
    const items = [
        {
            id: 1,
            name: 'A26',
            img: '/img/Design_1.jpeg',
            price: '₹499',
            category: 't-shirt'
        },
        {
            id: 2,
            name: 'A27',
            img: '/img/Design_2.jpeg',
            price: '₹549',
            category: 't-shirt'
        },
        {
            id: 3,
            name: 'A31',
            img: '/img/Design_3.jpeg',
            price: '₹499',
            category: 't-shirt'
        },
        {
            id: 4,
            name: 'A34',
            img: '/img/Design_4.jpeg',
            price: '₹599',
            category: 't-shirt'
        },
        {
            id: 5,
            name: 'A47',
            img: '/img/Design_5.jpeg',
            price: '₹549',
            category: 't-shirt'
        },
        {
            id: 6,
            name: 'A49',
            img: '/img/Design_6.jpeg',
            price: '₹499',
            category: 't-shirt'
        },
        {
            id: 7,
            name: 'A50',
            img: '/img/Design_7.jpeg',
            price: '₹599',
            category: 't-shirt'
        },
        {
            id: 8,
            name: 'A51',
            img: '/img/Design_8.jpeg',
            price: '₹549',
            category: 't-shirt'
        },
        {
            id: 9,
            name: 'A101',
            img: '/img/Design_9.jpeg',
            price: '₹499',
            category: 't-shirt'
        },
        {
            id: 10,
            name: 'A53',
            img: '/img/Design_10.jpeg',
            price: '₹599',
            category: 't-shirt'
        },
        {
            id: 11,
            name: 'A64',
            img: '/img/Design_11.jpeg',
            price: '₹549',
            category: 't-shirt'
        },
        {
            id: 12,
            name: 'A69',
            img: '/img/Design_12.jpeg',
            price: '₹499',
            category: 't-shirt'
        },
        {
            id: 13,
            name: 'A82',
            img: '/img/Design_13.jpeg',
            price: '₹599',
            category: 't-shirt'
        }
    ];
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [filteredItems, setFilteredItems] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(items);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('all');
    // Filter items based on search and category
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let result = items;
        if (searchTerm) {
            result = result.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (selectedCategory !== 'all') {
            result = result.filter((item)=>item.category === selectedCategory);
        }
        setFilteredItems(result);
    }, [
        searchTerm,
        selectedCategory
    ]);
    const categories = [
        'all',
        ...new Set(items.map((item)=>item.category))
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "shop-container",
        style: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '20px',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    marginBottom: '40px',
                    padding: '20px 0',
                    borderBottom: '1px solid #eee'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '2.5rem',
                            color: '#333',
                            marginBottom: '20px',
                            fontWeight: '700',
                            letterSpacing: '1px'
                        },
                        children: "Shop Our Collection"
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/shop.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                            marginBottom: '20px',
                            flexWrap: 'wrap'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                            value: selectedCategory,
                            onChange: (e)=>setSelectedCategory(e.target.value),
                            style: {
                                padding: '8px 15px',
                                borderRadius: '20px',
                                border: '1px solid #ddd',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                outline: 'none',
                                backgroundColor: 'white',
                                height: '40px',
                                minWidth: '150px'
                            },
                            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                    value: category,
                                    children: category.charAt(0).toUpperCase() + category.slice(1)
                                }, category, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/shop.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            filteredItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '50px 20px',
                    color: '#666'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: '1.2rem'
                    },
                    children: "No products found. Try adjusting your search or filters."
                }, void 0, false, {
                    fileName: "[project]/websites/adoods/pages/shop.js",
                    lineNumber: 103,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 98,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px',
                    padding: '0 10px'
                },
                children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "product-card",
                        style: {
                            background: '#fff',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            position: 'relative'
                        },
                        onMouseOver: (e)=>{
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                        },
                        onMouseOut: (e)=>{
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                        },
                        onClick: ()=>setSelected(item),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative',
                                    paddingTop: '100%',
                                    overflow: 'hidden',
                                    backgroundColor: '#f9f9f9'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: item.img,
                                    alt: item.name,
                                    style: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    },
                                    onMouseOver: (e)=>{
                                        e.target.style.transform = 'scale(1.05)';
                                    },
                                    onMouseOut: (e)=>{
                                        e.target.style.transform = 'scale(1)';
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/shop.js",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        style: {
                                            margin: '0 0 15px 0',
                                            fontSize: '1.2rem',
                                            color: '#333',
                                            fontWeight: '600',
                                            textAlign: 'center'
                                        },
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setSelected(item);
                                        },
                                        style: {
                                            width: '100%',
                                            padding: '12px',
                                            background: '#111',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            fontWeight: '600',
                                            transition: 'all 0.3s ease',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            fontSize: '0.85rem'
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.background = '#333';
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.background = '#111';
                                        },
                                        children: "Quick View"
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/shop.js",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/websites/adoods/pages/shop.js",
                        lineNumber: 113,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.7)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                    padding: '20px',
                    boxSizing: 'border-box',
                    backdropFilter: 'blur(5px)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#fff',
                        borderRadius: '12px',
                        maxWidth: '800px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        position: 'relative',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelected(null),
                            style: {
                                position: 'absolute',
                                top: '15px',
                                right: '20px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#666',
                                zIndex: 10
                            },
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    md: 'row'
                                },
                                gap: '30px',
                                padding: '30px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: '1',
                                        minWidth: '300px',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        background: '#f9f9f9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '20px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: selected.img,
                                        alt: selected.name,
                                        style: {
                                            maxWidth: '100%',
                                            maxHeight: '400px',
                                            objectFit: 'contain'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: '1'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '1.8rem',
                                                margin: '0 0 10px 0',
                                                color: '#333',
                                                fontWeight: '700'
                                            },
                                            children: selected.name
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '1.5rem',
                                                color: '#111',
                                                fontWeight: '700',
                                                margin: '0 0 20px 0'
                                            },
                                            children: selected.price
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#666',
                                                lineHeight: '1.6',
                                                marginBottom: '30px'
                                            },
                                            children: "High-quality t-shirt with unique design. Made from 100% cotton for maximum comfort."
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                            action: "https://formspree.io/f/YOUR_FORM_ID",
                                            method: "POST",
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                    type: "hidden",
                                                    name: "product_id",
                                                    value: selected.id
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                    type: "hidden",
                                                    name: "product_name",
                                                    value: selected.name
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                display: 'block',
                                                                marginBottom: '8px',
                                                                fontWeight: '600',
                                                                color: '#444'
                                                            },
                                                            children: "Your Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                                            lineNumber: 316,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            name: "name",
                                                            type: "text",
                                                            placeholder: "Enter your name",
                                                            required: true,
                                                            style: {
                                                                width: '100%',
                                                                padding: '12px 15px',
                                                                borderRadius: '6px',
                                                                border: '1px solid #ddd',
                                                                fontSize: '1rem',
                                                                boxSizing: 'border-box'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                                            lineNumber: 324,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                display: 'block',
                                                                marginBottom: '8px',
                                                                fontWeight: '600',
                                                                color: '#444'
                                                            },
                                                            children: "Phone Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                                            lineNumber: 341,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            name: "phone",
                                                            type: "tel",
                                                            placeholder: "Enter your phone number",
                                                            required: true,
                                                            style: {
                                                                width: '100%',
                                                                padding: '12px 15px',
                                                                borderRadius: '6px',
                                                                border: '1px solid #ddd',
                                                                fontSize: '1rem',
                                                                boxSizing: 'border-box'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                                            lineNumber: 349,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                display: 'block',
                                                                marginBottom: '8px',
                                                                fontWeight: '600',
                                                                color: '#444'
                                                            },
                                                            children: "Quantity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                                            lineNumber: 366,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            name: "order_count",
                                                            type: "number",
                                                            min: "1",
                                                            defaultValue: "1",
                                                            required: true,
                                                            style: {
                                                                width: '100px',
                                                                padding: '12px 15px',
                                                                borderRadius: '6px',
                                                                border: '1px solid #ddd',
                                                                fontSize: '1rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                                            lineNumber: 374,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    style: {
                                                        background: '#111',
                                                        color: 'white',
                                                        padding: '15px 25px',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        fontWeight: '600',
                                                        fontSize: '1rem',
                                                        marginTop: '10px',
                                                        transition: 'background 0.3s ease',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.5px'
                                                    },
                                                    onMouseOver: (e)=>{
                                                        e.currentTarget.style.background = '#333';
                                                    },
                                                    onMouseOut: (e)=>{
                                                        e.currentTarget.style.background = '#111';
                                                    },
                                                    children: "Place Order"
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 390,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/shop.js",
                    lineNumber: 221,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 206,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/websites/adoods/pages/shop.js",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__14389d3d._.js.map