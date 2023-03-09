function validateEmail(){
    const email = document.getElementById('email-input');

    //Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(email.value)){
        alert("Valid email address");
        email.value = ""
    }
    else{
        alert("Invalid email id please enter valid email id");
        email.value=""
    }
}