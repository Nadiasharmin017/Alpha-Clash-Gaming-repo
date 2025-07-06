function continueGame(){
    const alpha = getRandomAlphabet();
}
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
    playGround.classList.remove("hidden")
    continueGame()
}