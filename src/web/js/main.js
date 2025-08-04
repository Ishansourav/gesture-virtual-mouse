// Add event listener for button click
document.getElementById("userInputButton").addEventListener("click", getUserInput, false);

// Add event listener for Enter key press
document.getElementById("userInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getUserInput();
    }
});

// Expose Python-callable functions to JS
eel.expose(addUserMsg);
eel.expose(addAppMsg);

/**
 * Append user message to chat box
 * @param {string} msg 
 */
function addUserMsg(msg) {
    const messages = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message from ready rtol";
    messageDiv.textContent = msg;
    messages.appendChild(messageDiv);

    scrollToBottom(messages);

    const index = messages.childElementCount - 1;
    setTimeout(() => changeClass(messages, index, "message from"), 500);
}

/**
 * Append bot/app message to chat box
 * @param {string} msg 
 */
function addAppMsg(msg) {
    const messages = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message to ready ltor";
    messageDiv.textContent = msg;
    messages.appendChild(messageDiv);

    scrollToBottom(messages);

    const index = messages.childElementCount - 1;
    setTimeout(() => changeClass(messages, index, "message to"), 500);
}

/**
 * Change class after animation
 */
function changeClass(element, index, newClass) {
    if (element.children[index]) {
        element.children[index].className = newClass;
    }
}

/**
 * Send user input to backend
 */
function getUserInput() {
    const inputElement = document.getElementById("userInput");
    const msg = inputElement.value.trim();

    if (msg.length > 0) {
        inputElement.value = "";
        eel.getUserInput(msg); // Call Python
    }

    inputElement.focus(); // Refocus input after sending
}

/**
 * Scroll chat to the bottom
 */
function scrollToBottom(container) {
    container.scrollTop = container.scrollHeight;
}