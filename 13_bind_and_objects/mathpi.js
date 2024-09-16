const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: true,
})

Object.defineProperty(chai, "price",  {
    // writable: false,
    enumerable: true,
})

Object.defineProperty(chai, "isAvailable",  {
    // writable: false,
    enumerable: true,
})


// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}


// --------------------- Can I change the value of pi in Math object of javascript ? | Ans: NO---------------------

Object.defineProperty(Math, "Math.PI", {
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(Math, "Math.PI"));


console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);
 

// ------------- Example: (Creating Custom Value of PI, as we can't modify the value of Math.PI so)-------------

const myMath = {
    PI: 3.14
};

Object.defineProperty(myMath, 'myMath.PI', {
    writable: true,
    enumerable: true, 
    configurable: true
});

console.log(Object.getOwnPropertyDescriptor(myMath, "myMath.PI"));

console.log((myMath.PI));
myMath.PI = 4;
console.log(myMath.PI)
