function getRandomAlphabet(){
    //get create a alphabet array
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    //split the string into an array of characters
    const alphabets = alphabetString.split("")
        console.log(alphabets)


    //get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    console.log(index);
    const alphabet = alphabets[index];
    console.log(index,alphabet);
    return alphabet;

}