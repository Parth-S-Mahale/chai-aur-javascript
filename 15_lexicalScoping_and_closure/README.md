#
## Lexical Scoping and Closeure :
### JAVASCRIPT :
```js
    function init() {
        let name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        displayName();
    }
    init();
```
#
## Lexical Scoping and Closeure using nested function and its execution :
### JAVASCRIPT :
```js
    function outer(){
        let username = "hitesh"
        console.log(secret);
        function inner(){
            let secret = "my123"
            console.log("INNER",username);
        }

        function innerTwo(){
            console.log("INNERTWO", username);
            // console.log(secret);
        }
        inner();
        innerTwo();
    }
    outer()
    console.log("TOO OUTER", username);
```
#
## Lexical Scoping and Closure passing a referrence of function instead of executing it :
### JAVASCRIPT :
```js
    function makeFunc(){
        const name = "Mozilla";
        function displayName(){
            console.log(name);
        }
        return displayName;
    }

    const myFunc = makeFunc();
    myFunc();
``` 
#
### Task 4 : In the provided `clickHandler` function, how does the concept of `closures` in JavaScript relate to a `real-life scenario`, such as a `vending machine`? Specifically, why does the vending machine need to remember your choice `(the selected item)` for the correct action to occur when you press the `"dispense"` button, similar to how the closure in clickHandler allows the correct background color to be applied only when the button is `clicked`?
#
- `Lexical Scoping` :  When the clickHandler function is executed, it creates a new local scope where the color variable is defined. However, if you try to set the background color inside the function directly without returning another function, the background color would be immediately changed when the clickHandler is called (not when the button is clicked). This is not the desired behavior in your case since the background should change when the button is clicked.

- `Closures` : Closures allow inner functions to "remember" the environment in which they were created. By returning a function, you are creating a closure that "remembers" the value of color at the time clickHandler was invoked. When the returned function (the closure) is later executed on a button click, it can still access the color value from the outer function’s scope, even though clickHandler has already finished executing.

### JAVASCRIPT : 
```js
function clickHandler(color){
    // This would execute immediately and not on click:
    // document.body.style.backgroundColor = `${color}` 

    // Instead, return a function (closure) that will be executed on click
    return function(){
        document.body.style.backgroundColor = `${color}`;
    }
}

// Assign the returned function from clickHandler to the onclick event
document.getElementById('orange').onclick = clickHandler("orange");
document.getElementById('green').onclick = clickHandler("green");
```

### What’s happening here :

- `clickHandler`("orange") returns a function that, when executed, changes the background color to orange.
- `clickHandler`("green") returns a function that, when executed, changes the background color to green.

- These returned functions are assigned to the `onclick` event handlers of the respective buttons.

- When the user clicks the button, the `onclick` function is executed, and the background color is changed to the correct value, thanks to the closure retaining the value of `color`.

#### This makes use of closures to store the `color` variable within the returned function, allowing it to be accessed later when the button is clicked.
#
### Task 4 Method-II (Without using lexical scoping and closure) :

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Closure</title>
</head>

<body style="background-color: #212121; color: #fff;">
    <button id="orange">Orange</button>
    <button id="green">Green</button>
</body>
<script>
    document.getElementById("orange").onclick = function(){
        document.body.style.backgroundColor = `orange`
    }

    document.getElementById("green").onclick = function(){
        document.body.style.backgroundColor = `green`
    }
</script>
</html>
```
#