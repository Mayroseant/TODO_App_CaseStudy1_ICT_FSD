var username = document.getElementById("formGroupExampleInput");
var pwd = document.getElementById("formGroupExampleInput2");
var btn = document.getElementById("btn1");

// Vaildate if username is 'admin'
function valid_username(){
    if(username.value == "admin"){
        username.style.border= "3px solid green";
        p1.innerHTML = "Valid!";
        p1.style.color = "green";
    }
    else{
        username.style.border= "3px solid red";
        p1.innerHTML = "Invalid!";
        p1.style.color = "red";  
    }
}

// Validate if password is '12345'
function valid_pwd(){
    if(pwd.value == "12345"){
        pwd.style.border= "3px solid green";
        p2.innerHTML = "Valid!";
        p2.style.color = "green";
    }
    else{
        pwd.style.border= "3px solid red";
        p2.innerHTML = "Invalid!";
        p2.style.color = "red";  
    }
}

// Callback Function used to redirect to index.html webpage (main page) only when the credientials are coreect
btn.addEventListener("click", function(){
    if(username.value == "admin" && pwd.value == "12345"){
        window.location.href = "home.html";
    }
    else if((username.value == "" && pwd.value == "")){
        alert("Please enter username & password!");
    }
    else if((username.value == "admin" && pwd.value == "")){
        alert("Please enter password!");
    }else if((username.value == "" && pwd.value == "12345")){
        alert("Please enter username!");
    }
    else{
        alert("Wrong Credientials!");
    }
})