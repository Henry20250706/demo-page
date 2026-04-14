// 1. Find the button in the HTML using its ID
const button = document.getElementById('myButton');

// 2. Listen for a "click" event
button.addEventListener('click', function() {
    // 3. This is what happens when the click occurs
    alert("The Button has been activated! 🤖✨");
});

// 1. Hook into our HTML elements
const inputField = document.getElementById('userInput');
const submitBtn = document.getElementById('submitButton');
const display = document.getElementById('displayArea');

// 2. Define what happens when the button is clicked
submitBtn.addEventListener('click', function() {
    // Get the current text from the input box
    const message = inputField.value;

    // Check if the input is empty
    if (message === "") {
        display.textContent = "Please type something first!";
        display.style.color = "red"; // Temporary error color
    } else {
        // Display the message on the page
        display.textContent = "You typed: " + message;
        display.style.color = "#D2AF74"; // Back to your gold color
        
        // Optional: Clear the input box after submitting
        inputField.value = ""; 
    }
});
