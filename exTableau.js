let produits =[]

const add =(produit) => produits.push(produit)

const remove =(produit) => {
    produits = produits.filter((p) => p !== produit)
    return produits
}

const exists =(produit) => {


    return (produits.find((p) => p===produit) !== undefined)
}


console.log(add("produit1"))
console.log(add("produit2"))
console.log(add("produit3"))

console.log(exists("produit1"))

console.log(remove("produit1"))


console.log(exists("produit1"))