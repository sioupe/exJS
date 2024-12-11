const prompt = require("prompt-sync")({sigint : true})
let phrase = prompt("phrase ? ")

const listeMemeMot = (mot) =>phraseManager.listePhrase.filter((m) => m === mot)
const phraseManager ={}

phraseManager.listePhrase = phrase.split(" ")
phraseManager.taille = phrase.length
phraseManager.plusGrandeTaille = () =>{
    let plusGrandMot = ""
    for (const listePhraseElement of phraseManager.listePhrase) {
        if (listePhraseElement.length>plusGrandMot.length){
            plusGrandMot=listePhraseElement
        }
    }
    return plusGrandMot;
}

phraseManager.listesMemeMot = () =>{
    return phraseManager.listePhrase.map(m=> listeMemeMot(m).length )
}



console.log(phraseManager.listesMemeMot())
console.log(phraseManager.taille)
console.log(phraseManager.plusGrandeTaille())