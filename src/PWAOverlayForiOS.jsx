import "./ui/PWAOverlayForiOS.css";
import { createElement, useEffect } from "react";
import shareIcon from "./shareIcon.svg";

export default function PWAOverlayForiOS({ infoText, instructionTextStart, instructionTextEnd }) {
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

    return (
        <div className="ios-pwa">
            <p className="ios-pwa__text">{infoText.value}</p>
            <div className="ios-pwa__bottom">
                <span>{instructionTextStart.value}</span>
                <img className="ios-pwa__icon" src={shareIcon} alt="share icon" />
                <span>{instructionTextEnd.value}</span>
            </div>
        </div>
    );
}
