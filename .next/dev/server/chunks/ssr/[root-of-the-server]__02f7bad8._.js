module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[project]/websites/adoods/pages/contact.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
"use client";
;
;
;
const socialLinkStyle = {
    color: "#4a148c",
    textDecoration: "none",
    padding: "8px 15px",
    border: "1px solid #4a148c",
    borderRadius: "50px",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
    display: "inline-block"
};
function Contact() {
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target;
        const data = new FormData(form);
        try {
            await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json"
                }
            });
            // Show success message
            setShowSuccess(true);
            form.reset();
            // Hide success message after 30 seconds
            const timer = setTimeout(()=>{
                setShowSuccess(false);
            }, 30000);
            // Clean up timer
            return ()=>clearTimeout(timer);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            padding: "60px 20px"
        },
        className: "jsx-f3b8438058e81a9" + " " + "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "40px"
                },
                className: "jsx-f3b8438058e81a9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "2.2rem",
                            marginBottom: "10px"
                        },
                        className: "jsx-f3b8438058e81a9",
                        children: "Get in Touch"
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/contact.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#555",
                            maxWidth: "700px",
                            margin: "0 auto"
                        },
                        className: "jsx-f3b8438058e81a9",
                        children: "Have questions about our products or want to collaborate? We're here to help. Fill out the form or visit us at our store location."
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/contact.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/contact.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1200px",
                    margin: "0 auto 60px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "30px",
                    padding: "0 20px"
                },
                className: "jsx-f3b8438058e81a9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#f8f9fa",
                            padding: "30px",
                            borderRadius: "12px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                            textAlign: "center"
                        },
                        className: "jsx-f3b8438058e81a9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "60px",
                                    height: "60px",
                                    background: "linear-gradient(135deg, #4a148c 0%, #e91e63 100%)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 20px"
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "1.8rem"
                                    },
                                    className: "jsx-f3b8438058e81a9",
                                    children: "📍"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/contact.js",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: "#2d3748",
                                    marginBottom: "15px"
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: "Our Location"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#4a5568",
                                    lineHeight: "1.6",
                                    margin: 0
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: [
                                    "No 784/1 A1A Near Vakil layout Hosur,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {
                                        className: "jsx-f3b8438058e81a9"
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/contact.js",
                                        lineNumber: 92,
                                        columnNumber: 50
                                    }, this),
                                    "Hosur, Tamil Nadu 635109"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/contact.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#f8f9fa",
                            padding: "30px",
                            borderRadius: "12px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                            textAlign: "center"
                        },
                        className: "jsx-f3b8438058e81a9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "60px",
                                    height: "60px",
                                    background: "linear-gradient(135deg, #4a148c 0%, #e91e63 100%)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 20px"
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "1.8rem"
                                    },
                                    className: "jsx-f3b8438058e81a9",
                                    children: "📞"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/contact.js",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: "#2d3748",
                                    marginBottom: "15px"
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#4a5568",
                                    lineHeight: "1.6",
                                    margin: 0
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "tel:09514109080",
                                        style: {
                                            color: "#4a148c",
                                            textDecoration: "none"
                                        },
                                        className: "jsx-f3b8438058e81a9",
                                        children: "+91 95141 09080"
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/contact.js",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {
                                        className: "jsx-f3b8438058e81a9"
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/contact.js",
                                        lineNumber: 118,
                                        columnNumber: 111
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "mailto:adoodshosur@gmail.com",
                                        style: {
                                            color: "#4a148c",
                                            textDecoration: "none"
                                        },
                                        className: "jsx-f3b8438058e81a9",
                                        children: "adoodshosur@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/contact.js",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/contact.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#f8f9fa",
                            padding: "30px",
                            borderRadius: "12px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                            textAlign: "center"
                        },
                        className: "jsx-f3b8438058e81a9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "60px",
                                    height: "60px",
                                    background: "linear-gradient(135deg, #4a148c 0%, #e91e63 100%)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 20px"
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "1.8rem"
                                    },
                                    className: "jsx-f3b8438058e81a9",
                                    children: "⏰"
                                }, void 0, false, {
                                    fileName: "[project]/websites/adoods/pages/contact.js",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: "#2d3748",
                                    marginBottom: "15px"
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: "Working Hours"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#4a5568",
                                    lineHeight: "1.8",
                                    margin: 0
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: [
                                    "Monday - Saturday: 10:00 AM - 9:00 PM",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {
                                        className: "jsx-f3b8438058e81a9"
                                    }, void 0, false, {
                                        fileName: "[project]/websites/adoods/pages/contact.js",
                                        lineNumber: 144,
                                        columnNumber: 50
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/contact.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/contact.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "40px",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 20px"
                },
                className: "jsx-f3b8438058e81a9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            flex: "1 1 350px",
                            maxWidth: "500px",
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                        },
                        className: "jsx-f3b8438058e81a9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                style: {
                                    marginBottom: "25px"
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: "Location"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("iframe", {
                                title: "Google Map",
                                src: "https://www.google.com/maps?q=Chennai,+Tamil+Nadu,+India&output=embed",
                                width: "100%",
                                height: "250",
                                style: {
                                    borderRadius: "10px",
                                    marginTop: "15px",
                                    border: "0"
                                },
                                allowFullScreen: "",
                                loading: "lazy",
                                className: "jsx-f3b8438058e81a9"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/contact.js",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        action: "mailto:adoodshosur@gmail.com",
                        method: "POST",
                        encType: "text/plain",
                        onSubmit: handleSubmit,
                        style: {
                            flex: "1 1 350px",
                            maxWidth: "500px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                        },
                        className: "jsx-f3b8438058e81a9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                style: {
                                    marginBottom: "10px"
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: "Send Us a Message"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                name: "name",
                                type: "text",
                                placeholder: "Your Name",
                                required: true,
                                className: "jsx-f3b8438058e81a9"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                name: "email",
                                type: "email",
                                placeholder: "Your Email",
                                required: true,
                                className: "jsx-f3b8438058e81a9"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                name: "phone",
                                type: "text",
                                placeholder: "Phone Number (optional)",
                                className: "jsx-f3b8438058e81a9"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                name: "message",
                                placeholder: "Your Message",
                                rows: "5",
                                required: true,
                                className: "jsx-f3b8438058e81a9"
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting,
                                style: {
                                    background: isSubmitting ? "#888" : "#111",
                                    color: "#fff",
                                    padding: "12px",
                                    fontSize: "1rem",
                                    borderRadius: "6px",
                                    cursor: isSubmitting ? "not-allowed" : "pointer",
                                    opacity: isSubmitting ? 0.8 : 1,
                                    transition: "all 0.3s ease"
                                },
                                className: "jsx-f3b8438058e81a9",
                                children: isSubmitting ? 'Sending...' : 'Send Message'
                            }, void 0, false, {
                                fileName: "[project]/websites/adoods/pages/contact.js",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/websites/adoods/pages/contact.js",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/contact.js",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            showSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    padding: '15px 30px',
                    borderRadius: '4px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    animation: 'slideIn 0.3s ease-out',
                    maxWidth: '90%',
                    textAlign: 'center',
                    fontSize: '0.95rem'
                },
                className: "jsx-f3b8438058e81a9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '1.2rem'
                        },
                        className: "jsx-f3b8438058e81a9",
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/contact.js",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "jsx-f3b8438058e81a9",
                        children: "Your message has been sent successfully! We'll get back to you soon."
                    }, void 0, false, {
                        fileName: "[project]/websites/adoods/pages/contact.js",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/websites/adoods/pages/contact.js",
                lineNumber: 230,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "f3b8438058e81a9",
                children: "@keyframes slideIn{0%{opacity:0;transform:translate(-50%,-20px)}to{opacity:1;transform:translate(-50%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/websites/adoods/pages/contact.js",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__02f7bad8._.js.map