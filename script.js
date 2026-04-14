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
            // .trim() removes accidental spaces at the start or end
            const message = inputField.value.trim();
            
            // This line helps you debug! Check your F12 Console to see this.
            console.log("Button clicked. User typed:", message);

            if (message === "") {
                display.textContent = "Please type something first!";
                display.style.color = "red";
            } else {
                display.textContent = "You typed: " + message;
                display.style.color = "#D2AF74";
                
                // Clear the box so the user can type again
                inputField.value = ""; 
            }
        });
    } else {
        // This will tell you if JS can't find your HTML elements
        console.error("JavaScript couldn't find your input, button, or display area.");
    }
});
