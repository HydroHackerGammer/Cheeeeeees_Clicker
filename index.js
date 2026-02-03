let cheese = 0;
const UserinterfaceCounter = document.getElementById("counter");

function updateUserinterface(){
    UserinterfaceCounter.innerHTML = cheese;
}

function click(){
    cheese += 1;
    updateUserinterface();
}



