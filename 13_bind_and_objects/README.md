# 'bind()' method :

### HTML : 
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <button>Button Clicked</button>
</body>
<script>
    class React {
        constructor(){
            this.library = "React"
            this.server = "https://localhost:3000"

            // requirement
            document.querySelector('button').addEventListener('click', this.handleClick.bind(this))
        }
        handleClick(){
            console.log("button Clicked!");
            console.log(this.server);
        }
    }

    const app = new React()
</script>
</html>
```
# Objects and their properties :

### JAVASCRIPT :
```js
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
```
#
## Question : Can I change the value of pi in Math object of javascript ?
### Ans: No, we can't change the value.

### JAVASCRIPT :
```js
Object.defineProperty(Math, "Math.PI", {
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(Math, "Math.PI"));


console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);
```
#
### Task 3:Creating Custom Value of PI, as we can't modify the value of Math.PI.

### JAVASCRIPT :
```js
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
```