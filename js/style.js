function playNow(){
    // console.log("c;ick baba")
    //step1- hide the home screen
    const homeScreen = document.getElementById("home-screen");
    // console.log(homeScreen.classList)
    homeScreen.classList.add("hidden")

    //show the palyground
    const palyGround = document.getElementById("playground");
    // console.log(palyGround.classList)
    //remove hidden on the classlist
    palyGround.classList.remove("hidden")
}