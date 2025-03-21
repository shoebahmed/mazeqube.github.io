(function() {
    'use strict';

    // Create a new style element for overlay and button
    var style = document.createElement("style");
    style.innerHTML = `
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 24px;
            flex-direction: column;
        }

        .overlay button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #ff4d4d;
            color: white;
            border: none;
            cursor: pointer;
        }

        .overlay button:hover {
            background-color: #ff1a1a;
        }
    `;
    // Append the style to the head
    document.head.appendChild(style);

    // Create the overlay div
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Add text to the overlay
    overlay.textContent = "Welcome to GoHighLevel";

    // Create the close button
    var closeButton = document.createElement("button");
    closeButton.textContent = "Close Overlay";

    // Add an event listener to close the overlay when clicked
    closeButton.addEventListener("click", function() {
        overlay.style.display = "none";
    });

    // Append the button to the overlay
    overlay.appendChild(closeButton);

    // Attach the overlay to the #app div
    document.getElementById("app").appendChild(overlay);
})();