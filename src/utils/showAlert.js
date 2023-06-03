import {renderToString} from "react-dom/server";
import React from "react";

export function showAlert(text) {
    const div = document.createElement('div');
    div.innerHTML = renderToString(
        <div
            style={{
                position: 'fixed',
                top: '0',
                left: '50%',
            }}
        >
            {text}
        </div>
    )

    const alert = div.firstChild;
    document.body.appendChild(alert);

    setTimeout(() => {
            alert.remove()
        },
        1500
    )
}