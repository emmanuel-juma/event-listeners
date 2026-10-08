// ========================================
// 1. CLICK EVENT
// ========================================

const clickButton = document.querySelector("#clickButton");
const message = document.querySelector("#message");

clickButton.addEventListener("click", () => {
    message.textContent = "The button was clicked!";
});


// ========================================
// 2. MOUSE EVENT
// ========================================

const box = document.querySelector("#box");

box.addEventListener("mouseover", () => {
    box.textContent = "Mouse is over me!";
});

box.addEventListener("mouseout", () => {
    box.textContent = "Move your mouse over me";
});


// ========================================
// 3. KEYBOARD EVENT
// ========================================

const keyboardInput = document.querySelector("#keyboardInput");
const keyDisplay = document.querySelector("#keyDisplay");

keyboardInput.addEventListener("keydown", (event) => {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
});


// ========================================
// 4. INPUT EVENT
// ========================================

const nameInput = document.querySelector("#nameInput");
const nameDisplay = document.querySelector("#nameDisplay");

nameInput.addEventListener("input", (event) => {
    nameDisplay.textContent = `Hello, ${event.target.value}`;
});


// ========================================
// 5. FORM SUBMIT EVENT
// ========================================

const form = document.querySelector("#myForm");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    formMessage.textContent = "Form submitted successfully!";
});


// ========================================
// 6. COUNTER
// ========================================

let count = 0;

const countDisplay = document.querySelector("#count");
const increaseButton = document.querySelector("#increaseButton");
const decreaseButton = document.querySelector("#decreaseButton");


increaseButton.addEventListener("click", () => {

    count++;

    countDisplay.textContent = count;

});


decreaseButton.addEventListener("click", () => {

    count--;

    countDisplay.textContent = count;

});