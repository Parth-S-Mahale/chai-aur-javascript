# Events In Javascript :

<img src="NOTES/Screenshot 2024-09-10 122729.png" alt="Slide 1" class="center"/>

## HTML and Javascript :
``` HTML and Javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Events</title>
</head>

<body style="background-color: #212121; color: #fff;">
    <h2>Amazing image</h2>
    <div>
        <ul id="images">
            <li><img width="200px" id="photoshop"
                    src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt="photoshop"></li>
            <li><img width="200px" id="japan"
                    src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""></li>
            <li><img width="200px" id="river"
                    src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""></li>
            <li><img width="200px" id="owl"
                    src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""></li>
            <li><img width="200px" id="prayer"
                    src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""></li>
            <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
        </ul>
    </div>
    <script>

        // ---------------------------------Creating an Event In Javascript-----------------------------------
        document.getElementById('owl').onclick =(function(){
            alert("Owl clicked!")
        })

        /* 
            * attachEvent()
            * jQuery - on
        */ 

        /*  
            * type, timestamp, defaultPrevented
            * target, toElement, srcElement, currentTarget
            * clientX, clientY, screenX, screenY
            * altkey, ctrlkey, shiftkey, keyCode
        */ 
        
        // -----------------------Type of Event Propagation: Event Bubbling-----------------------------------
        document.getElementById('images').addEventListener('click', function(e){ 
            // alert("Owl clicked!")
            console.log("clicked inside the ul");
        }, false)

        
        document.getElementById('owl').addEventListener('click', function(e){
            // alert("Owl clicked!")
            console.log("Owl clicked");
            e.stopPropagation()
        }, false)

        // -----------------------Type of Event Propagation: Event Capturing-----------------------------------
        document.getElementById('images').addEventListener('click', function(e){ 
            // alert("Owl clicked!")
            console.log("clicked inside the ul");
        }, true)

        
        document.getElementById('owl').addEventListener('click', function(e){
            // alert("Owl clicked!")
            console.log("Owl clicked");
            e.stopPropagation()
        }, true)

        // -----------------------Stopping an Event Propagation In Javascript----------------------------------
        document.getElementById('google').addEventListener('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            console.log("google clicked!");
        }, false)

        // -----------------------Removing images using Event's Concept----------------------------------
        document.querySelector('#images').addEventListener('click', function(e){
            console.log(e.target.tagName);
            if(e.target.tagName === 'IMG'){
                console.log(e.target.id);
                let removeIt = e.target.parentNode
                removeIt.remove();
            }
            // removeIt.parentNode.removeChild(removeIt) // Handling Events Using Parent-Child Concept
        })
    </script>
</body>
</html>
```

## Types of Events In Javascript :

### Event Bubbling :
#
<img src="NOTES/Screenshot 2024-09-10 122736.png" alt="Slide 2" class="center"/>

### Event Capturing :
#
<img src="NOTES/Screenshot 2024-09-10 122742.png" alt="Slide 3" class="center"/>

### Stopping an Event In Javascript  :
#
<img src="NOTES/Screenshot 2024-09-10 122824.png" alt="Slide 4" class="center"/>

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}