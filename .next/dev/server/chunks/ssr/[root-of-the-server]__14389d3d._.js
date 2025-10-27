module.exports = [
"[project]/websites/adoods/pages/shop.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Shop
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
"use client";
;
;
;
function Shop() {
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
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [filteredItems, setFilteredItems] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(items);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('all');
    const [showOrderForm, setShowOrderForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [orderDetails, setOrderDetails] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
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
        // Here you would typically send this data to your backend
        console.log('Order details:', orderDetails);
        // For demo purposes, just show an alert
        alert(`Order received! We'll contact you soon.\n\nProduct: ${orderDetails.productName}\nQuantity: ${orderDetails.quantity}\nName: ${orderDetails.name}\nPhone: ${orderDetails.phone}`);
        // Reset form and close modal
        setOrderDetails({
            name: '',
            phone: '',
            quantity: 1,
            productName: '',
            productId: ''
        });
        setShowOrderForm(false);
    };
    // Handle order now button click
    const handleOrderNow = (e, product)=>{
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setSelectedProduct(product);
        setOrderDetails((prev)=>({
                ...prev,
                productName: product.name,
                productId: product.id,
                quantity: 1
            }));
        setShowOrderForm(true);
        return false;
    };
    // Handle product card click
    const handleProductClick = (e, item)=>{
        // Only set selected if the click is not on a link or button
        const target = e.target;
        if (target.tagName !== 'A' && target.tagName !== 'BUTTON' && !target.closest('a') && !target.closest('button')) {
            setSelected(item);
        }
    };
    // Filter items based on search and category
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let result = [
            ...items
        ];
        // Filter by category first if not 'all'
        if (selectedCategory !== 'all') {
            result = result.filter((item)=>item.category === selectedCategory);
        }
        // Then filter by search term if any
        if (searchTerm) {
            const term = searchTerm.toLowerCase().trim();
            result = result.filter((item)=>item.name.toLowerCase().includes(term) || item.category.toLowerCase().includes(term));
        }
        setFilteredItems(result);
    }, [
        searchTerm,
        selectedCategory,
        items
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
        minHeight: '100vh'
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: containerStyle,
        className: `jsx-${mobileStyles.__hash}` + " " + "shop-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: mobileStyles.__hash,
                children: mobileStyles
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: headerStyle,
                className: `jsx-${mobileStyles.__hash}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    style: titleStyle,
                    className: `jsx-${mobileStyles.__hash}`,
                    children: "Shop Our Collection"
                }, void 0, false, {
                    fileName: "[project]/websites/adoods/pages/shop.js",
                    lineNumber: 396,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: mainContentStyle,
                className: `jsx-${mobileStyles.__hash}` + " " + "main-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                        style: sidebarStyle,
                        className: `jsx-${mobileStyles.__hash}` + " " + "sidebar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: categoryGroupsStyle,
                                className: `jsx-${mobileStyles.__hash}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        className: `jsx-${mobileStyles.__hash}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    margin: '0 0 15px',
                                                    fontSize: '1.2rem'
                                                },
                                                className: `jsx-${mobileStyles.__hash}`,
                                                children: "Categories"
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/shop.js",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 404,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this),
                                    Object.entries(categoryGroups).map(([groupName, categories])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: categoryGroupStyle,
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    style: groupTitleStyle,
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: groupName
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 424,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: categoriesContainerStyle,
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                                                            lineNumber: 427,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 425,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, groupName, true, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 423,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/shop.js",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '30px'
                                },
                                className: `jsx-${mobileStyles.__hash}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    style: {
                                        margin: '0 0 15px',
                                        fontSize: '1.2rem'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: "Categories"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/shop.js",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/shop.js",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        className: `jsx-${mobileStyles.__hash}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '20px',
                                    padding: '15px',
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                },
                                className: `jsx-${mobileStyles.__hash}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        maxWidth: '600px',
                                        margin: '0 auto',
                                        position: 'relative'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 485,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/shop.js",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '20px',
                                    padding: '0 10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                className: `jsx-${mobileStyles.__hash}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: 0,
                                            fontSize: '1.5rem'
                                        },
                                        className: `jsx-${mobileStyles.__hash}`,
                                        children: selectedCategory === 'all' ? 'All Products' : categoryGroups['👕 Upper Wear'].concat(categoryGroups['👖 Lower Wear']).find((cat)=>cat.id === selectedCategory)?.name || 'Products'
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'center'
                                        },
                                        className: `jsx-${mobileStyles.__hash}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 510,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 509,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/shop.js",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: productsGridStyle,
                                className: `jsx-${mobileStyles.__hash}` + " " + "products-grid",
                                children: [
                                    filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: productCardStyle,
                                            onClick: (e)=>handleProductClick(e, item),
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: productImageContainerStyle,
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                        src: item.img,
                                                        alt: item.name,
                                                        style: productImageStyle,
                                                        className: `jsx-${mobileStyles.__hash}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                                        lineNumber: 523,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 522,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: productInfoStyle,
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            style: productNameStyle,
                                                            className: `jsx-${mobileStyles.__hash}`,
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                                            lineNumber: 530,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>handleOrderNow(e, item),
                                                            style: orderButtonStyle,
                                                            className: `jsx-${mobileStyles.__hash}`,
                                                            children: "Order Now"
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                                            lineNumber: 531,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 529,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 517,
                                            columnNumber: 13
                                        }, this)),
                                    filteredItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            gridColumn: '1 / -1',
                                            textAlign: 'center',
                                            padding: '40px 20px',
                                            color: '#666'
                                        },
                                        className: `jsx-${mobileStyles.__hash}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '1.1rem',
                                                    marginBottom: '10px'
                                                },
                                                className: `jsx-${mobileStyles.__hash}`,
                                                children: "No products found"
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/shop.js",
                                                lineNumber: 548,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: `jsx-${mobileStyles.__hash}`,
                                                children: "Try adjusting your search or filter criteria"
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/shop.js",
                                                lineNumber: 549,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/shop.js",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/shop.js",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                            lineNumber: 601,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: modalContentInnerStyle,
                            className: `jsx-${mobileStyles.__hash}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: modalImageContainerStyle,
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: selected.img,
                                        alt: selected.name,
                                        style: modalImageStyle,
                                        className: `jsx-${mobileStyles.__hash}`
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/shop.js",
                                        lineNumber: 632,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 631,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: modalInfoStyle,
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            style: modalTitleStyle,
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: selected.name
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 640,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            style: modalPriceStyle,
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: selected.price
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 641,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            style: addToCartButtonStyle,
                                            onClick: ()=>{
                                                // Add to cart functionality here
                                                alert(`${selected.name} added to cart!`);
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "Add to Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 642,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: '30px'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        margin: '0 0 10px',
                                                        fontSize: '1.1rem'
                                                    },
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 653,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
                                                    lineNumber: 654,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 652,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: '20px',
                                                fontSize: '0.9rem',
                                                color: '#666'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: "Free shipping on all orders"
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 661,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: "30-day return policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 662,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: `jsx-${mobileStyles.__hash}`,
                                                    children: "Secure checkout"
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                                    lineNumber: 663,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 660,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 639,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 630,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/shop.js",
                    lineNumber: 588,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 574,
                columnNumber: 9
            }, this),
            showOrderForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowOrderForm(false),
                            style: {
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#666'
                            },
                            className: `jsx-${mobileStyles.__hash}`,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 696,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: {
                                marginTop: 0,
                                marginBottom: '20px'
                            },
                            className: `jsx-${mobileStyles.__hash}`,
                            children: "Order Details"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 712,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                marginTop: 0,
                                marginBottom: '25px',
                                fontSize: '1.1rem'
                            },
                            className: `jsx-${mobileStyles.__hash}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: "Product:"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 714,
                                    columnNumber: 15
                                }, this),
                                " ",
                                orderDetails.productName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 713,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                            onSubmit: handleOrderSubmit,
                            className: `jsx-${mobileStyles.__hash}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '8px',
                                                fontWeight: '500'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "Your Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 719,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 726,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 718,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '8px',
                                                fontWeight: '500'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "Phone Number *"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 744,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 751,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 743,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '25px'
                                    },
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '8px',
                                                fontWeight: '500'
                                            },
                                            className: `jsx-${mobileStyles.__hash}`,
                                            children: "Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/shop.js",
                                            lineNumber: 769,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 776,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 768,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    style: {
                                        backgroundColor: '#111',
                                        color: 'white',
                                        border: 'none',
                                        padding: '12px 24px',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        width: '100%',
                                        transition: 'background-color 0.2s'
                                    },
                                    onMouseOver: (e)=>e.target.style.backgroundColor = '#333',
                                    onMouseOut: (e)=>e.target.style.backgroundColor = '#111',
                                    className: `jsx-${mobileStyles.__hash}`,
                                    children: "Place Order"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/shop.js",
                                    lineNumber: 793,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/shop.js",
                            lineNumber: 717,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/shop.js",
                    lineNumber: 686,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/shop.js",
                lineNumber: 673,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/websites/adoods/pages/shop.js",
        lineNumber: 393,
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