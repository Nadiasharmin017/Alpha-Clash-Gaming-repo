//alphabet continue game
function continueGame(){
    const alpha = getRandomAlphabet();
    console.log("Random alphabet is: ",alpha)
    //show the alphabet on the screen
    const currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = alpha;
    setBackgoundColor(alpha);
}

//play now click button
function playNow(){
    // console.log("c;ick baba")
    //step1- hide the home screen
    const homeScreen = document.getElementById("home-screen");
    // console.log(homeScreen.classList)
    homeScreen.classList.add("hidden")

    //show the palyground
    const playGround = document.getElementById("playground");
    // console.log(palyGround.classList)
    //remove hidden on the classlist
    playGround.classList.remove("hidden");
    continueGame();
  
}
//set backgound color
function setBackgoundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");

}