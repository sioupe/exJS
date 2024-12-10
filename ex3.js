const prompt = require("prompt-sync")({sigint : true})

const phrase = prompt("phrase ? ")
console.log("phrase = " +phrase)
console.log("longueur phrase " +phrase.length)
console.log("phrase = " +phrase.toUpperCase())
console.log("contient JavaScript " + phrase.includes("JavaScript"))