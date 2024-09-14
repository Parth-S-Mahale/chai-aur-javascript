function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){
   this.price++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()