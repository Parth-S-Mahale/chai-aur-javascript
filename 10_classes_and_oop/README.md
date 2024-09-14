# Object Oriented Programming In Javascript :

## Object :
- collection of properties and methods
- Example :- toUpperCase() , toLowerCase() , etc.

## why do we use Object Oriented Programming In Javascript ?
### Answer : 

<span style="color: blue">In JavaScript, Object-Oriented Programming (OOP) is used for many of the same reasons as in other programming languages but with some specific benefits tailored to JavaScript's unique environment:</span>

<span style="color: pink">1. Code Organization and Modularity: OOP helps organize code into classes and objects, improving readability and manageability, especially in larger projects like web applications.</span>

<span style="color: pink">2. Reusability with Classes and Prototypes: JavaScript allows for reusable code through classes (introduced in ES6) or prototypes, enabling you to define methods and properties that can be reused across multiple objects.</span>

<span style="color: pink">3. Encapsulation: By grouping related variables (properties) and functions (methods) into objects, you encapsulate data and behaviors, protecting internal states from unintended interference and making your code more secure.</span>

<span style="color: pink">4. Inheritance: JavaScript supports inheritance, allowing you to extend classes or objects, which promotes code reuse. Child objects can inherit properties and methods from parent objects, reducing redundancy.</span>

<span style="color: pink">5. Polymorphism: With polymorphism, objects of different types can be accessed through the same interface, allowing you to use objects interchangeably while maintaining a consistent behavior.</span>

<span style="color: pink">6. Maintainability and Scalability: OOP structures in JavaScript help in building large-scale applications by separating concerns into different objects and modules. This makes the code easier to maintain and extend as the application grows.</span>

<span style="color: pink">7. Event-driven and UI-centric Applications: In JavaScript, especially in web development, objects representing UI elements or components (e.g., in frameworks like React.js) naturally map to OOP structures, improving the handling of events, state, and behavior.</span>

<span style="color: pink">8. Framework Support: Many modern JavaScript frameworks and libraries (like React, Angular, and Vue) rely on OOP principles, especially components, making it easier to work with them if you're familiar with OOP concepts.</span>

<span style="color: blue">In short, OOP in JavaScript is valuable for structuring code to be reusable, maintainable, and scalable, while aligning well with modern development patterns like component-based architectures.</span>

### JAVASCRIPT (Issue of overriding an existing info) :
``` js
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this // no need to return 
}

const userOne = User("hitesh", 12, true)
const userTwo = User("ChaiAurCode", 11, false)
console.log(userOne); // userTwo info overrides --> userOne info, that's why 'new' keyword is used to stop the overriding of the info one object due to another. 
```
## parts of OOP :
Object literal

- Constructor function

### JAVASCRIPT (Introduction to Constructor function) :
``` js
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this // no need to return 
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);
```

- Prototypes
- Classes
- Instances (new, this)

### JAVASCRIPT (Introduction to 'new' Keyword) :
``` js
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this // no need to return 
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);
```

### JAVASCRIPT (Introduction to 'this' Keyword) :
```js
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        // console.log(this); // current context
        
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this)
```



## 4 pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism