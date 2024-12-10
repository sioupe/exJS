const letters ="absdefghijklmnopqrstuvwxyz"
const num = "123457890"
const caracteres = letters+letters.toUpperCase()+num

let password =""
const caracteresLength = caracteres.length
let randomLetter = caracteres[Math.round(Math.random() * caracteresLength)]
password += randomLetter
 randomLetter = caracteres[Math.round(Math.random() * caracteresLength)]
password += randomLetter
randomLetter = caracteres[Math.round(Math.random() * caracteresLength)]
password += randomLetter
randomLetter = caracteres[Math.round(Math.random() * caracteresLength)]
password += randomLetter
randomLetter = caracteres[Math.round(Math.random() * caracteresLength)]
password += randomLetter
randomLetter = caracteres[Math.round(Math.random() * caracteresLength)]
password += randomLetter

console.log(password)