// Select input and output elements
const input = document.getElementById("userInput");
const output = document.getElementById("output");

// Create a character counter
const charCount = document.createElement("p");
charCount.id = "charCount";
charCount.style.fontSize = "14px";
charCount.style.color = "gray";
charCount.textContent = "Characters: 0";
output.parentNode.appendChild(charCount);

// Function to generate a random color
function getRandomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

// Handle real-time input
input.addEventListener("input", function () {
    const text = this.value || "👀";
    output.textContent = text;
    output.style.color = getRandomColor(); // Change text color
    output.style.transition = "color 0.3s ease-in-out"; // Smooth color transition
    charCount.textContent = `Characters: ${text.length}`; // Update character count
});

// Clear input on double-click
input.addEventListener("dblclick", function () {
    this.value = "";
    output.textContent = "👀";
    charCount.textContent = "Characters: 0";
});
