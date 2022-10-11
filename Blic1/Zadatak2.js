let str = "avascript i nije toliko los"

let strin = (str) =>{
    let duzina = str.length
    let pom = []
    let brojac =0
    for (i of str)
        brojac ++
        if(brojac < i)
        pom.push(i)
    return pom

}

let rez = strin(str)
console.log("Zadatak 2")
console.log(str,"->",rez)