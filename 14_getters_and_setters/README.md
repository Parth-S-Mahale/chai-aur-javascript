# What are getters and setters In Javascript ?

## Answer :

In JavaScript, getters and setters are methods that provide access and control over object properties. They allow you to define how properties are accessed and modified within an object, offering more flexibility compared to directly interacting with properties.

### Getters :
- Getters are methods that retrieve or "get" the value of a specific property.
- They are defined using the get keyword.
- When you access the property, the getter function is executed, returning a value.

### Setters :
- Setters are methods that update or "set" the value of a specific property.
- They are defined using the set keyword.
- When you assign a value to the property, the setter function is executed, allowing you to control or validate the  new value.

### Key Points:

- #### 1. Getters allow you to access the property like a normal value, but it runs a function behind the scenes.

- #### 2. Setters enable you to set a value, often with some validation or modification logic.

- #### 3. Internally, getters and setters usually use a private variable (like _prop in the example) to store the actual value.

#
# Getters and Setters Using Classes :

### JAVASCRIPT : 
```js
class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email)
console.log(hitesh.password);
```

#
# Getters and Setters Using Objects :

### JAVASCRIPT : 
```js
const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

```

#
# Getters and Setters Using functions :

### JAVASCRIPT : 
```js
function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);

```

