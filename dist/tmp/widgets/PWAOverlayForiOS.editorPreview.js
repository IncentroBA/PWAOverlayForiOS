'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".ios-pwa:not(:empty) {\n    background-color: white;\n    bottom: 16px;\n    border: solid 1px #cdcdcd;\n    border-radius: 8px;\n    left: 16px;\n    opacity: 0;\n    position: fixed;\n    pointer-events: none;\n    right: 16px;\n    transition: opacity 0.3s ease;\n    will-change: opacity;\n    z-index: 2;\n}\n\n.ios-pwa::before,\n.ios-pwa::after {\n    border: solid transparent;\n    border-color: transparent;\n    content: \"\";\n    height: 0;\n    position: absolute;\n    pointer-events: none;\n    top: 100%;\n    width: 0;\n}\n\n.ios-pwa::before {\n    border-width: calc(10px + 1px) calc(10px + 1px);\n    border-top-color: #cdcdcd;\n    left: 50%;\n    margin-left: calc(10px - 10px - 10px - 1px);\n}\n\n.ios-pwa::after {\n    border-width: 10px 10px;\n    border-top-color: #f5f6f8;\n    left: 50%;\n    margin-left: calc(10px - 10px - 10px);\n}\n\n.ios-pwa:not(:empty).ios-pwa--visible {\n    opacity: 1;\n    pointer-events: all;\n}\n\n.ios-pwa__text {\n    margin: 0;\n    padding: 16px;\n}\n\n.ios-pwa__bottom {\n    background-color: #f5f6f8;\n    border-radius: 0 0 8px 8px;\n    padding: 16px;\n}\n\n.ios-pwa__icon {\n    height: 20px;\n    margin: 0 4px;\n    width: 20px;\n}\n\n.ios-pwa__close {\n    height: 16px;\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    width: 16px;\n}\n\n.ios-pwa__close svg {\n    height: 16px;\n    width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBXQU92ZXJsYXlGb3JpT1MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsU0FBUztJQUNULDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsU0FBUztJQUNULHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoiUFdBT3ZlcmxheUZvcmlPUy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9zLXB3YTpub3QoOmVtcHR5KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm90dG9tOiAxNnB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjZGNkY2Q7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGxlZnQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmlvcy1wd2E6OmJlZm9yZSxcbi5pb3MtcHdhOjphZnRlciB7XG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG59XG5cbi5pb3MtcHdhOjpiZWZvcmUge1xuICAgIGJvcmRlci13aWR0aDogY2FsYygxMHB4ICsgMXB4KSBjYWxjKDEwcHggKyAxcHgpO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNjZGNkY2Q7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwcHggLSAxMHB4IC0gMTBweCAtIDFweCk7XG59XG5cbi5pb3MtcHdhOjphZnRlciB7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2Y1ZjZmODtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTBweCAtIDEwcHggLSAxMHB4KTtcbn1cblxuLmlvcy1wd2E6bm90KDplbXB0eSkuaW9zLXB3YS0tdmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uaW9zLXB3YV9fdGV4dCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5pb3MtcHdhX19ib3R0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLmlvcy1wd2FfX2ljb24ge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDAgNHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4uaW9zLXB3YV9fY2xvc2Uge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNnB4O1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xufVxuXG4uaW9zLXB3YV9fY2xvc2Ugc3ZnIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG59Il19 */";
var stylesheet=".ios-pwa:not(:empty) {\n    background-color: white;\n    bottom: 16px;\n    border: solid 1px #cdcdcd;\n    border-radius: 8px;\n    left: 16px;\n    opacity: 0;\n    position: fixed;\n    pointer-events: none;\n    right: 16px;\n    transition: opacity 0.3s ease;\n    will-change: opacity;\n    z-index: 2;\n}\n\n.ios-pwa::before,\n.ios-pwa::after {\n    border: solid transparent;\n    border-color: transparent;\n    content: \"\";\n    height: 0;\n    position: absolute;\n    pointer-events: none;\n    top: 100%;\n    width: 0;\n}\n\n.ios-pwa::before {\n    border-width: calc(10px + 1px) calc(10px + 1px);\n    border-top-color: #cdcdcd;\n    left: 50%;\n    margin-left: calc(10px - 10px - 10px - 1px);\n}\n\n.ios-pwa::after {\n    border-width: 10px 10px;\n    border-top-color: #f5f6f8;\n    left: 50%;\n    margin-left: calc(10px - 10px - 10px);\n}\n\n.ios-pwa:not(:empty).ios-pwa--visible {\n    opacity: 1;\n    pointer-events: all;\n}\n\n.ios-pwa__text {\n    margin: 0;\n    padding: 16px;\n}\n\n.ios-pwa__bottom {\n    background-color: #f5f6f8;\n    border-radius: 0 0 8px 8px;\n    padding: 16px;\n}\n\n.ios-pwa__icon {\n    height: 20px;\n    margin: 0 4px;\n    width: 20px;\n}\n\n.ios-pwa__close {\n    height: 16px;\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    width: 16px;\n}\n\n.ios-pwa__close svg {\n    height: 16px;\n    width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBXQU92ZXJsYXlGb3JpT1MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsU0FBUztJQUNULDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsU0FBUztJQUNULHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoiUFdBT3ZlcmxheUZvcmlPUy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9zLXB3YTpub3QoOmVtcHR5KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm90dG9tOiAxNnB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjZGNkY2Q7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGxlZnQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmlvcy1wd2E6OmJlZm9yZSxcbi5pb3MtcHdhOjphZnRlciB7XG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG59XG5cbi5pb3MtcHdhOjpiZWZvcmUge1xuICAgIGJvcmRlci13aWR0aDogY2FsYygxMHB4ICsgMXB4KSBjYWxjKDEwcHggKyAxcHgpO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNjZGNkY2Q7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwcHggLSAxMHB4IC0gMTBweCAtIDFweCk7XG59XG5cbi5pb3MtcHdhOjphZnRlciB7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2Y1ZjZmODtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTBweCAtIDEwcHggLSAxMHB4KTtcbn1cblxuLmlvcy1wd2E6bm90KDplbXB0eSkuaW9zLXB3YS0tdmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uaW9zLXB3YV9fdGV4dCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5pb3MtcHdhX19ib3R0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLmlvcy1wd2FfX2ljb24ge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDAgNHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4uaW9zLXB3YV9fY2xvc2Uge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNnB4O1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xufVxuXG4uaW9zLXB3YV9fY2xvc2Ugc3ZnIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG59Il19 */";
styleInject(css_248z);

var PWAOverlayForiOS = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(PWAOverlayForiOS);

// import shareIcon from "./shareIcon.svg";

function preview() {
  return react.createElement("div", {
    className: "ios-pwa-preview"
  }, react.createElement("div", {
    className: "ios-pwa-preview__icon"
  }, react.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 25"
  }, react.createElement("g", {
    fill: "#4693FE"
  }, react.createElement("path", {
    d: "M16.4,8.6c0.8,0,1.5,0.7,1.5,1.5v11.4c0,0.8-0.7,1.5-1.5,1.5H3.6c-0.8,0-1.5-0.7-1.5-1.5V10.1c0-0.8,0.7-1.5,1.5-1.5H7l0-1.5H3.6c-1.7,0-3,1.3-3,3v11.4c0,1.6,1.4,3,3,3h12.8c1.6,0,3-1.4,3-3V10.1c0-1.7-1.4-3-3-3l0,0H13l0,1.5H16.4"
  }), react.createElement("path", {
    d: "M10,0.4C10,0.4,10,0.4,10,0.4C10,0.4,10,0.4,10,0.4c-0.1,0-0.2,0-0.3,0.1c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0L5.9,4.3C5.6,4.6,5.6,5,5.9,5.3C6,5.5,6.2,5.6,6.4,5.6c0.2,0,0.4-0.1,0.5-0.2L9.3,3v12.1c0,0.4,0.3,0.8,0.8,0.8c0.4,0,0.8-0.3,0.8-0.8V3l2.3,2.3c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2c0.3-0.3,0.3-0.8,0-1.1l-3.6-3.6c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.1c0,0,0,0,0,0C10.2,0.5,10.1,0.4,10,0.4C10,0.4,10,0.4,10,0.4C10,0.4,10,0.4,10,0.4L10,0.4z"
  })))), react.createElement("p", {
    className: "ios-pwa-preview__text"
  }, react.createElement("span", null, "PWA overlay for iOS")));
}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUFdBT3ZlcmxheUZvcmlPUy5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vc3JjL1BXQU92ZXJsYXlGb3JpT1MuZWRpdG9yUHJldmlldy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzaGFyZUljb24gZnJvbSBcIi4vc2hhcmVJY29uLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJldmlldygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlvcy1wd2EtcHJldmlld1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpb3MtcHdhLXByZXZpZXdfX2ljb25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwiIzQ2OTNGRVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNi40LDguNmMwLjgsMCwxLjUsMC43LDEuNSwxLjV2MTEuNGMwLDAuOC0wLjcsMS41LTEuNSwxLjVIMy42Yy0wLjgsMC0xLjUtMC43LTEuNS0xLjVWMTAuMWMwLTAuOCwwLjctMS41LDEuNS0xLjVIN2wwLTEuNUgzLjZjLTEuNywwLTMsMS4zLTMsM3YxMS40YzAsMS42LDEuNCwzLDMsM2gxMi44YzEuNiwwLDMtMS40LDMtM1YxMC4xYzAtMS43LTEuNC0zLTMtM2wwLDBIMTNsMCwxLjVIMTYuNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLDAuNEMxMCwwLjQsMTAsMC40LDEwLDAuNEMxMCwwLjQsMTAsMC40LDEwLDAuNGMtMC4xLDAtMC4yLDAtMC4zLDAuMWMwLDAsMCwwLDAsMGMtMC4xLDAtMC4xLDAuMS0wLjIsMC4xYzAsMCwwLDAsMCwwTDUuOSw0LjNDNS42LDQuNiw1LjYsNSw1LjksNS4zQzYsNS41LDYuMiw1LjYsNi40LDUuNmMwLjIsMCwwLjQtMC4xLDAuNS0wLjJMOS4zLDN2MTIuMWMwLDAuNCwwLjMsMC44LDAuOCwwLjhjMC40LDAsMC44LTAuMywwLjgtMC44VjNsMi4zLDIuM2MwLjEsMC4xLDAuMywwLjIsMC41LDAuMnMwLjQtMC4xLDAuNS0wLjJjMC4zLTAuMywwLjMtMC44LDAtMS4xbC0zLjYtMy42YzAsMCwwLDAsMCwwYy0wLjEtMC4xLTAuMS0wLjEtMC4yLTAuMWMwLDAsMCwwLDAsMEMxMC4yLDAuNSwxMC4xLDAuNCwxMCwwLjRDMTAsMC40LDEwLDAuNCwxMCwwLjRDMTAsMC40LDEwLDAuNCwxMCwwLjRMMTAsMC40elwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW9zLXB3YS1wcmV2aWV3X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+UFdBIG92ZXJsYXkgZm9yIGlPUzwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL3VpL1BXQU92ZXJsYXlGb3JpT1MuY3NzXCIpO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlSW5qZWN0IiwiY3NzIiwicmVmIiwiaW5zZXJ0QXQiLCJkb2N1bWVudCIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNyZWF0ZVRleHROb2RlIiwicHJldmlldyIsImNsYXNzTmFtZSIsInZlcnNpb24iLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwiZCIsImdldFByZXZpZXdDc3MiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBU0EsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDN0IsSUFB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
