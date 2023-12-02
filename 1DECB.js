console.clear();

const car = {
     name: "Audi",
     model: "A6",
     color : "red" ,
     year: 2012,
};

const newCar = {}
for(let key in car){
  newCar[key] = car[key]
}
newCar.name = "maruti";
console.log(newCar);
console.log(car)
