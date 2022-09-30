let symbolsArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let renderOne = document.getElementById("render-one")
let renderTwo = document.getElementById("render-two")
let passwordOne = []
let passwordTwo = []
let passwordLength = 14

document.getElementById("generate-btn").addEventListener("click", function() {
        for (let i = 0; i < passwordLength; i++) {
          let randomSymbolFirst = symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
          let randomSymbolSecond = symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
            passwordOne.push(randomSymbolFirst)
            renderOne.textContent = passwordOne.join("")
            passwordTwo.push(randomSymbolSecond)
            renderTwo.textContent = passwordTwo.join("")
    }
    generateNextSet()
})

function generateNextSet() {
    passwordOne = []
    passwordTwo = []
}