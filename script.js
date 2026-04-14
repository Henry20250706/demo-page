document.addEventListener('DOMContentLoaded', function() {

    // 1. The Alert Button Logic
    const alertBtn = document.getElementById('myButton');
    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            alert("The BUTTON has been activated! :D (Wicked smile)");
        });
    }

    // 2. The Text Display Logic
    const inputField = document.getElementById('userInput');
    const submitBtn = document.getElementById('submitButton');
    const display = document.getElementById('displayArea');

    if (submitBtn && inputField && display) {
        submitBtn.addEventListener('click', function() {
            // Convert to lowercase so "AI" and "ai" both work
            const message = inputField.value.trim().toLowerCase();
            
            console.log("Button clicked. User typed:", message);

            // Logic Tree: Checking for different inputs
            if (message === "") {
                display.textContent = "Please type something first!";
                display.style.color = "red";
            } 
            else if (message === "hello" || message === "hi") {
                display.textContent = "Greetings! Welcome to our AI class.";
                display.style.color = "#D2AF74"; 
            }
            else if (message.includes("ai") || message.includes("robot")) {
                display.textContent = "AI is fascinating! We are learning to build it right now.";
                display.style.color = "#00e676"; // A cool tech-green color
            }
            else if (message.includes("github")) {
                display.textContent = "GitHub is where we host our projects and share code!";
                display.style.color = "#4db8ff"; // GitHub-ish blue
            }
            else {
                // The "Else" handles any input that didn't match the specific cases above
                display.textContent = "I don't recognize '" + message + "' yet, but I'm learning!";
                display.style.color = "#D2AF74";
            }

            // Clear the input box after each submission
            inputField.value = ""; 
        });
    } else {
        console.error("JavaScript couldn't find your input, button, or display area.");
    }
});
