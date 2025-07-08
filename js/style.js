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
function removeBackgoundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}


//game is over 
function gameOver(){
    const GoToHome = document.getElementById("home-screen");
    GoToHome.classList.remove("hidden");

    //hidden playground
    const playGroundHidden = document.getElementById("playground");
    playGroundHidden.classList.add("hidden");
}
function handleEvent(event){
    const playerPressed = event.key;
    console.log("player pressed", playerPressed);

    // get the expected key
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    //check if is correct or not
    if(playerPressed === expectedAlphabet){
        console.log("win");
        //get current score
        const currentScoreElement = document.getElementById("current-score");
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        //increase score
        const newscore = currentScore+1;
        currentScoreElement.innerText = newscore;
        console.log(newscore);
        removeBackgoundColor(expectedAlphabet);
        continueGame();
    }
    else{
        console.log("loser")
        // get the current life
        const currentLifeElement = document.getElementById("current-life");
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        //decrease life
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
        console.log(newLife);

        if(newLife === 0){
            console.log("game is over");
            gameOver();
        }
    }


}

document.addEventListener("keyup",handleEvent);// capture keyboard key pressed
