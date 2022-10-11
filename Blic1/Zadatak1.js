//ZADATAK 1

let arrobj = [{1:"A"},{1:"C",2:"A"},{2:"C"}]

let funk = (arr) => {
    let laKey = Object.keys(arrobj).sort();
    let key = JSON.stringify(laKey); 
    console.log(key)
    for(i of arr){
        if(i == laKey){
        return arr}
    }

}

let rez = funk(arrobj)
console.log("Zadatak 1")
console.log(arrobj,"->",rez)