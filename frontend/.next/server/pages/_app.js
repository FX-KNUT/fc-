(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 317:
/***/ ((module) => {

// Exports
module.exports = {
	"comp_container": "t_fx_comp_comp_container__1OG7f",
	"comp_modal_wrapper": "t_fx_comp_comp_modal_wrapper__1Dg7E",
	"comp_modal_content": "t_fx_comp_comp_modal_content__3l7xy",
	"comp_modal_btn_close": "t_fx_comp_comp_modal_btn_close__BNKrn",
	"comp_expandable": "t_fx_comp_comp_expandable__2F9Ti",
	"comp_expandable_title_wrapper": "t_fx_comp_comp_expandable_title_wrapper__3SmTA",
	"comp_expandable_title": "t_fx_comp_comp_expandable_title__3Rq6o",
	"comp_expandable_down_arrow": "t_fx_comp_comp_expandable_down_arrow__3QTLz",
	"comp_expandable_detail_wrapper": "t_fx_comp_comp_expandable_detail_wrapper__1CR8T",
	"active_arrow": "t_fx_comp_active_arrow__3PEK7",
	"active_detail": "t_fx_comp_active_detail__3MYQP",
	"comp_expandable_detail_title": "t_fx_comp_comp_expandable_detail_title__-BM6x",
	"comp_expandable_detail_blockquote_wrapper": "t_fx_comp_comp_expandable_detail_blockquote_wrapper__1xQ_X",
	"comp_expandable_detail_blockquote": "t_fx_comp_comp_expandable_detail_blockquote__2R5rQ",
	"comp_expandable_detail_detail": "t_fx_comp_comp_expandable_detail_detail__1K6an",
	"comp_card": "t_fx_comp_comp_card__1Txyd"
};


/***/ }),

/***/ 912:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "_footer_footer__2sSDu",
	"footer_wrapper": "_footer_footer_wrapper__2Ve3J",
	"contact_wrapper": "_footer_contact_wrapper__1LmFV",
	"contact": "_footer_contact__1V5Im",
	"sns_wrapper": "_footer_sns_wrapper__2w2_r",
	"copyright": "_footer_copyright__1i2PJ"
};


/***/ }),

/***/ 905:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "_header_header__3b9xY",
	"sns_wrapper": "_header_sns_wrapper__fmfSq",
	"logo_wrapper": "_header_logo_wrapper__2Uww7",
	"search_wrapper": "_header_search_wrapper__qk70j",
	"ic_search": "_header_ic_search__gHcSg",
	"logo": "_header_logo__1dV3P",
	"session_wrapper": "_header_session_wrapper__39BhE",
	"session_text": "_header_session_text__2gsVl",
	"input_color": "_header_input_color__Fl0bC",
	"gnb_wrapper": "_header_gnb_wrapper__1Ol8k"
};


/***/ }),

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

// EXTERNAL MODULE: ./styles/_header.module.scss
var _header_module = __webpack_require__(905);
var _header_module_default = /*#__PURE__*/__webpack_require__.n(_header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./public/ic_facebook.svg
var _circle, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgIcFacebook(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 28.346,
    height: 28.346
  }, props), _circle || (_circle = /*#__PURE__*/external_react_.createElement("circle", {
    fill: "current",
    cx: 14.173,
    cy: 14.173,
    r: 13.613
  })), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "#F6F7F7",
    d: "M17.844 6.217v2.854h-1.552c-.462 0-.756.126-.904.377-.104.169-.146.462-.146.861v1.301h2.645l-.313 2.876h-2.331v8.29h-3.419v-8.29h-1.679V11.61h1.679V9.89c0-1.763.609-2.897 1.805-3.379a4.207 4.207 0 011.615-.293h2.6z"
  })));
}

/* harmony default export */ const ic_facebook = (SvgIcFacebook);
;// CONCATENATED MODULE: ./public/ic_kakao.svg
var ic_kakao_circle, _g;

function ic_kakao_extends() { ic_kakao_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_kakao_extends.apply(this, arguments); }



function SvgIcKakao(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ic_kakao_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 28.346,
    height: 28.346
  }, props), ic_kakao_circle || (ic_kakao_circle = /*#__PURE__*/external_react_.createElement("circle", {
    fill: "current",
    cx: 14.173,
    cy: 14.173,
    r: 13.613
  })), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    fill: "#FFF"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "M24.729 16.185l-1.786-2.416 1.474-1.475c.014-.017.031-.03.045-.045l.013-.016v-.001a.947.947 0 10-1.414-1.256l-1.815 1.816v-1.191a.946.946 0 10-1.892 0v4.987a.819.819 0 00-.724-.457h-2.503v-4.425h-.003c.003-.036.003-.073.003-.11a.945.945 0 10-1.884.11h-.006v4.589l-2.251-4.943a.947.947 0 00-.932-.777h-.032a.945.945 0 00-.932.777l-2.295 5.039c-.014.025-.025.053-.036.08l-.001.004a.95.95 0 00.88 1.295.949.949 0 00.918-.723l.307-.67h2.349l.308.67a.911.911 0 00.222.412.85.85 0 00.106.102c.003.002.004.002.006.006a.783.783 0 00.12.08c.002.002.005.002.006.002a1.566 1.566 0 00.151.071c.042.012.088.023.135.033.008.004.018.004.025.004.047.006.097.014.146.014h.002c.36 0 .673-.201.832-.498.02-.031.024-.068.042-.104a.938.938 0 00.783.576v.025h3.534v-.02a.81.81 0 00.784-.625.941.941 0 00.886.625.947.947 0 00.946-.947V15.47l.347-.346 1.646 2.227a.944.944 0 00.756.373.944.944 0 00.734-1.539zm-14.105-1.466l.411-.896.413.896h-.824zM9.296 11.44a.863.863 0 00-.864-.864H4.21v.002a.864.864 0 000 1.723v.003h1.271v4.476h.001l-.001.041c0 .523.423.949.945.949s.946-.426.946-.949v-4.517h1.06a.863.863 0 00.864-.864z"
  }))));
}

/* harmony default export */ const ic_kakao = (SvgIcKakao);
;// CONCATENATED MODULE: ./public/ic_instagram.svg
var ic_instagram_circle, ic_instagram_path, _path2, _circle2;

function ic_instagram_extends() { ic_instagram_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_instagram_extends.apply(this, arguments); }



function SvgIcInstagram(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ic_instagram_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 28.346,
    height: 28.346
  }, props), ic_instagram_circle || (ic_instagram_circle = /*#__PURE__*/external_react_.createElement("circle", {
    fill: "current",
    cx: 14.173,
    cy: 14.173,
    r: 13.613
  })), ic_instagram_path || (ic_instagram_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "#FFF",
    d: "M17.683 22.161h-7.02a4.582 4.582 0 01-4.577-4.575v-6.824a4.583 4.583 0 014.577-4.577h7.02a4.582 4.582 0 014.578 4.577v6.824a4.581 4.581 0 01-4.578 4.575zm-7.02-14.497a3.102 3.102 0 00-3.097 3.098v6.824a3.101 3.101 0 003.097 3.096h7.02a3.1 3.1 0 003.098-3.096v-6.824a3.101 3.101 0 00-3.098-3.098h-7.02z"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    fill: "#FFF",
    d: "M14.174 18.366a4.197 4.197 0 01-4.193-4.193 4.196 4.196 0 014.193-4.192 4.197 4.197 0 014.193 4.192 4.197 4.197 0 01-4.193 4.193zm0-6.906a2.715 2.715 0 00-2.713 2.713 2.715 2.715 0 002.713 2.713 2.715 2.715 0 002.712-2.713 2.716 2.716 0 00-2.712-2.713z"
  })), _circle2 || (_circle2 = /*#__PURE__*/external_react_.createElement("circle", {
    fill: "#FFF",
    cx: 18.515,
    cy: 9.899,
    r: 0.986
  })));
}

/* harmony default export */ const ic_instagram = (SvgIcInstagram);
;// CONCATENATED MODULE: ./components/Common/Header/sns.jsx





const sns = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: (_header_module_default()).sns_wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ic_facebook, {
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ic_kakao, {
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ic_instagram, {
                })
            })
        ]
    }));
};
/* harmony default export */ const Header_sns = (sns);

;// CONCATENATED MODULE: ./public/ic_search.svg
var ic_search_circle, ic_search_path;

function ic_search_extends() { ic_search_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_search_extends.apply(this, arguments); }



function SvgIcSearch(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ic_search_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 28.346,
    height: 28.346
  }, props), ic_search_circle || (ic_search_circle = /*#__PURE__*/external_react_.createElement("circle", {
    fill: "none",
    stroke: "current",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    cx: 11.355,
    cy: 11.313,
    r: 9.067
  })), ic_search_path || (ic_search_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "none",
    stroke: "current",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    d: "M17.765 17.722l8.752 8.753"
  })));
}

/* harmony default export */ const ic_search = (SvgIcSearch);
;// CONCATENATED MODULE: ./public/ic_login.svg
var ic_login_path, ic_login_path2;

function ic_login_extends() { ic_login_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_login_extends.apply(this, arguments); }



function SvgIcLogin(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ic_login_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 28.346,
    height: 28.346
  }, props), ic_login_path || (ic_login_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "none",
    stroke: "current",
    strokeWidth: 2,
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    d: "M7.318 3.423h17.5v21.5h-17.5"
  })), ic_login_path2 || (ic_login_path2 = /*#__PURE__*/external_react_.createElement("path", {
    fill: "current",
    d: "M10.765 21.133l8.131-6.959-8.131-6.961v4.207H2.472v5.505h8.293z"
  })));
}

/* harmony default export */ const ic_login = (SvgIcLogin);
;// CONCATENATED MODULE: ./public/ic_palette.svg
var ic_palette_path, _ellipse, _ellipse2, _ellipse3, _ellipse4, _ellipse5;

function ic_palette_extends() { ic_palette_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_palette_extends.apply(this, arguments); }



function SvgIcPalette(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ic_palette_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 28.346,
    height: 28.346
  }, props), ic_palette_path || (ic_palette_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "none",
    stroke: "current",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    d: "M26.892 14.479c0 6.171-5.694 11.172-12.719 11.172S1.454 20.65 1.454 14.479c0-6.23 8.43-.967 10.594-4.734 1.688-2.938-.691-4.714 2.125-6.438C18.048.936 26.892 5.623 26.892 14.479z"
  })), _ellipse || (_ellipse = /*#__PURE__*/external_react_.createElement("ellipse", {
    fill: "current",
    cx: 8.486,
    cy: 19.092,
    rx: 1.688,
    ry: 1.469
  })), _ellipse2 || (_ellipse2 = /*#__PURE__*/external_react_.createElement("ellipse", {
    fill: "current",
    cx: 18.486,
    cy: 8.842,
    rx: 2.549,
    ry: 2.219
  })), _ellipse3 || (_ellipse3 = /*#__PURE__*/external_react_.createElement("ellipse", {
    fill: "current",
    cx: 13.267,
    cy: 21.248,
    rx: 1.688,
    ry: 1.469
  })), _ellipse4 || (_ellipse4 = /*#__PURE__*/external_react_.createElement("ellipse", {
    fill: "current",
    cx: 18.486,
    cy: 20.561,
    rx: 1.688,
    ry: 1.469
  })), _ellipse5 || (_ellipse5 = /*#__PURE__*/external_react_.createElement("ellipse", {
    fill: "current",
    cx: 22.142,
    cy: 17.405,
    rx: 1.688,
    ry: 1.469
  })));
}

/* harmony default export */ const ic_palette = (SvgIcPalette);
;// CONCATENATED MODULE: ./public/ic_earth.svg
var ic_earth_circle, ic_earth_path, ic_earth_path2;

function ic_earth_extends() { ic_earth_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_earth_extends.apply(this, arguments); }



function SvgIcEarth(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ic_earth_extends({
    baseProfile: "tiny",
    xmlns: "http://www.w3.org/2000/svg",
    width: 28.346,
    height: 28.346
  }, props), ic_earth_circle || (ic_earth_circle = /*#__PURE__*/external_react_.createElement("circle", {
    fill: "none",
    stroke: "current",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    cx: 14.173,
    cy: 14.173,
    r: 12.856
  })), ic_earth_path || (ic_earth_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "none",
    stroke: "current",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    d: "M14.173 27.03s7.373-3.443 7.373-12.856-7.373-12.857-7.373-12.857"
  })), ic_earth_path2 || (ic_earth_path2 = /*#__PURE__*/external_react_.createElement("path", {
    fill: "none",
    stroke: "current",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    d: "M14.173 27.03s-6.911-3.443-6.911-12.856 6.911-12.856 6.911-12.856M2.542 9.689h23.266M2.542 19.25h23.266M14.173 1.317v25.559"
  })));
}

/* harmony default export */ const ic_earth = (SvgIcEarth);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
// EXTERNAL MODULE: ./styles/t_fx_comp.module.css
var t_fx_comp_module = __webpack_require__(317);
var t_fx_comp_module_default = /*#__PURE__*/__webpack_require__.n(t_fx_comp_module);
;// CONCATENATED MODULE: ./components/Reusable/t_fx__container.jsx


const t_fx__container = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(jsx_runtime_namespaceObject.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            className: (t_fx_comp_module_default()).comp_container,
            children: children
        })
    }));
};
/* harmony default export */ const t_fx_container = (t_fx__container);

;// CONCATENATED MODULE: ./components/Reusable/t_fx__modal.jsx




const T_fx__modal = ({ children , is_show , fn_on_close  })=>{
    return is_show && /*#__PURE__*/ external_react_dom_default().createPortal(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        className: (t_fx_comp_module_default()).comp_modal_wrapper,
        onClick: ()=>fn_on_close()
        ,
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: (t_fx_comp_module_default()).comp_modal_content,
            onClick: (e)=>{
                e.stopPropagation();
            },
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: (t_fx_comp_module_default()).comp_modal_btn_close,
                    onClick: ()=>fn_on_close()
                    ,
                    children: "X"
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(t_fx_container, {
                    children: children
                })
            ]
        })
    }), document.getElementById("modal"));
};
/* harmony default export */ const t_fx_modal = (T_fx__modal);

;// CONCATENATED MODULE: ./components/Common/Header/logo.jsx









const Logo = ()=>{
    // state
    const { 0: is_show , 1: set_is_show  } = (0,external_react_.useState)(false);
    // ref
    const palette = (0,external_react_.useRef)(null);
    // event
    const fn_on_close = ()=>{
        set_is_show(false);
    };
    // dummy
    const dummy_child = /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        children: "dummy children"
    });
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: (_header_module_default()).logo_wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: (_header_module_default()).search_wrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                        type: "text",
                        placeholder: "search",
                        autoComplete: "false"
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                        className: (_header_module_default()).ic_search,
                        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ic_search, {
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h1", {
                        className: (_header_module_default()).logo,
                        children: "Logo"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: (_header_module_default()).session_wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        onClick: ()=>set_is_show(true)
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ic_login, {
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                className: (_header_module_default()).session_text,
                                children: "LOGIN"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ic_earth, {
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                className: (_header_module_default()).session_text,
                                children: "LANGUAGE"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ic_palette, {
                                onClick: ()=>palette.current.click()
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                                ref: palette,
                                type: "color",
                                className: (_header_module_default()).input_color
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(t_fx_modal, {
                is_show: is_show,
                fn_on_close: fn_on_close,
                children: dummy_child
            })
        ]
    }));
};
/* harmony default export */ const logo = (Logo);

;// CONCATENATED MODULE: ./components/Common/Header/gnb.jsx



const gnb = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: (_header_module_default()).gnb_wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(next_link["default"], {
                href: "#",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                    children: "가이드"
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(next_link["default"], {
                href: "#",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                    children: "내 지갑"
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(next_link["default"], {
                href: "#",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                    children: "투자정보"
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(next_link["default"], {
                href: "#",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                    children: "거래소"
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(next_link["default"], {
                href: "#",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                    children: "관심종목"
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(next_link["default"], {
                href: "#",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                    children: "고객센터"
                })
            })
        ]
    }));
};
/* harmony default export */ const Header_gnb = (gnb);

;// CONCATENATED MODULE: ./components/Common/Header/header.jsx





const header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("header", {
        className: (_header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Header_sns, {
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("hr", {
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(logo, {
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("hr", {
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Header_gnb, {
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("hr", {
            })
        ]
    }));
};
/* harmony default export */ const Header_header = (header);

// EXTERNAL MODULE: ./styles/_footer.module.scss
var _footer_module = __webpack_require__(912);
var _footer_module_default = /*#__PURE__*/__webpack_require__.n(_footer_module);
;// CONCATENATED MODULE: ./components/Common/Footer/footer.jsx





const footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("footer", {
        className: (_footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: (_footer_module_default()).footer_wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: (_footer_module_default()).contact_wrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            className: (_footer_module_default()).contact,
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                    children: "Contact us: 0000-0000"
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                    children: "충청북도 충주시 대학로 50 한국교통대학교 중앙정보관"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            className: (_footer_module_default()).sns_wrapper,
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ic_facebook, {
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ic_kakao, {
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ic_instagram, {
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("hr", {
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: (_footer_module_default()).copyright,
                    children: "COPYRIGHT 2021 Korea National University of Transpoertation ALL RIGHTS RESERVED"
                })
            ]
        })
    }));
};
/* harmony default export */ const Footer_footer = (footer);

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(t_fx_layout, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                id: "root",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Header_header, {
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Footer_footer, {
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                id: "modal"
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(544)));
module.exports = __webpack_exports__;

})();