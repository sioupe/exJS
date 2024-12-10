const prompt = require("prompt-sync")({sigint : true})

const age = parseInt(prompt("age ?"))

console.log("age = " +age)
if (age >= 18 && age >= 0 && age <= 1000 && isNaN(age)) {
    console.log("majeur" && isNaN(age))
}else if (age >= 0 && age <= 1000) {
    console.log("mineur")
}else{
    console.log("erreur age impossible")
}
