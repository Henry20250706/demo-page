document.addEventListener('DOMContentLoaded', function() {

    // 1. The Alert Button Logic
    const alertBtn = document.getElementById('myButton');
    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            alert("The BUTTON has been activated! :D (Wicked smile)");
        });
    }

    // 2. The Text Display Logic (Chatbot)
    const inputField = document.getElementById('userInput');
    const submitBtn = document.getElementById('submitButton');
    const display = document.getElementById('displayArea');

    if (submitBtn && inputField && display) {
        submitBtn.addEventListener('click', function() {
            const message = inputField.value.trim().toLowerCase();
            console.log("Button clicked. User typed:", message);

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
                display.style.color = "#00e676"; 
            }
            else if (message.includes("github")) {
                display.textContent = "GitHub is where we host our projects and share code!";
                display.style.color = "#4db8ff"; 
            }
            else {
                display.textContent = "I don't recognize '" + message + "' yet, but I'm learning!";
                display.style.color = "#D2AF74";
            }
            inputField.value = ""; 
        });
    }

    // 3. The Theme Toggle Logic (Cyber Mode)
    const themeBtn = document.getElementById('themeButton');
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('cyber-mode');
            if (document.body.classList.contains('cyber-mode')) {
                themeBtn.textContent = "Back to Normal";
            } else {
                themeBtn.textContent = "Activate Cyber Mode";
            }
        });
    }

    // 4. The Fast Spin Logic
    const spinBtn = document.getElementById('spinButton');
    const endImg = document.getElementById('end-image');

    if (spinBtn && endImg) {
        spinBtn.addEventListener('click', function() {
            // Add the CSS class to trigger animation
            endImg.classList.add('fast-spin');

            // Remove the class after 1.5 seconds so it can be spun again
            setTimeout(function() {
                endImg.classList.remove('fast-spin');
            }, 1500); 
        });
    }
});
