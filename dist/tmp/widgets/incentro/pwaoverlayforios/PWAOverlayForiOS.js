define(['react'], (function (react) { 'use strict';

    var shareIcon = "widgets/incentro/pwaoverlayforios/assets/05d1ba3297328798.svg";

    function PWAOverlayForiOS({
      instructionCanBeClosed,
      instructionClosed,
      infoText,
      instructionTextStart,
      instructionTextEnd
    }) {
      const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
      };
      const isInStandaloneMode = () => "standalone" in window.navigator && window.navigator.standalone; // Detects if device is in standalone mode
      const [hideOverlay, setHideOverlay] = react.useState(null);
      function handleClick() {
        setHideOverlay(true);
        instructionClosed.setValue(true);
      }
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
      react.useEffect(() => {
        if (instructionClosed && instructionClosed === true) {
          setHideOverlay(true);
        } else if (instructionClosed && instructionClosed === false) {
          setHideOverlay(false);
        }
      });
      if (hideOverlay && hideOverlay === true) {
        return react.createElement("div", {
          className: "ios-pwa"
        });
      } else {
        return react.createElement("div", {
          className: "ios-pwa"
        }, console.info({
          hideOverlay
        }), react.createElement("p", {
          className: "ios-pwa__text"
        }, infoText.value), react.createElement("div", {
          className: "ios-pwa__bottom"
        }, react.createElement("span", null, instructionTextStart.value), react.createElement("img", {
          className: "ios-pwa__icon",
          src: shareIcon,
          alt: "share icon"
        }), react.createElement("span", null, instructionTextEnd.value)), instructionCanBeClosed && react.createElement("a", {
          className: "ios-pwa__close",
          onClick: handleClick
        }, react.createElement("svg", {
          viewBox: "0 0 12 12",
          xmlns: "http://www.w3.org/2000/svg"
        }, react.createElement("path", {
          fill: "#5D5D5D",
          d: "M9.78807 11.0466L6 7.25855L2.21193 11.0466C1.79524 11.4633 1.11339 11.4633 0.696699 11.0466C0.280011 10.6299 0.280012 9.94808 0.696699 9.53139L4.48477 5.74332L0.696699 1.95525C0.280012 1.53856 0.280011 0.856708 0.696699 0.44002C1.11339 0.0233315 1.79524 0.0233315 2.21193 0.440019L6 4.22809L9.78807 0.440019C10.2048 0.0233315 10.8866 0.0233315 11.3033 0.44002C11.72 0.856708 11.72 1.53856 11.3033 1.95525L7.51523 5.74332L11.3033 9.53139C11.72 9.94808 11.72 10.6299 11.3033 11.0466C10.8866 11.4633 10.2048 11.4633 9.78807 11.0466Z"
        }))));
      }
    }

    return PWAOverlayForiOS;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUFdBT3ZlcmxheUZvcmlPUy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3NoYXJlSWNvbi5zdmciLCIuLi8uLi8uLi8uLi8uLi9zcmMvUFdBT3ZlcmxheUZvcmlPUy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJ3aWRnZXRzL2luY2VudHJvL3B3YW92ZXJsYXlmb3Jpb3MvYXNzZXRzLzA1ZDFiYTMyOTczMjg3OTguc3ZnXCIiLCJpbXBvcnQgXCIuL3VpL1BXQU92ZXJsYXlGb3JpT1MuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc2hhcmVJY29uIGZyb20gXCIuL3NoYXJlSWNvbi5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUFdBT3ZlcmxheUZvcmlPUyh7XG4gICAgaW5zdHJ1Y3Rpb25DYW5CZUNsb3NlZCxcbiAgICBpbnN0cnVjdGlvbkNsb3NlZCxcbiAgICBpbmZvVGV4dCxcbiAgICBpbnN0cnVjdGlvblRleHRTdGFydCxcbiAgICBpbnN0cnVjdGlvblRleHRFbmRcbn0pIHtcbiAgICBjb25zdCBpc0lvcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIC9pcGhvbmV8aXBhZHxpcG9kLy50ZXN0KHVzZXJBZ2VudCk7XG4gICAgfTtcbiAgICBjb25zdCBpc0luU3RhbmRhbG9uZU1vZGUgPSAoKSA9PiBcInN0YW5kYWxvbmVcIiBpbiB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3Iuc3RhbmRhbG9uZTsgLy8gRGV0ZWN0cyBpZiBkZXZpY2UgaXMgaW4gc3RhbmRhbG9uZSBtb2RlXG4gICAgY29uc3QgW2hpZGVPdmVybGF5LCBzZXRIaWRlT3ZlcmxheV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBzZXRIaWRlT3ZlcmxheSh0cnVlKTtcbiAgICAgICAgaW5zdHJ1Y3Rpb25DbG9zZWQuc2V0VmFsdWUodHJ1ZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGpfc2FmYXJpXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW9zKCkgJiYgIWlzSW5TdGFuZGFsb25lTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHB3YUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW9zLXB3YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHdhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpb3MtcHdhLS12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGluc3RydWN0aW9uQ2xvc2VkICYmIGluc3RydWN0aW9uQ2xvc2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRIaWRlT3ZlcmxheSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnN0cnVjdGlvbkNsb3NlZCAmJiBpbnN0cnVjdGlvbkNsb3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldEhpZGVPdmVybGF5KGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhpZGVPdmVybGF5ICYmIGhpZGVPdmVybGF5ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImlvcy1wd2FcIj48L2Rpdj47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW9zLXB3YVwiPlxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmluZm8oeyBoaWRlT3ZlcmxheSB9KX1cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpb3MtcHdhX190ZXh0XCI+e2luZm9UZXh0LnZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlvcy1wd2FfX2JvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aW5zdHJ1Y3Rpb25UZXh0U3RhcnQudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlvcy1wd2FfX2ljb25cIiBzcmM9e3NoYXJlSWNvbn0gYWx0PVwic2hhcmUgaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpbnN0cnVjdGlvblRleHRFbmQudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtpbnN0cnVjdGlvbkNhbkJlQ2xvc2VkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW9zLXB3YV9fY2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM1RDVENURcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTkuNzg4MDcgMTEuMDQ2Nkw2IDcuMjU4NTVMMi4yMTE5MyAxMS4wNDY2QzEuNzk1MjQgMTEuNDYzMyAxLjExMzM5IDExLjQ2MzMgMC42OTY2OTkgMTEuMDQ2NkMwLjI4MDAxMSAxMC42Mjk5IDAuMjgwMDEyIDkuOTQ4MDggMC42OTY2OTkgOS41MzEzOUw0LjQ4NDc3IDUuNzQzMzJMMC42OTY2OTkgMS45NTUyNUMwLjI4MDAxMiAxLjUzODU2IDAuMjgwMDExIDAuODU2NzA4IDAuNjk2Njk5IDAuNDQwMDJDMS4xMTMzOSAwLjAyMzMzMTUgMS43OTUyNCAwLjAyMzMzMTUgMi4yMTE5MyAwLjQ0MDAxOUw2IDQuMjI4MDlMOS43ODgwNyAwLjQ0MDAxOUMxMC4yMDQ4IDAuMDIzMzMxNSAxMC44ODY2IDAuMDIzMzMxNSAxMS4zMDMzIDAuNDQwMDJDMTEuNzIgMC44NTY3MDggMTEuNzIgMS41Mzg1NiAxMS4zMDMzIDEuOTU1MjVMNy41MTUyMyA1Ljc0MzMyTDExLjMwMzMgOS41MzEzOUMxMS43MiA5Ljk0ODA4IDExLjcyIDEwLjYyOTkgMTEuMzAzMyAxMS4wNDY2QzEwLjg4NjYgMTEuNDYzMyAxMC4yMDQ4IDExLjQ2MzMgOS43ODgwNyAxMS4wNDY2WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJQV0FPdmVybGF5Rm9yaU9TIiwiaW5zdHJ1Y3Rpb25DYW5CZUNsb3NlZCIsImluc3RydWN0aW9uQ2xvc2VkIiwiaW5mb1RleHQiLCJpbnN0cnVjdGlvblRleHRTdGFydCIsImluc3RydWN0aW9uVGV4dEVuZCIsImlzSW9zIiwidXNlckFnZW50Iiwid2luZG93IiwibmF2aWdhdG9yIiwidG9Mb3dlckNhc2UiLCJ0ZXN0IiwiaXNJblN0YW5kYWxvbmVNb2RlIiwic3RhbmRhbG9uZSIsImhpZGVPdmVybGF5Iiwic2V0SGlkZU92ZXJsYXkiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicHdhQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImFkZCIsImNyZWF0ZUVsZW1lbnQiLCJjb25zb2xlIiwiaW5mbyIsInZhbHVlIiwic2hhcmVJY29uIl0sIm1hcHBpbmdzIjoiOztBQUFBLG9CQUFlOztJQ0lBLFNBQVNBLGdCQUFnQixDQUFDO01BQ3JDQyxzQkFBc0I7TUFDdEJDLGlCQUFpQjtNQUNqQkMsUUFBUTtNQUNSQyxvQkFBb0I7SUFDcEJDLEVBQUFBLGtCQUFBQTtJQUNKLENBQUMsRUFBRTtNQUNDLE1BQU1DLEtBQUssR0FBRyxNQUFNO1FBQ2hCLE1BQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxTQUFTLENBQUNGLFNBQVMsQ0FBQ0csV0FBVyxFQUFFLENBQUE7SUFDMUQsSUFBQSxPQUFPLGtCQUFrQixDQUFDQyxJQUFJLENBQUNKLFNBQVMsQ0FBQyxDQUFBO09BQzVDLENBQUE7SUFDRCxFQUFBLE1BQU1LLGtCQUFrQixHQUFHLE1BQU0sWUFBWSxJQUFJSixNQUFNLENBQUNDLFNBQVMsSUFBSUQsTUFBTSxDQUFDQyxTQUFTLENBQUNJLFVBQVUsQ0FBQztNQUNqRyxNQUFNLENBQUNDLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdDLGNBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUVwRCxFQUFBLFNBQVNDLFdBQVcsR0FBRztRQUNuQkYsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3BCYixJQUFBQSxpQkFBaUIsQ0FBQ2dCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNwQyxHQUFBO0lBRUFDLEVBQUFBLGVBQVMsQ0FBQyxNQUFNO0lBQ1osSUFBQSxJQUFJQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsU0FBUyxFQUFFO1VBQ3BDLElBQUlGLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUMxRCxRQUFBLElBQUlqQixLQUFLLEVBQUUsSUFBSSxDQUFDTSxrQkFBa0IsRUFBRSxFQUFFO0lBQ2xDLFVBQUEsTUFBTVksWUFBWSxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN2REQsVUFBQUEsWUFBWSxDQUFDRixTQUFTLENBQUNJLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2xELFNBQUE7SUFDSixPQUFBO0lBQ0osS0FBQTtJQUNKLEdBQUMsQ0FBQyxDQUFBO0lBRUZQLEVBQUFBLGVBQVMsQ0FBQyxNQUFNO0lBQ1osSUFBQSxJQUFJakIsaUJBQWlCLElBQUlBLGlCQUFpQixLQUFLLElBQUksRUFBRTtVQUNqRGEsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLEtBQUMsTUFBTSxJQUFJYixpQkFBaUIsSUFBSUEsaUJBQWlCLEtBQUssS0FBSyxFQUFFO1VBQ3pEYSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsS0FBQTtJQUNKLEdBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBQSxJQUFJRCxXQUFXLElBQUlBLFdBQVcsS0FBSyxJQUFJLEVBQUU7UUFDckMsT0FBT2EsbUJBQUEsQ0FBQSxLQUFBLEVBQUE7SUFBSyxNQUFBLFNBQVMsRUFBQyxTQUFBO1NBQWdCLENBQUEsQ0FBQTtJQUMxQyxHQUFDLE1BQU07UUFDSCxPQUNJQSxtQkFBQSxDQUFBLEtBQUEsRUFBQTtJQUFLLE1BQUEsU0FBUyxFQUFDLFNBQUE7U0FDVkMsRUFBQUEsT0FBTyxDQUFDQyxJQUFJLENBQUM7SUFBRWYsTUFBQUEsV0FBQUE7SUFBWSxLQUFDLENBQUMsRUFDOUJhLG1CQUFBLENBQUEsR0FBQSxFQUFBO0lBQUcsTUFBQSxTQUFTLEVBQUMsZUFBQTtJQUFlLEtBQUEsRUFBRXhCLFFBQVEsQ0FBQzJCLEtBQUssQ0FBSyxFQUNqREgsbUJBQUEsQ0FBQSxLQUFBLEVBQUE7SUFBSyxNQUFBLFNBQVMsRUFBQyxpQkFBQTtJQUFpQixLQUFBLEVBQzVCQSxtQkFBT3ZCLENBQUFBLE1BQUFBLEVBQUFBLElBQUFBLEVBQUFBLG9CQUFvQixDQUFDMEIsS0FBSyxDQUFRLEVBQ3pDSCxtQkFBQSxDQUFBLEtBQUEsRUFBQTtJQUFLLE1BQUEsU0FBUyxFQUFDLGVBQWU7SUFBQyxNQUFBLEdBQUcsRUFBRUksU0FBVTtJQUFDLE1BQUEsR0FBRyxFQUFDLFlBQUE7U0FBZSxDQUFBLEVBQ2xFSixrQ0FBT3RCLGtCQUFrQixDQUFDeUIsS0FBSyxDQUFRLENBQ3JDLEVBQ0w3QixzQkFBc0IsSUFDbkIwQixtQkFBQSxDQUFBLEdBQUEsRUFBQTtJQUFHLE1BQUEsU0FBUyxFQUFDLGdCQUFnQjtJQUFDLE1BQUEsT0FBTyxFQUFFVixXQUFBQTtTQUNuQyxFQUFBVSxtQkFBQSxDQUFBLEtBQUEsRUFBQTtJQUFLLE1BQUEsT0FBTyxFQUFDLFdBQVc7SUFBQyxNQUFBLEtBQUssRUFBQyw0QkFBQTtTQUMzQixFQUFBQSxtQkFBQSxDQUFBLE1BQUEsRUFBQTtJQUNJLE1BQUEsSUFBSSxFQUFDLFNBQVM7SUFDZCxNQUFBLENBQUMsRUFBQyxtaEJBQUE7U0FDSixDQUFBLENBQ0EsQ0FFYixDQUNDLENBQUE7SUFFZCxHQUFBO0lBQ0o7Ozs7Ozs7OyJ9
