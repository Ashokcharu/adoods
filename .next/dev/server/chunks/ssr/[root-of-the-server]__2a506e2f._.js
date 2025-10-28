module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

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
            position: 'absolute',
            top: '60px',
            left: 0,
            right: 0,
            width: '100%',
            height: 'calc(100vh - 60px)',
            padding: 0,
            margin: 0,
            lineHeight: 0
        },
        children: banners.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: src,
                alt: `Banner ${i}`,
                className: "banner-img",
                style: {
                    opacity: i === index ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    objectFit: 'cover',
                    objectPosition: 'center',
                    padding: 0,
                    display: i === index ? 'block' : 'none'
                }
            }, i, false, {
                fileName: "[project]/websites/adoods/components/BannerSlider.js",
                lineNumber: 36,
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$websites$2f$adoods$2f$components$2f$BannerSlider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/websites/adoods/components/BannerSlider.js [ssr] (ecmascript)");
"use client";
;
;
;
;
const sectionHeaderStyle = {
    fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
    color: '#1a1a1a',
    margin: '0 0 20px 0',
    fontWeight: '700',
    lineHeight: '1.3',
    position: 'relative',
    display: 'inline-block',
    paddingBottom: '15px',
    textAlign: 'center',
    width: '100%'
};
// Responsive styles
const responsiveStyles = `
  @media (max-width: 768px) {
    .section-content {
      padding: 30px 15px !important;
    }
    .featured-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
      gap: 15px !important;
      padding: 0 10px !important;
    }
    .featured-item {
      padding: 10px !important;
    }
    .featured-item img {
      height: 200px !important;
    }
    .why-choose-grid {
      grid-template-columns: 1fr !important;
      padding: 0 15px !important;
    }
    .benefit-card {
      margin-bottom: 20px !important;
    }
  }
  
  @media (max-width: 480px) {
    .featured-grid {
      grid-template-columns: 1fr !important;
    }
    .featured-item img {
      height: 250px !important;
    }
  }
`;
const sectionHeaderLine = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: '#4a148c',
    borderRadius: '2px'
};
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `jsx-${responsiveStyles.__hash}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: responsiveStyles.__hash,
                children: responsiveStyles
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$websites$2f$adoods$2f$components$2f$BannerSlider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    height: 'calc(100vh - 60px)'
                },
                className: `jsx-${responsiveStyles.__hash}`
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '100%',
                    margin: '0 auto',
                    padding: '30px 0',
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                    position: 'relative',
                    width: '100%',
                    boxSizing: 'border-box'
                },
                className: `jsx-${responsiveStyles.__hash}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '40px 20px',
                        width: '100%',
                        boxSizing: 'border-box'
                    },
                    className: `jsx-${responsiveStyles.__hash}` + " " + "section-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: sectionHeaderStyle,
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: [
                                "Welcome to Adoods",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        ...sectionHeaderLine,
                                        left: '50%'
                                    },
                                    className: `jsx-${responsiveStyles.__hash}`
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                                color: '#4a4a4a',
                                lineHeight: '1.6',
                                margin: '0 auto 30px',
                                maxWidth: '800px',
                                padding: '0 15px'
                            },
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: "Your Style Destination for Premium School Uniforms"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '1.25rem',
                                color: '#4a4a4a',
                                lineHeight: '1.8',
                                margin: '0 auto',
                                maxWidth: '800px'
                            },
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: "Discover our exclusive collection of premium school uniforms and trendy fashion wear, designed for comfort, durability, and style that lasts all day long."
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/index.js",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    background: "#f9f9f9",
                    padding: "60px 20px",
                    textAlign: "center"
                },
                className: `jsx-${responsiveStyles.__hash}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        style: sectionHeaderStyle,
                        className: `jsx-${responsiveStyles.__hash}`,
                        children: [
                            "Featured Collection",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: sectionHeaderLine,
                                className: `jsx-${responsiveStyles.__hash}`
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/index.js",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/index.js",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: "20px",
                            maxWidth: "1200px",
                            margin: "30px auto",
                            padding: "0 15px",
                            width: "100%",
                            boxSizing: "border-box"
                        },
                        className: `jsx-${responsiveStyles.__hash}`,
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
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                display: 'flex',
                                                alignItems: 'center'
                                            },
                                            className: `jsx-${responsiveStyles.__hash}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: `/${img}`,
                                                alt: "Featured T-Shirt",
                                                style: {
                                                    width: "100%",
                                                    height: "280px",
                                                    objectFit: "cover",
                                                    borderRadius: "8px"
                                                },
                                                className: `jsx-${responsiveStyles.__hash}`
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/index.js",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: "15px 0 10px",
                                                color: '#333'
                                            },
                                            className: `jsx-${responsiveStyles.__hash}`,
                                            children: [
                                                "Premium T-Shirt ",
                                                i + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/websites/adoods/pages/index.js",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/index.js",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 121,
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
                className: `jsx-${responsiveStyles.__hash}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1200px",
                            margin: "0 auto",
                            position: "relative",
                            zIndex: 1
                        },
                        className: `jsx-${responsiveStyles.__hash}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                style: sectionHeaderStyle,
                                className: `jsx-${responsiveStyles.__hash}`,
                                children: [
                                    "Why Choose Adoods?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: sectionHeaderLine,
                                        className: `jsx-${responsiveStyles.__hash}`
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/index.js",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/index.js",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                    gap: "30px",
                                    marginTop: "40px"
                                },
                                className: `jsx-${responsiveStyles.__hash}`,
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
                                        className: `jsx-${responsiveStyles.__hash}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "2.5rem",
                                                    marginBottom: "20px"
                                                },
                                                className: `jsx-${responsiveStyles.__hash}`,
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/index.js",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: "1.5rem",
                                                    marginBottom: "15px",
                                                    color: "#2d3748"
                                                },
                                                className: `jsx-${responsiveStyles.__hash}`,
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/index.js",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#4a5568",
                                                    lineHeight: "1.6",
                                                    margin: 0
                                                },
                                                className: `jsx-${responsiveStyles.__hash}`,
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/websites/adoods/pages/index.js",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/websites/adoods/pages/index.js",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/index.js",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/index.js",
                        lineNumber: 204,
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
                        },
                        className: `jsx-${responsiveStyles.__hash}`
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/index.js",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 20px",
                    background: "#ffffff",
                    position: "relative",
                    overflow: "hidden"
                },
                className: `jsx-${responsiveStyles.__hash}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "60px",
                        alignItems: "center"
                    },
                    className: `jsx-${responsiveStyles.__hash}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    style: sectionHeaderStyle,
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: [
                                        "About ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#e91e63"
                                            },
                                            className: `jsx-${responsiveStyles.__hash}`,
                                            children: "Adoods"
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 313,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: "4px",
                                        width: "80px",
                                        background: "linear-gradient(90deg, #4a148c 0%, #e91e63 100%)",
                                        marginBottom: "30px",
                                        borderRadius: "2px"
                                    },
                                    className: `jsx-${responsiveStyles.__hash}`
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#4a5568",
                                        lineHeight: "1.8",
                                        marginBottom: "25px",
                                        fontSize: "1.05rem"
                                    },
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: "At Adoods, we believe that great style starts with great basics. Founded in 2017, we've been dedicated to creating premium quality t-shirts that combine comfort, style, and sustainability."
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#4a5568",
                                        lineHeight: "1.8",
                                        marginBottom: "30px",
                                        fontSize: "1.05rem"
                                    },
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: "Our mission is simple: to provide you with wardrobe essentials that look good, feel amazing, and last longer. Every stitch tells a story of quality and attention to detail."
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 330,
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
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: "Explore Our Collection"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 311,
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
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "/img/aboutus.jpeg",
                                alt: "About Adoods",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.5s ease"
                                },
                                onMouseOver: (e)=>e.currentTarget.style.transform = "scale(1.03)",
                                onMouseOut: (e)=>e.currentTarget.style.transform = "scale(1)",
                                className: `jsx-${responsiveStyles.__hash}`
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/index.js",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/index.js",
                    lineNumber: 303,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    padding: "80px 5%",
                    backgroundColor: "#ffffff"
                },
                className: `jsx-${responsiveStyles.__hash}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        gap: "40px"
                    },
                    className: `jsx-${responsiveStyles.__hash}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                textAlign: "left"
                            },
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    style: sectionHeaderStyle,
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: [
                                        "Premium School Uniforms",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: sectionHeaderLine,
                                            className: `jsx-${responsiveStyles.__hash}`
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "1.1rem",
                                        color: "#4a148c",
                                        fontWeight: "500",
                                        marginBottom: "20px"
                                    },
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: "Excellence in Uniforms, Excellence in Education"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "1.1rem",
                                        color: "#4a4a4a",
                                        lineHeight: "1.8",
                                        marginBottom: "25px"
                                    },
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: "At Adoods, we understand the importance of quality school uniforms that combine comfort, durability, and style. Our uniforms are designed to withstand the rigors of daily school life while keeping students comfortable throughout the day."
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    style: {
                                        listStyle: "none",
                                        padding: 0,
                                        marginBottom: "30px"
                                    },
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: [
                                        "Premium quality fabrics for all-day comfort",
                                        "Durable stitching for long-lasting wear",
                                        "Wrinkle-resistant and easy to maintain",
                                        "Available in various sizes and custom fittings",
                                        "Compliant with school dress codes"
                                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#4a4a4a",
                                                position: "relative",
                                                paddingLeft: "30px"
                                            },
                                            className: `jsx-${responsiveStyles.__hash}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        position: "absolute",
                                                        left: 0,
                                                        color: "#4a148c"
                                                    },
                                                    className: `jsx-${responsiveStyles.__hash}`,
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/index.js",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this),
                                                item
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    style: {
                                        backgroundColor: "#4a148c",
                                        color: "white",
                                        border: "none",
                                        padding: "12px 30px",
                                        borderRadius: "30px",
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 4px 15px rgba(74, 20, 140, 0.3)"
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 7px 20px rgba(74, 20, 140, 0.4)';
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(74, 20, 140, 0.3)';
                                    },
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: "View Uniform Collection"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                position: "relative",
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                height: "500px"
                            },
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "/img/schooluniform.jpg",
                                alt: "Premium School Uniforms",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.5s ease"
                                },
                                onMouseOver: (e)=>e.currentTarget.style.transform = "scale(1.03)",
                                onMouseOut: (e)=>e.currentTarget.style.transform = "scale(1)",
                                className: `jsx-${responsiveStyles.__hash}`
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/index.js",
                                lineNumber: 486,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 478,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/index.js",
                    lineNumber: 394,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 388,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 20px",
                    background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                    textAlign: "center"
                },
                className: `jsx-${responsiveStyles.__hash}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto"
                    },
                    className: `jsx-${responsiveStyles.__hash}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: "2.5rem",
                                marginBottom: "15px",
                                color: "#2d3748"
                            },
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: "What Our Customers Say"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 514,
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
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: "Don't just take our word for it. Here's what our customers have to say about their Adoods experience."
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: "30px",
                                marginTop: "40px"
                            },
                            className: `jsx-${responsiveStyles.__hash}`,
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
                                    className: `jsx-${responsiveStyles.__hash}`,
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
                                            className: `jsx-${responsiveStyles.__hash}`,
                                            children: testimonial.avatar
                                        }, void 0, false, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 581,
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
                                            className: `jsx-${responsiveStyles.__hash}`,
                                            children: [
                                                '"',
                                                testimonial.review,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 598,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            },
                                            className: `jsx-${responsiveStyles.__hash}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: `jsx-${responsiveStyles.__hash}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            style: {
                                                                margin: "0 0 5px 0",
                                                                color: "#2d3748",
                                                                fontSize: "1.1rem"
                                                            },
                                                            className: `jsx-${responsiveStyles.__hash}`,
                                                            children: testimonial.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/index.js",
                                                            lineNumber: 614,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: 0,
                                                                color: "#718096",
                                                                fontSize: "0.9rem"
                                                            },
                                                            className: `jsx-${responsiveStyles.__hash}`,
                                                            children: testimonial.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/websites/adoods/pages/index.js",
                                                            lineNumber: 621,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/websites/adoods/pages/index.js",
                                                    lineNumber: 613,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: "#f6b01e",
                                                        fontSize: "1.2rem"
                                                    },
                                                    className: `jsx-${responsiveStyles.__hash}`,
                                                    children: testimonial.rating
                                                }, void 0, false, {
                                                    fileName: "[project]/websites/adoods/pages/index.js",
                                                    lineNumber: 629,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/websites/adoods/pages/index.js",
                                            lineNumber: 608,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 560,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 531,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/index.js",
                    lineNumber: 510,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    background: "#111",
                    color: "#fff",
                    textAlign: "center",
                    padding: "80px 20px"
                },
                className: `jsx-${responsiveStyles.__hash}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto"
                    },
                    className: `jsx-${responsiveStyles.__hash}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: "2.5rem",
                                marginBottom: "15px"
                            },
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: "Join Our Community"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 654,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                margin: "0 auto 30px",
                                color: "#ccc",
                                maxWidth: "600px",
                                lineHeight: "1.6"
                            },
                            className: `jsx-${responsiveStyles.__hash}`,
                            children: "Subscribe to get updates on new collections and exclusive offers!"
                        }, void 0, false, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 658,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                            action: "mailto:adoodshosur@gmail.com",
                            method: "POST",
                            encType: "text/plain",
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                flexWrap: "wrap",
                                maxWidth: "500px",
                                margin: "0 auto"
                            },
                            className: `jsx-${responsiveStyles.__hash}`,
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
                                    },
                                    className: `jsx-${responsiveStyles.__hash}`
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 679,
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
                                    className: `jsx-${responsiveStyles.__hash}`,
                                    children: "Subscribe"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/index.js",
                                    lineNumber: 694,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/websites/adoods/pages/index.js",
                            lineNumber: 666,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/websites/adoods/pages/index.js",
                    lineNumber: 653,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/websites/adoods/pages/index.js",
                lineNumber: 645,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/websites/adoods/pages/index.js",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2a506e2f._.js.map