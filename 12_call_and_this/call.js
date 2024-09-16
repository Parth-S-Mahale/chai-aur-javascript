function setUsername(username){
    // complex DB calls
    this.username = username;
    console.log("Called!");
}

function creatUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password    
}

const user = new creatUser("chai", "chai@fb.com", "123");
console.log(user);
