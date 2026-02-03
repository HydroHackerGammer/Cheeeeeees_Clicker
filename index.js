let cheese = 0;
const UserinterfaceCounter = document.getElementById("counter");

function updateUserinterface() {
    UserinterfaceCounter.textContent = cheese;
}

function cheeseClick() {
    cheese += 1;
    updateUserinterface();
}