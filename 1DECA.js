console.clear();

const person = {
    fullName:"Kajal Rana",
    age:22,
    occupation:"Developer"
}

const cloneObj = Object.assign({} , person)   
cloneObj.fullName = "Vipra Rana"
console.log(cloneObj);
console.log(person);
