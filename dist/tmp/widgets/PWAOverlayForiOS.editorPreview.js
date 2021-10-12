'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var require$$0 = ".ios-pwa {\n  background-color: white;\n  bottom: 16px;\n  border: solid 1px #cdcdcd;\n  border-radius: 8px;\n  left: 16px;\n  opacity: 0;\n  position: fixed;\n  pointer-events: none;\n  right: 16px;\n  transition: opacity 0.3s ease;\n  will-change: opacity;\n  z-index: 2;\n}\n\n.ios-pwa::before,\n.ios-pwa::after {\n  border: solid transparent;\n  border-color: transparent;\n  content: \"\";\n  height: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 100%;\n  width: 0;\n}\n\n.ios-pwa::before {\n  border-width: 11px 11px;\n  border-top-color: #cdcdcd;\n  left: 50%;\n  margin-left: -11px;\n}\n\n.ios-pwa::after {\n  border-width: 10px 10px;\n  border-top-color: #f5f6f8;\n  left: 50%;\n  margin-left: -10px;\n}\n\n.ios-pwa--visible {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.ios-pwa__text {\n  margin: 0;\n  padding: 16px;\n}\n\n.ios-pwa__bottom {\n  align-items: center;\n  background-color: #f5f6f8;\n  border-radius: 0 0 8px 8px;\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n}\n\n.ios-pwa__icon {\n  height: 20px;\n  margin: 0 4px;\n  width: 20px;\n}";

class preview extends react.Component {
  render() {
    return react.createElement("div", null, "hi there");
  }

}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUFdBT3ZlcmxheUZvcmlPUy5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvUFdBT3ZlcmxheUZvcmlPUy5lZGl0b3JQcmV2aWV3LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIHByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+aGkgdGhlcmU8L2Rpdj47XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vdWkvUFdBT3ZlcmxheUZvcmlPUy5jc3NcIik7XG59XG4iXSwibmFtZXMiOlsicHJldmlldyIsIkNvbXBvbmVudCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJnZXRQcmV2aWV3Q3NzIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFTyxNQUFNQSxPQUFOLFNBQXNCQyxlQUF0QixDQUFnQztBQUNuQ0MsRUFBQUEsTUFBTSxHQUFHO0FBQ0wsV0FBT0MsNENBQVA7QUFDSDs7QUFIa0M7QUFNaEMsU0FBU0MsYUFBVCxHQUF5QjtBQUM1QixTQUFPQyxVQUFQO0FBQ0g7Ozs7OyJ9
