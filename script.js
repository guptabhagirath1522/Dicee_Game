//Generating random number for Dice 1
var randomNumber1 = Math.round(Math.random() * 6);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
//Generating random number for Dice 1
var randomNumber2 = Math.round(Math.random() * 6);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//Declares Winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!!🚩";   
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🎌Player 2 Wins!!🎌";
}else{
    document.querySelector("h1").innerHTML = "🐧No One Wins.🐧";
}
