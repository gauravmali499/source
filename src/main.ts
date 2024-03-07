import data from '../data.json';
function register(){
    let flag: number = 0;
    let name: string = document.getElementById("name").value;
    let email:any = document.getElementById("email").value;
    let pass:any = document.getElementById("pass").value;
    let rpass: any = document.getElementById("rpass").value;

    if(name == ""){
        document.getElementById("nameError").innerText = "*Enter Your Name";        
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if(email == ""){
        document.getElementById("emailError").innerText = "*Enter Valid Email-id";
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if ((pass == "") || (pass.length < 5)) {
        document.getElementById("passError").innerText = "*Enter Password with Minimum length of 5";
    } else {
        document.getElementById("passError").innerText = "";
    }

    if (rpass == "") {
        document.getElementById("rpassError").innerText = "*Enter Your Repeat Password";
        
    } else {
        document.getElementById("rpassError").innerText = "";
    }

    // both password are not matching
    if (!(pass === rpass)) {
        document.getElementById("passwordError").innerText = "*Both Passwords are not matching";
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    if(!(name == "") && !(email == "") && !((pass == "") || (pass.length < 5)) && !(rpass == "") && (pass === rpass)){
        flag = 1;
    }
    
    if (flag == 1) {
        localStorage.setItem(email, pass);
        location.replace("signIn.html");   
    }
}

function signin(){
    location.replace("signIn.html");
}

function signup(){
    location.replace("index.html")
}

function signIn(){
    let email:any = document.getElementById("email").value;
    let pass:any = document.getElementById("pass").value;
    if(email == ""){
        document.getElementById("emailError").innerText = "*Enter Valid Email-id";
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if ((pass == "") || (pass.length < 5)) {
        document.getElementById("passError").innerText = "*Enter Valid Password";
    } else {
        document.getElementById("passError").innerText = "";
    }
}

document.getElementById("one").addEventListener("click",()=>{
    console.log(data);  
})


