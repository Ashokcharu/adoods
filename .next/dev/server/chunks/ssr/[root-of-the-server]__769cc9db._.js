module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/websites/adoods/components/BannerSlider.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BannerSlider
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
"use client";
;
;
;
function BannerSlider() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const banners = [
        "/img/banner1.png",
        "/img/banner2.png"
    ];
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>setIndex((i)=>(i + 1) % banners.length), 3000);
        return ()=>clearInterval(timer);
    }, []);
    const handleBannerClick = ()=>{
        router.push('/shop');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "banner",
        onClick: handleBannerClick,
        style: {
            cursor: 'pointer'
        },
        children: banners.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: src,
                alt: `Banner ${i}`,
                className: "banner-img",
                style: {
                    opacity: i === index ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }
            }, i, false, {
                fileName: "[project]/websites/adoods/components/BannerSlider.js",
                lineNumber: 26,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/websites/adoods/components/BannerSlider.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/websites/adoods/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$websites$2f$adoods$2f$components$2f$BannerSlider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/websites/adoods/components/BannerSlider.js [ssr] (ecmascript)");
"use client";
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$websites$2f$adoods$2f$components$2f$BannerSlider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    background: "#f9f9f9",
                    padding: "60px 20px",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Featured Collection"
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/index.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "25px",
                            maxWidth: "1000px",
                            margin: "40px auto"
                        },
                        children: [
                            "img/Design_7.jpeg",
                            "img/Design_10.jpeg",
                            "img/Design_11.jpeg"
                        ].map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                style: {
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'block',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    borderRadius: '8px'
                                },
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        border: "1px solid #eee",
                                        borderRadius: "8px",
                                        background: "#fff",
                                        padding: "15px",
                                        height: "100%",
                                        display: 'flex',
                                        flexDirection: 'column'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                display: 'flex',
                                                alignItems: 'center'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: `/${img}`,
                                                alt: "Featured T-Shirt",
                                                style: {
                                                    width: "100%",
                                                    height: "280px",
                                                    objectFit: "cover",
                                                    borderRadius: "8px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/index.js",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: "15px 0 10px",
                                                color: '#333'
                                            },
                                            children: [
                                                "Premium T-Shirt ",
                                                i + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/websites/adoods/pages/index.js",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/index.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    padding: "80px 20px",
                    textAlign: "center",
                    background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1200px",
                            margin: "0 auto",
                            position: "relative",
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "2.5rem",
                                    marginBottom: "60px",
                                    color: "#2d3748",
                                    position: "relative",
                                    display: "inline-block"
                                },
                                children: [
                                    "Why Choose Adoods?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            position: "absolute",
                                            bottom: "-10px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            width: "80px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #4a148c 0%, #e91e63 100%)",
                                            borderRadius: "3px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/index.js",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/index.js",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                    gap: "30px",
                                    marginTop: "40px"
                                },
                                children: [
                                    {
                                        icon: "✨",
                                        title: "Premium Quality",
                                        description: "Only the finest fabrics and materials for ultimate comfort and durability."
                                    },
                                    {
                                        icon: "👕",
                                        title: "Perfect Fit",
                                        description: "Designed to flatter every body type with attention to detail and comfort."
                                    },
                                    {
                                        icon: "⚡",
                                        title: "Fast Shipping",
                                        description: "Quick and reliable delivery to your doorstep, with real-time tracking."
                                    }
                                ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "white",
                                            padding: "40px 25px",
                                            borderRadius: "12px",
                                            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                                            transition: "all 0.3s ease",
                                            border: "1px solid rgba(0,0,0,0.05)",
                                            cursor: "default"
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.transform = "translateY(-5px)";
                                            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "2.5rem",
                                                    marginBottom: "20px"
                                                },
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/index.js",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: "1.5rem",
                                                    marginBottom: "15px",
                                                    color: "#2d3748"
                                                },
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/index.js",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#4a5568",
                                                    lineHeight: "1.6",
                                                    margin: 0
                                                },
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/index.js",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/websites/adoods/pages/index.js",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/index.js",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/index.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "300px",
                            height: "300px",
                            background: "radial-gradient(circle, rgba(233,30,99,0.1) 0%, rgba(255,255,255,0) 70%)",
                            zIndex: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/index.js",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 20px",
                    background: "#ffffff",
                    position: "relative",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "60px",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "2.5rem",
                                        color: "#2d3748",
                                        marginBottom: "25px",
                                        lineHeight: "1.3"
                                    },
                                    children: [
                                        "About ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#e91e63"
                                            },
                                            children: "Adoods"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 219,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: "4px",
                                        width: "80px",
                                        background: "linear-gradient(90deg, #4a148c 0%, #e91e63 100%)",
                                        marginBottom: "30px",
                                        borderRadius: "2px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#4a5568",
                                        lineHeight: "1.8",
                                        marginBottom: "25px",
                                        fontSize: "1.05rem"
                                    },
                                    children: "At Adoods, we believe that great style starts with great basics. Founded in 2017, we've been dedicated to creating premium quality t-shirts that combine comfort, style, and sustainability."
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#4a5568",
                                        lineHeight: "1.8",
                                        marginBottom: "30px",
                                        fontSize: "1.05rem"
                                    },
                                    children: "Our mission is simple: to provide you with wardrobe essentials that look good, feel amazing, and last longer. Every stitch tells a story of quality and attention to detail."
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.location.href = '/shop',
                                    style: {
                                        background: 'linear-gradient(90deg, #4a148c 0%, #7b1fa2 100%)',
                                        color: 'white',
                                        border: 'none',
                                        padding: '12px 30px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(74, 20, 140, 0.3)'
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 7px 20px rgba(74, 20, 140, 0.4)';
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(74, 20, 140, 0.3)';
                                    },
                                    children: "Explore Our Collection"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                position: "relative",
                                height: "500px",
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "/img/Design_1.jpeg",
                                alt: "About Adoods",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.5s ease"
                                },
                                onMouseOver: (e)=>e.currentTarget.style.transform = "scale(1.03)",
                                onMouseOut: (e)=>e.currentTarget.style.transform = "scale(1)"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/index.js",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/index.js",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 20px",
                    background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: "2.5rem",
                                marginBottom: "15px",
                                color: "#2d3748"
                            },
                            children: "What Our Customers Say"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#718096",
                                fontSize: "1.1rem",
                                maxWidth: "700px",
                                margin: "0 auto 60px",
                                lineHeight: "1.6"
                            },
                            children: "Don't just take our word for it. Here's what our customers have to say about their Adoods experience."
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: "30px",
                                marginTop: "40px"
                            },
                            children: [
                                {
                                    name: "Rahul Sharma",
                                    role: "Frequent Shopper",
                                    avatar: "👨‍💼",
                                    review: "The quality of Adoods t-shirts is unmatched. They're my go-to for both casual and semi-formal looks.",
                                    rating: "★★★★★"
                                },
                                {
                                    name: "Priya Patel",
                                    role: "Fashion Blogger",
                                    avatar: "👩‍💻",
                                    review: "I've tried many brands, but Adoos stands out for their perfect fit and durability. Highly recommend!",
                                    rating: "★★★★★"
                                },
                                {
                                    name: "Amit Kumar",
                                    role: "First-time Buyer",
                                    avatar: "👨‍🎓",
                                    review: "Impressed with the fabric quality and stitching. Will definitely be buying more colors!",
                                    rating: "★★★★☆"
                                }
                            ].map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "white",
                                        padding: "35px 30px",
                                        borderRadius: "12px",
                                        boxShadow: "0 5px 25px rgba(0,0,0,0.05)",
                                        transition: "all 0.3s ease",
                                        textAlign: "left",
                                        position: "relative",
                                        border: "1px solid rgba(0,0,0,0.03)"
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.transform = "translateY(-5px)";
                                        e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.08)";
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 5px 25px rgba(0,0,0,0.05)";
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "2.5rem",
                                                position: "absolute",
                                                top: "-20px",
                                                left: "30px",
                                                background: "linear-gradient(135deg, #4a148c 0%, #e91e63 100%)",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "white",
                                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                                            },
                                            children: testimonial.avatar
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#4a5568",
                                                lineHeight: "1.8",
                                                fontStyle: "italic",
                                                marginBottom: "25px",
                                                position: "relative",
                                                paddingTop: "10px"
                                            },
                                            children: [
                                                '"',
                                                testimonial.review,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            style: {
                                                                margin: "0 0 5px 0",
                                                                color: "#2d3748",
                                                                fontSize: "1.1rem"
                                                            },
                                                            children: testimonial.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/index.js",
                                                            lineNumber: 405,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: 0,
                                                                color: "#718096",
                                                                fontSize: "0.9rem"
                                                            },
                                                            children: testimonial.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/index.js",
                                                            lineNumber: 412,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/websites/adoods/pages/index.js",
                                                    lineNumber: 404,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: "#f6b01e",
                                                        fontSize: "1.2rem"
                                                    },
                                                    children: testimonial.rating
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/index.js",
                                                    lineNumber: 420,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/index.js",
                    lineNumber: 301,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    background: "#111",
                    color: "#fff",
                    textAlign: "center",
                    padding: "80px 20px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: "2.5rem",
                                marginBottom: "15px"
                            },
                            children: "Join Our Community"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                margin: "0 auto 30px",
                                color: "#ccc",
                                maxWidth: "600px",
                                lineHeight: "1.6"
                            },
                            children: "Subscribe to get updates on new collections and exclusive offers!"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                flexWrap: "wrap",
                                maxWidth: "500px",
                                margin: "0 auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Enter your email",
                                    required: true,
                                    style: {
                                        padding: "0 15px",
                                        borderRadius: "6px",
                                        border: "none",
                                        minWidth: "250px",
                                        flex: "1",
                                        height: "42px",
                                        boxSizing: "border-box",
                                        fontSize: "1rem"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 467,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    style: {
                                        background: "#fff",
                                        color: "#111",
                                        padding: "0 25px",
                                        borderRadius: "6px",
                                        border: "none",
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                        transition: "all 0.3s ease",
                                        height: "42px",
                                        boxSizing: "border-box",
                                        fontSize: "0.95rem"
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.opacity = "0.9";
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.opacity = "1";
                                    },
                                    children: "Subscribe"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 482,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 457,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/index.js",
                    lineNumber: 444,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 436,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/websites/adoods/pages/index.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__769cc9db._.js.map