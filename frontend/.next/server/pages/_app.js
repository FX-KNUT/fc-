"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Common/headinfo.js


const headInfo = ()=>{
    return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)((head_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("title", {
                    children: "fc"
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("meta", {
                    name: "description",
                    content: "fc"
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("meta", {
                    charset: "utf-8"
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("link", {
                    rel: "icon",
                    href: "/favicon.ico"
                })
            ]
        })
    }));
};
/* harmony default export */ const headinfo = (headInfo);

;// CONCATENATED MODULE: ./components/Reusable/t_fx__layout.jsx


const t_fx__layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(headinfo, {
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                children: children
            })
        ]
    }));
};
/* harmony default export */ const t_fx_layout = (t_fx__layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(t_fx_layout, {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                id: "modal"
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(29));
module.exports = __webpack_exports__;

})();