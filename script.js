// --- Part 2: JavaScript Functions with Parameters, Return Values, and Scope ---

// Global variable
let animationState = "paused";

// Function to set animation state (demonstrates parameters + scope)
function setAnimationState(elementId, state) {
    let element = document.getElementById(elementId); // local variable
    element.style.animationPlayState = state;
    animationState = state; // updates global variable
    return animationState;  // return value for clarity
}

// Reusable play function
function play() {
    let result = setAnimationState("ball", "running");
    console.log("Animation state:", result); 
}

// Reusable pause function
function pause() {
    let result = setAnimationState("ball", "paused");
    console.log("Animation state:", result);
}

// --- Extra Function Example: Toggle Animation ---
function toggleAnimation(elementId) {
    if (animationState === "paused") {
        play();
    } else {
        pause();
    }
}

// --- Part 3: Combining CSS & JavaScript ---

// Trigger animation dynamically by toggling a CSS class
function animateBox() {
    let box = document.querySelector(".transition-box");
    box.classList.toggle("active");
}

// Event listener example (instead of inline onclick)
document.querySelector(".transition-box").addEventListener("click", animateBox);
