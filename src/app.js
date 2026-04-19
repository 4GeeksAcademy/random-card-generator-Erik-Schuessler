
const suits = ["♦", "♥", "♠", "♣"];
const values = ["A", "2", "3", "4", "5", "6","7", "8", "9", "10", "J", "Q", "K"];

const getRandomElement = (array) => {
    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
};


let randomSuit = getRandomElement(suits);
let randomValue = getRandomElement(values);


window.onload = function() {
  //write your code here

  const mainContainer = document.getElementById("card-container"); 
  const valueContainer = document.getElementById("value");
  const leftSuit = document.getElementById("left");
  const rightSuit = document.getElementById("right");
  const dealButton = document.getElementById("deal-button");

  valueContainer.innerText = randomValue;
  leftSuit.innerText = randomSuit;
  rightSuit.innerText = randomSuit;
  
  if (randomSuit === "♦" || randomSuit === "♥") mainContainer.classList.add("red");

 dealButton.onclick = () => {
    let newRandomSuit = getRandomElement(suits);
    valueContainer.innerText = getRandomElement(values);
    leftSuit.innerText = newRandomSuit;
    rightSuit.innerText = newRandomSuit;
    if (newRandomSuit === "♦" || newRandomSuit === "♥"){
      mainContainer.classList.add("red");
      mainContainer.classList.remove("black")
    } 
    else mainContainer.classList.add("black")
 }

 setInterval(() => {
  let newRandomSuit = getRandomElement(suits);
    valueContainer.innerText = getRandomElement(values);
    leftSuit.innerText = newRandomSuit;
    rightSuit.innerText = newRandomSuit;
    if (newRandomSuit === "♦" || newRandomSuit === "♥"){
      mainContainer.classList.add("red");
      mainContainer.classList.remove("black")
    } 
    else mainContainer.classList.add("black")
 }, 10000);

};
