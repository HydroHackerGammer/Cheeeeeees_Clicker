let cheese = new Number(localStorage.getItem("save"))||0;
const UserinterfaceCounter = document.getElementById("counter");
const UserinterfaceShop = document.getElementById("shop")

function updateUserinterface() {
    UserinterfaceCounter.textContent = cheese;
}

function cheeseClick() {
    cheese += 1;
    updateUserinterface();
    localStorage.setItem("save", cheese)
}

updateUserinterface()

function openShop() {
    UserinterfaceShop.classList.add("open")
}

function closeShop() {
    UserinterfaceShop.classList.remove("open")
}