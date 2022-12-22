import { createElement } from "react";
// import shareIcon from "./shareIcon.svg";

export function preview() {
    return (
        <div className="ios-pwa-preview">
            <div className="ios-pwa-preview__icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 25">
                    <g fill="#4693FE">
                        <path d="M16.4,8.6c0.8,0,1.5,0.7,1.5,1.5v11.4c0,0.8-0.7,1.5-1.5,1.5H3.6c-0.8,0-1.5-0.7-1.5-1.5V10.1c0-0.8,0.7-1.5,1.5-1.5H7l0-1.5H3.6c-1.7,0-3,1.3-3,3v11.4c0,1.6,1.4,3,3,3h12.8c1.6,0,3-1.4,3-3V10.1c0-1.7-1.4-3-3-3l0,0H13l0,1.5H16.4" />
                        <path d="M10,0.4C10,0.4,10,0.4,10,0.4C10,0.4,10,0.4,10,0.4c-0.1,0-0.2,0-0.3,0.1c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0L5.9,4.3C5.6,4.6,5.6,5,5.9,5.3C6,5.5,6.2,5.6,6.4,5.6c0.2,0,0.4-0.1,0.5-0.2L9.3,3v12.1c0,0.4,0.3,0.8,0.8,0.8c0.4,0,0.8-0.3,0.8-0.8V3l2.3,2.3c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2c0.3-0.3,0.3-0.8,0-1.1l-3.6-3.6c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.1c0,0,0,0,0,0C10.2,0.5,10.1,0.4,10,0.4C10,0.4,10,0.4,10,0.4C10,0.4,10,0.4,10,0.4L10,0.4z" />
                    </g>
                </svg>
            </div>
            <p className="ios-pwa-preview__text">
                <span>PWA overlay for iOS</span>
            </p>
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/PWAOverlayForiOS.css");
}
