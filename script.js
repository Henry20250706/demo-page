// Wrap everything in a "DOMContentLoaded" function. 
// This tells JS: "Wait until the HTML is 100% finished loading before running."
document.addEventListener('DOMContentLoaded', function() {

    // 1. The Alert Button Logic
    const alertBtn = document.getElementById('myButton');
    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            alert("The BUTTON has been activated! 🤖✨");
        });
    }

    // 2. The Text Display Logic
    const inputField = document.getElementById('userInput');
    const submitBtn = document.getElementById('submitButton');
    const display = document.getElementById('displayArea');

    if (submitBtn && inputField && display) {
        submitBtn.addEventListener('click', function() {
            const message = inputField.value;
            if (message === "") {
                display.textContent = "Please type something first!";
                display.style.color = "red";
            } else {
                display.textContent = "You typed: " + message;
                display.style.color = "#D2AF74";
                inputField.value = ""; 
            }
        });
    }

});
