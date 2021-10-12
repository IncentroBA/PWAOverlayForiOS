define(['react'], (function (react) { 'use strict';

    

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


      react.useEffect(() => {
        if (document.documentElement.classList) {
          if (document.documentElement.classList.contains("dj_safari")) {
            if (isIos() && !isInStandaloneMode()) {
              const pwaContainer = document.querySelector(".ios-pwa");
              pwaContainer.classList.add("ios-pwa--visible");
            }
          }
        }
      });
      return react.createElement("div", {
        className: "ios-pwa"
      }, react.createElement("p", {
        className: "ios-pwa__text"
      }, infoText.value), react.createElement("div", {
        className: "ios-pwa__bottom"
      }, react.createElement("span", null, instructionTextStart.value), react.createElement("img", {
        className: "ios-pwa__icon",
        src: shareIcon,
        alt: "share icon"
      }), react.createElement("span", null, instructionTextEnd.value)));
    }

    return PWAOverlayForiOS;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUFdBT3ZlcmxheUZvcmlPUy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3NoYXJlSWNvbi5zdmciLCIuLi8uLi8uLi8uLi8uLi9zcmMvUFdBT3ZlcmxheUZvcmlPUy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnJTIwdmVyc2lvbiUzRCUyMjEuMSUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMjAlMjAyNSUyMiUzRSUyMCUyMCUzQ2clMjBmaWxsJTNEJTIyJTIzNDY5M0ZFJTIyJTNFJTIwJTIwJTIwJTIwJTNDcGF0aCUyMGQlM0QlMjJNMTYuNCUyQzguNmMwLjglMkMwJTJDMS41JTJDMC43JTJDMS41JTJDMS41djExLjRjMCUyQzAuOC0wLjclMkMxLjUtMS41JTJDMS41SDMuNmMtMC44JTJDMC0xLjUtMC43LTEuNS0xLjVWMTAuMWMwLTAuOCUyQzAuNy0xLjUlMkMxLjUtMS41SDdsMC0xLjVIMy42Yy0xLjclMkMwLTMlMkMxLjMtMyUyQzN2MTEuNGMwJTJDMS42JTJDMS40JTJDMyUyQzMlMkMzaDEyLjhjMS42JTJDMCUyQzMtMS40JTJDMy0zVjEwLjFjMC0xLjctMS40LTMtMy0zbDAlMkMwSDEzbDAlMkMxLjVIMTYuNCUyMiUyMCUyRiUzRSUyMCUyMCUyMCUyMCUzQ3BhdGglMjBkJTNEJTIyTTEwJTJDMC40QzEwJTJDMC40JTJDMTAlMkMwLjQlMkMxMCUyQzAuNEMxMCUyQzAuNCUyQzEwJTJDMC40JTJDMTAlMkMwLjRjLTAuMSUyQzAtMC4yJTJDMC0wLjMlMkMwLjFjMCUyQzAlMkMwJTJDMCUyQzAlMkMwYy0wLjElMkMwLTAuMSUyQzAuMS0wLjIlMkMwLjFjMCUyQzAlMkMwJTJDMCUyQzAlMkMwTDUuOSUyQzQuM0M1LjYlMkM0LjYlMkM1LjYlMkM1JTJDNS45JTJDNS4zQzYlMkM1LjUlMkM2LjIlMkM1LjYlMkM2LjQlMkM1LjZjMC4yJTJDMCUyQzAuNC0wLjElMkMwLjUtMC4yTDkuMyUyQzN2MTIuMWMwJTJDMC40JTJDMC4zJTJDMC44JTJDMC44JTJDMC44YzAuNCUyQzAlMkMwLjgtMC4zJTJDMC44LTAuOFYzbDIuMyUyQzIuM2MwLjElMkMwLjElMkMwLjMlMkMwLjIlMkMwLjUlMkMwLjJzMC40LTAuMSUyQzAuNS0wLjJjMC4zLTAuMyUyQzAuMy0wLjglMkMwLTEuMWwtMy42LTMuNmMwJTJDMCUyQzAlMkMwJTJDMCUyQzBjLTAuMS0wLjEtMC4xLTAuMS0wLjItMC4xYzAlMkMwJTJDMCUyQzAlMkMwJTJDMEMxMC4yJTJDMC41JTJDMTAuMSUyQzAuNCUyQzEwJTJDMC40QzEwJTJDMC40JTJDMTAlMkMwLjQlMkMxMCUyQzAuNEMxMCUyQzAuNCUyQzEwJTJDMC40JTJDMTAlMkMwLjRMMTAlMkMwLjR6JTIyJTIwJTJGJTNFJTIwJTIwJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiIiwiaW1wb3J0IFwiLi91aS9QV0FPdmVybGF5Rm9yaU9TLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc2hhcmVJY29uIGZyb20gXCIuL3NoYXJlSWNvbi5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUFdBT3ZlcmxheUZvcmlPUyh7IGluZm9UZXh0LCBpbnN0cnVjdGlvblRleHRTdGFydCwgaW5zdHJ1Y3Rpb25UZXh0RW5kIH0pIHtcbiAgICBjb25zdCBpc0lvcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIC9pcGhvbmV8aXBhZHxpcG9kLy50ZXN0KHVzZXJBZ2VudCk7XG4gICAgfTtcbiAgICBjb25zdCBpc0luU3RhbmRhbG9uZU1vZGUgPSAoKSA9PiBcInN0YW5kYWxvbmVcIiBpbiB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3Iuc3RhbmRhbG9uZTsgLy8gRGV0ZWN0cyBpZiBkZXZpY2UgaXMgaW4gc3RhbmRhbG9uZSBtb2RlXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkal9zYWZhcmlcIikpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNJb3MoKSAmJiAhaXNJblN0YW5kYWxvbmVNb2RlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHdhQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pb3MtcHdhXCIpO1xuICAgICAgICAgICAgICAgICAgICBwd2FDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlvcy1wd2EtLXZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlvcy1wd2FcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlvcy1wd2FfX3RleHRcIj57aW5mb1RleHQudmFsdWV9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpb3MtcHdhX19ib3R0b21cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aW5zdHJ1Y3Rpb25UZXh0U3RhcnQudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW9zLXB3YV9faWNvblwiIHNyYz17c2hhcmVJY29ufSBhbHQ9XCJzaGFyZSBpY29uXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aW5zdHJ1Y3Rpb25UZXh0RW5kLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlBXQU92ZXJsYXlGb3JpT1MiLCJpbmZvVGV4dCIsImluc3RydWN0aW9uVGV4dFN0YXJ0IiwiaW5zdHJ1Y3Rpb25UZXh0RW5kIiwiaXNJb3MiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ0b0xvd2VyQ2FzZSIsInRlc3QiLCJpc0luU3RhbmRhbG9uZU1vZGUiLCJzdGFuZGFsb25lIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInB3YUNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJhZGQiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJzaGFyZUljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQWU7O0lDSUEsU0FBU0EsZ0JBQVQsQ0FBMEI7SUFBRUMsRUFBQUEsUUFBRjtJQUFZQyxFQUFBQSxvQkFBWjtJQUFrQ0MsRUFBQUE7SUFBbEMsQ0FBMUIsRUFBa0Y7SUFDN0YsUUFBTUMsS0FBSyxHQUFHLE1BQU07SUFDaEIsVUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJGLFNBQWpCLENBQTJCRyxXQUEzQixFQUFsQjtJQUNBLFdBQU8sbUJBQW1CQyxJQUFuQixDQUF3QkosU0FBeEIsQ0FBUDtJQUNILEdBSEQ7O0lBSUEsUUFBTUssa0JBQWtCLEdBQUcsTUFBTSxnQkFBZ0JKLE1BQU0sQ0FBQ0MsU0FBdkIsSUFBb0NELE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkksVUFBdEYsQ0FMNkY7OztJQU83RkMsRUFBQUEsZUFBUyxDQUFDLE1BQU07SUFDWixRQUFJQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTdCLEVBQXdDO0lBQ3BDLFVBQUlGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNDLFFBQW5DLENBQTRDLFdBQTVDLENBQUosRUFBOEQ7SUFDMUQsWUFBSVosS0FBSyxNQUFNLENBQUNNLGtCQUFrQixFQUFsQyxFQUFzQztJQUNsQyxnQkFBTU8sWUFBWSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBckI7SUFDQUQsVUFBQUEsWUFBWSxDQUFDRixTQUFiLENBQXVCSSxHQUF2QixDQUEyQixrQkFBM0I7SUFDSDtJQUNKO0lBQ0o7SUFDSixHQVRRLENBQVQ7SUFXQSxTQUNJQztJQUFLLElBQUEsU0FBUyxFQUFDO0lBQWYsS0FDSUE7SUFBRyxJQUFBLFNBQVMsRUFBQztJQUFiLEtBQThCbkIsUUFBUSxDQUFDb0IsS0FBdkMsQ0FESixFQUVJRDtJQUFLLElBQUEsU0FBUyxFQUFDO0lBQWYsS0FDSUEsa0NBQU9sQixvQkFBb0IsQ0FBQ21CLEtBQTVCLENBREosRUFFSUQ7SUFBSyxJQUFBLFNBQVMsRUFBQyxlQUFmO0lBQStCLElBQUEsR0FBRyxFQUFFRSxTQUFwQztJQUErQyxJQUFBLEdBQUcsRUFBQztJQUFuRCxJQUZKLEVBR0lGLGtDQUFPakIsa0JBQWtCLENBQUNrQixLQUExQixDQUhKLENBRkosQ0FESjtJQVVIOzs7Ozs7OzsifQ==
