import { Component, createElement } from "react";

export class preview extends Component {
    render() {
        return <div>hi there</div>;
    }
}

export function getPreviewCss() {
    return require("./ui/PWAOverlayForiOS.css");
}
