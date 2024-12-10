const prompt = require("prompt-sync")({sigint : true})

let randomNumber = Math.round(Math.random() * 100)
let resultat ="perdu"
console.log("random number = " + randomNumber)
for (let i = 0; i < 5; i++) {
    const num = prompt("combien ? ")
    if (num < randomNumber) {
        console.log("c'est plus")
    }else if(num>randomNumber){
        console.log("c'est moins")
    }else{
        console.log("bravo")
        resultat = "gagné"
        break
    }
}
console.log(resultat)
