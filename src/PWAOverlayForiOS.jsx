import "./ui/PWAOverlayForiOS.css";
import { createElement, useEffect, useState } from "react";
import shareIcon from "./shareIcon.svg";

export default function PWAOverlayForiOS({
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
    const [hideOverlay, setHideOverlay] = useState(null);

    function handleClick() {
        setHideOverlay(true);
        instructionClosed.setValue(true);
    }

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

    useEffect(() => {
        if (instructionClosed && instructionClosed === true) {
            setHideOverlay(true);
        } else if (instructionClosed && instructionClosed === false) {
            setHideOverlay(false);
        }
    });

    if (hideOverlay && hideOverlay === true) {
        return <div className="ios-pwa"></div>;
    } else {
        return (
            <div className="ios-pwa">
                {console.info({ hideOverlay })}
                <p className="ios-pwa__text">{infoText.value}</p>
                <div className="ios-pwa__bottom">
                    <span>{instructionTextStart.value}</span>
                    <img className="ios-pwa__icon" src={shareIcon} alt="share icon" />
                    <span>{instructionTextEnd.value}</span>
                </div>
                {instructionCanBeClosed && (
                    <a className="ios-pwa__close" onClick={handleClick}>
                        <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#5D5D5D"
                                d="M9.78807 11.0466L6 7.25855L2.21193 11.0466C1.79524 11.4633 1.11339 11.4633 0.696699 11.0466C0.280011 10.6299 0.280012 9.94808 0.696699 9.53139L4.48477 5.74332L0.696699 1.95525C0.280012 1.53856 0.280011 0.856708 0.696699 0.44002C1.11339 0.0233315 1.79524 0.0233315 2.21193 0.440019L6 4.22809L9.78807 0.440019C10.2048 0.0233315 10.8866 0.0233315 11.3033 0.44002C11.72 0.856708 11.72 1.53856 11.3033 1.95525L7.51523 5.74332L11.3033 9.53139C11.72 9.94808 11.72 10.6299 11.3033 11.0466C10.8866 11.4633 10.2048 11.4633 9.78807 11.0466Z"
                            />
                        </svg>
                    </a>
                )}
            </div>
        );
    }
}
