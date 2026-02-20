const counter = document.getElementById("counter");

function tickUp() {
    counter.innerText++;
}

function tickDown() {
    counter.innerText--;
}

function runForLoop() {
    let counting = "";
    for (let i = 0; i <= counter.innerText; i++) {
        counting += (i + " ");
    }
    document.getElementById("forLoopResult").innerText = counting;
}

function showOddNumbers() {
    let counting = "";
    for (let i = 1; i <= counter.innerText; i += 2) {
        counting += (i + " ");
    }
    document.getElementById("oddNumberResult").innerText = counting;
}

function addMultiplesToArray() {
    let arrayMultiples = {};
    let size = 0;
    if (counter.innerText > 5) {
        for (let i = counter.innerText - (counter.innerText % 5); i >= 5; i -= 5) {
            arrayMultiples[size] = i;
            size++;
        }
    }
    console.log(arrayMultiples);
}

function Car(carType, carMPG, carColor) {
    this.cType = carType;
    this.cMPG = carMPG;
    this.cColor = carColor;
}

function printCarObject() {
    let carObject = new Car(
        document.getElementById("carType").value,
        document.getElementById("carMPG").value,
        document.getElementById("carColor").value
    );

    console.log(carObject);
}

function loadCar(carNum) {
    let carChoice;

    if (carNum === 1) {
        carChoice = carObject1;
    }   else if (carNum === 2) {
        carChoice = carObject2;
    }   else {
        carChoice = carObject3;
    }

    document.getElementById("carType").value = carChoice.cType;
    document.getElementById("carMPG").value = carChoice.cMPG;
    document.getElementById("carColor").value = carChoice.cColor;
}

function changeColor(colorID) {
    if (colorID === 1) {
        document.getElementById("styleParagraph").style.color = "red";
    }   else if (colorID === 2) {
        document.getElementById("styleParagraph").style.color = "green";
    }   else {
        document.getElementById("styleParagraph").style.color = "blue";
    }
}