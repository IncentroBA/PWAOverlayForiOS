function ___$insertStyle(css) {
    if (!css || !window) {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import { useEffect, createElement } from 'react';

___$insertStyle(".ios-pwa {\n  background-color: white;\n  bottom: 16px;\n  border: solid 1px #cdcdcd;\n  border-radius: 8px;\n  left: 16px;\n  opacity: 0;\n  position: fixed;\n  pointer-events: none;\n  right: 16px;\n  transition: opacity 0.3s ease;\n  will-change: opacity;\n  z-index: 2;\n}\n\n.ios-pwa::before,\n.ios-pwa::after {\n  border: solid transparent;\n  border-color: transparent;\n  content: \"\";\n  height: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 100%;\n  width: 0;\n}\n\n.ios-pwa::before {\n  border-width: 11px 11px;\n  border-top-color: #cdcdcd;\n  left: 50%;\n  margin-left: -11px;\n}\n\n.ios-pwa::after {\n  border-width: 10px 10px;\n  border-top-color: #f5f6f8;\n  left: 50%;\n  margin-left: -10px;\n}\n\n.ios-pwa--visible {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.ios-pwa__text {\n  margin: 0;\n  padding: 16px;\n}\n\n.ios-pwa__bottom {\n  align-items: center;\n  background-color: #f5f6f8;\n  border-radius: 0 0 8px 8px;\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n}\n\n.ios-pwa__icon {\n  height: 20px;\n  margin: 0 4px;\n  width: 20px;\n}");

var shareIcon = "data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2025%22%3E%20%20%3Cg%20fill%3D%22%234693FE%22%3E%20%20%20%20%3Cpath%20d%3D%22M16.4%2C8.6c0.8%2C0%2C1.5%2C0.7%2C1.5%2C1.5v11.4c0%2C0.8-0.7%2C1.5-1.5%2C1.5H3.6c-0.8%2C0-1.5-0.7-1.5-1.5V10.1c0-0.8%2C0.7-1.5%2C1.5-1.5H7l0-1.5H3.6c-1.7%2C0-3%2C1.3-3%2C3v11.4c0%2C1.6%2C1.4%2C3%2C3%2C3h12.8c1.6%2C0%2C3-1.4%2C3-3V10.1c0-1.7-1.4-3-3-3l0%2C0H13l0%2C1.5H16.4%22%20%2F%3E%20%20%20%20%3Cpath%20d%3D%22M10%2C0.4C10%2C0.4%2C10%2C0.4%2C10%2C0.4C10%2C0.4%2C10%2C0.4%2C10%2C0.4c-0.1%2C0-0.2%2C0-0.3%2C0.1c0%2C0%2C0%2C0%2C0%2C0c-0.1%2C0-0.1%2C0.1-0.2%2C0.1c0%2C0%2C0%2C0%2C0%2C0L5.9%2C4.3C5.6%2C4.6%2C5.6%2C5%2C5.9%2C5.3C6%2C5.5%2C6.2%2C5.6%2C6.4%2C5.6c0.2%2C0%2C0.4-0.1%2C0.5-0.2L9.3%2C3v12.1c0%2C0.4%2C0.3%2C0.8%2C0.8%2C0.8c0.4%2C0%2C0.8-0.3%2C0.8-0.8V3l2.3%2C2.3c0.1%2C0.1%2C0.3%2C0.2%2C0.5%2C0.2s0.4-0.1%2C0.5-0.2c0.3-0.3%2C0.3-0.8%2C0-1.1l-3.6-3.6c0%2C0%2C0%2C0%2C0%2C0c-0.1-0.1-0.1-0.1-0.2-0.1c0%2C0%2C0%2C0%2C0%2C0C10.2%2C0.5%2C10.1%2C0.4%2C10%2C0.4C10%2C0.4%2C10%2C0.4%2C10%2C0.4C10%2C0.4%2C10%2C0.4%2C10%2C0.4L10%2C0.4z%22%20%2F%3E%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

function PWAOverlayForiOS({
  infoText,
  instructionTextStart,
  instructionTextEnd
}) {
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  const isInStandaloneMode = () => "standalone" in window.navigator && window.navigator.standalone; // Detects if device is in standalone mode


  useEffect(() => {
    if (document.documentElement.classList) {
      if (document.documentElement.classList.contains("dj_safari")) {
        if (isIos() && !isInStandaloneMode()) {
          const pwaContainer = document.querySelector(".ios-pwa");
          pwaContainer.classList.add("ios-pwa--visible");
        }
      }
    }
  });
  return createElement("div", {
    className: "ios-pwa"
  }, createElement("p", {
    className: "ios-pwa__text"
  }, infoText.value), createElement("div", {
    className: "ios-pwa__bottom"
  }, createElement("span", null, instructionTextStart.value), createElement("img", {
    className: "ios-pwa__icon",
    src: shareIcon,
    alt: "share icon"
  }), createElement("span", null, instructionTextEnd.value)));
}

export { PWAOverlayForiOS as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUFdBT3ZlcmxheUZvcmlPUy5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZUljb24uc3ZnIiwiLi4vLi4vLi4vLi4vLi4vc3JjL1BXQU92ZXJsYXlGb3JpT1MuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyUyMHZlcnNpb24lM0QlMjIxLjElMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDIwJTIwMjUlMjIlM0UlMjAlMjAlM0NnJTIwZmlsbCUzRCUyMiUyMzQ2OTNGRSUyMiUzRSUyMCUyMCUyMCUyMCUzQ3BhdGglMjBkJTNEJTIyTTE2LjQlMkM4LjZjMC44JTJDMCUyQzEuNSUyQzAuNyUyQzEuNSUyQzEuNXYxMS40YzAlMkMwLjgtMC43JTJDMS41LTEuNSUyQzEuNUgzLjZjLTAuOCUyQzAtMS41LTAuNy0xLjUtMS41VjEwLjFjMC0wLjglMkMwLjctMS41JTJDMS41LTEuNUg3bDAtMS41SDMuNmMtMS43JTJDMC0zJTJDMS4zLTMlMkMzdjExLjRjMCUyQzEuNiUyQzEuNCUyQzMlMkMzJTJDM2gxMi44YzEuNiUyQzAlMkMzLTEuNCUyQzMtM1YxMC4xYzAtMS43LTEuNC0zLTMtM2wwJTJDMEgxM2wwJTJDMS41SDE2LjQlMjIlMjAlMkYlM0UlMjAlMjAlMjAlMjAlM0NwYXRoJTIwZCUzRCUyMk0xMCUyQzAuNEMxMCUyQzAuNCUyQzEwJTJDMC40JTJDMTAlMkMwLjRDMTAlMkMwLjQlMkMxMCUyQzAuNCUyQzEwJTJDMC40Yy0wLjElMkMwLTAuMiUyQzAtMC4zJTJDMC4xYzAlMkMwJTJDMCUyQzAlMkMwJTJDMGMtMC4xJTJDMC0wLjElMkMwLjEtMC4yJTJDMC4xYzAlMkMwJTJDMCUyQzAlMkMwJTJDMEw1LjklMkM0LjNDNS42JTJDNC42JTJDNS42JTJDNSUyQzUuOSUyQzUuM0M2JTJDNS41JTJDNi4yJTJDNS42JTJDNi40JTJDNS42YzAuMiUyQzAlMkMwLjQtMC4xJTJDMC41LTAuMkw5LjMlMkMzdjEyLjFjMCUyQzAuNCUyQzAuMyUyQzAuOCUyQzAuOCUyQzAuOGMwLjQlMkMwJTJDMC44LTAuMyUyQzAuOC0wLjhWM2wyLjMlMkMyLjNjMC4xJTJDMC4xJTJDMC4zJTJDMC4yJTJDMC41JTJDMC4yczAuNC0wLjElMkMwLjUtMC4yYzAuMy0wLjMlMkMwLjMtMC44JTJDMC0xLjFsLTMuNi0zLjZjMCUyQzAlMkMwJTJDMCUyQzAlMkMwYy0wLjEtMC4xLTAuMS0wLjEtMC4yLTAuMWMwJTJDMCUyQzAlMkMwJTJDMCUyQzBDMTAuMiUyQzAuNSUyQzEwLjElMkMwLjQlMkMxMCUyQzAuNEMxMCUyQzAuNCUyQzEwJTJDMC40JTJDMTAlMkMwLjRDMTAlMkMwLjQlMkMxMCUyQzAuNCUyQzEwJTJDMC40TDEwJTJDMC40eiUyMiUyMCUyRiUzRSUyMCUyMCUzQyUyRmclM0UlM0MlMkZzdmclM0VcIiIsImltcG9ydCBcIi4vdWkvUFdBT3ZlcmxheUZvcmlPUy5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHNoYXJlSWNvbiBmcm9tIFwiLi9zaGFyZUljb24uc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBXQU92ZXJsYXlGb3JpT1MoeyBpbmZvVGV4dCwgaW5zdHJ1Y3Rpb25UZXh0U3RhcnQsIGluc3RydWN0aW9uVGV4dEVuZCB9KSB7XG4gICAgY29uc3QgaXNJb3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiAvaXBob25lfGlwYWR8aXBvZC8udGVzdCh1c2VyQWdlbnQpO1xuICAgIH07XG4gICAgY29uc3QgaXNJblN0YW5kYWxvbmVNb2RlID0gKCkgPT4gXCJzdGFuZGFsb25lXCIgaW4gd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnN0YW5kYWxvbmU7IC8vIERldGVjdHMgaWYgZGV2aWNlIGlzIGluIHN0YW5kYWxvbmUgbW9kZVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGpfc2FmYXJpXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW9zKCkgJiYgIWlzSW5TdGFuZGFsb25lTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHB3YUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW9zLXB3YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHdhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpb3MtcHdhLS12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpb3MtcHdhXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpb3MtcHdhX190ZXh0XCI+e2luZm9UZXh0LnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW9zLXB3YV9fYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2luc3RydWN0aW9uVGV4dFN0YXJ0LnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlvcy1wd2FfX2ljb25cIiBzcmM9e3NoYXJlSWNvbn0gYWx0PVwic2hhcmUgaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2luc3RydWN0aW9uVGV4dEVuZC52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQV0FPdmVybGF5Rm9yaU9TIiwiaW5mb1RleHQiLCJpbnN0cnVjdGlvblRleHRTdGFydCIsImluc3RydWN0aW9uVGV4dEVuZCIsImlzSW9zIiwidXNlckFnZW50Iiwid2luZG93IiwibmF2aWdhdG9yIiwidG9Mb3dlckNhc2UiLCJ0ZXN0IiwiaXNJblN0YW5kYWxvbmVNb2RlIiwic3RhbmRhbG9uZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwd2FDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiYWRkIiwidmFsdWUiLCJzaGFyZUljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFlOztBQ0lBLFNBQVNBLGdCQUFULENBQTBCO0FBQUVDLEVBQUFBLFFBQUY7QUFBWUMsRUFBQUEsb0JBQVo7QUFBa0NDLEVBQUFBO0FBQWxDLENBQTFCLEVBQWtGO0FBQzdGLFFBQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2hCLFVBQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCRixTQUFqQixDQUEyQkcsV0FBM0IsRUFBbEI7QUFDQSxXQUFPLG1CQUFtQkMsSUFBbkIsQ0FBd0JKLFNBQXhCLENBQVA7QUFDSCxHQUhEOztBQUlBLFFBQU1LLGtCQUFrQixHQUFHLE1BQU0sZ0JBQWdCSixNQUFNLENBQUNDLFNBQXZCLElBQW9DRCxNQUFNLENBQUNDLFNBQVAsQ0FBaUJJLFVBQXRGLENBTDZGOzs7QUFPN0ZDLEVBQUFBLFNBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSUMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUE3QixFQUF3QztBQUNwQyxVQUFJRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxRQUFuQyxDQUE0QyxXQUE1QyxDQUFKLEVBQThEO0FBQzFELFlBQUlaLEtBQUssTUFBTSxDQUFDTSxrQkFBa0IsRUFBbEMsRUFBc0M7QUFDbEMsZ0JBQU1PLFlBQVksR0FBR0osUUFBUSxDQUFDSyxhQUFULENBQXVCLFVBQXZCLENBQXJCO0FBQ0FELFVBQUFBLFlBQVksQ0FBQ0YsU0FBYixDQUF1QkksR0FBdkIsQ0FBMkIsa0JBQTNCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osR0FUUSxDQUFUO0FBV0EsU0FDSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDSTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsS0FBOEJsQixRQUFRLENBQUNtQixLQUF2QyxDQURKLEVBRUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0ksNEJBQU9sQixvQkFBb0IsQ0FBQ2tCLEtBQTVCLENBREosRUFFSTtBQUFLLElBQUEsU0FBUyxFQUFDLGVBQWY7QUFBK0IsSUFBQSxHQUFHLEVBQUVDLFNBQXBDO0FBQStDLElBQUEsR0FBRyxFQUFDO0FBQW5ELElBRkosRUFHSSw0QkFBT2xCLGtCQUFrQixDQUFDaUIsS0FBMUIsQ0FISixDQUZKLENBREo7QUFVSDs7OzsifQ==
