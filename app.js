var colors = ["green", "red", "rgba(133, 122, 200)", "#f15025", "pink", "purple", "indigo", "blue", "yellow", "grey", "MediumSeaGreen"];
var btn = document.getElementById('btn');
var color = document.querySelector(".color");

// function to change color randomly
function colorChanger(){
    var randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
};

// function to generate random color
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

// adding an event listener to the button
btn.addEventListener("click", colorChanger);