"use strict";(self.webpackChunk_rhoas_app_services_ui_components=self.webpackChunk_rhoas_app_services_ui_components||[]).push([[145],{5260:(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(23645),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__)()((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.id,".pf-c-tooltip {\n  --pf-c-tooltip--MaxWidth: 18.75rem;\n  --pf-c-tooltip--BoxShadow: var(--pf-global--BoxShadow--md);\n  --pf-c-tooltip__content--PaddingTop: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--PaddingRight: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--PaddingBottom: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--PaddingLeft: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--Color: var(--pf-global--Color--light-100);\n  --pf-c-tooltip__content--BackgroundColor: var(--pf-global--BackgroundColor--dark-100);\n  --pf-c-tooltip__content--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-tooltip__arrow--Width: 0.5rem;\n  --pf-c-tooltip__arrow--Height: 0.5rem;\n  --pf-c-tooltip__arrow--m-top--TranslateX: -50%;\n  --pf-c-tooltip__arrow--m-top--TranslateY: 50%;\n  --pf-c-tooltip__arrow--m-top--Rotate: 45deg;\n  --pf-c-tooltip__arrow--m-right--TranslateX: -50%;\n  --pf-c-tooltip__arrow--m-right--TranslateY: -50%;\n  --pf-c-tooltip__arrow--m-right--Rotate: 45deg;\n  --pf-c-tooltip__arrow--m-bottom--TranslateX: -50%;\n  --pf-c-tooltip__arrow--m-bottom--TranslateY: -50%;\n  --pf-c-tooltip__arrow--m-bottom--Rotate: 45deg;\n  --pf-c-tooltip__arrow--m-left--TranslateX: 50%;\n  --pf-c-tooltip__arrow--m-left--TranslateY: -50%;\n  --pf-c-tooltip__arrow--m-left--Rotate: 45deg;\n  position: relative;\n  max-width: var(--pf-c-tooltip--MaxWidth);\n  box-shadow: var(--pf-c-tooltip--BoxShadow);\n}\n.pf-c-tooltip.pf-m-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-top-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-top-right .pf-c-tooltip__arrow {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-top--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-top--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-top--Rotate));\n}\n.pf-c-tooltip.pf-m-bottom .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-right .pf-c-tooltip__arrow {\n  top: 0;\n  left: 50%;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-bottom--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-bottom--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-bottom--Rotate));\n}\n.pf-c-tooltip.pf-m-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-left-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-left-bottom .pf-c-tooltip__arrow {\n  top: 50%;\n  right: 0;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-left--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-left--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-left--Rotate));\n}\n.pf-c-tooltip.pf-m-right .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-bottom .pf-c-tooltip__arrow {\n  top: 50%;\n  left: 0;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-right--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-right--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-right--Rotate));\n}\n.pf-c-tooltip.pf-m-left-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-top .pf-c-tooltip__arrow {\n  top: var(--pf-c-tooltip__arrow--Height);\n}\n.pf-c-tooltip.pf-m-left-bottom .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-bottom .pf-c-tooltip__arrow {\n  top: auto;\n  bottom: 0;\n}\n.pf-c-tooltip.pf-m-top-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-left .pf-c-tooltip__arrow {\n  left: var(--pf-c-tooltip__arrow--Width);\n}\n.pf-c-tooltip.pf-m-top-right .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-right .pf-c-tooltip__arrow {\n  right: 0;\n  left: auto;\n}\n\n.pf-c-tooltip__content {\n  position: relative;\n  padding: var(--pf-c-tooltip__content--PaddingTop) var(--pf-c-tooltip__content--PaddingRight) var(--pf-c-tooltip__content--PaddingBottom) var(--pf-c-tooltip__content--PaddingLeft);\n  font-size: var(--pf-c-tooltip__content--FontSize);\n  color: var(--pf-c-tooltip__content--Color);\n  text-align: center;\n  word-break: break-word;\n  background-color: var(--pf-c-tooltip__content--BackgroundColor);\n}\n.pf-c-tooltip__content.pf-m-text-align-left {\n  text-align: left;\n}\n\n.pf-c-tooltip__arrow {\n  position: absolute;\n  width: var(--pf-c-tooltip__arrow--Width);\n  height: var(--pf-c-tooltip__arrow--Height);\n  pointer-events: none;\n  background-color: var(--pf-c-tooltip__content--BackgroundColor);\n}\n\n:where(.pf-theme-dark) .pf-c-tooltip {\n  --pf-c-tooltip--BoxShadow: none;\n  --pf-c-tooltip__content--BackgroundColor: var(--pf-global--BackgroundColor--300);\n}\n:where(.pf-theme-dark) .pf-c-tooltip,\n:where(.pf-theme-dark) .pf-c-tooltip__arrow {\n  border: var(--pf-global--BorderWidth--lg) solid var(--pf-global--BorderColor--300);\n}\n:where(.pf-theme-dark) .pf-c-tooltip__arrow {\n  --pf-c-tooltip__arrow--Width: 0.9375rem;\n  --pf-c-tooltip__arrow--Height: 0.9375rem;\n}",""]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},68145:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(93379),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_tooltip_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5260),options={insert:"head",singleton:!1};_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_tooltip_css__WEBPACK_IMPORTED_MODULE_1__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_tooltip_css__WEBPACK_IMPORTED_MODULE_1__.Z.locals||{}}}]);