function calculateTotal(prix, taxe){
    if(taxe === undefined){
        console.log(prix*1.2)
    }else {
        console.log(prix*(1+taxe*0.01))
    }
}
calculateTotal(20,20)
calculateTotal(20)