function showError(errorElement,errorsmessage){
    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errormessage;
    }
    var username = document.forms['form']['useraname'];
var password = document.forms['form']['password'];

var user_error = document.getElementById('user_error');
var pass_error = document.getElementById('pass_error');

useraname.addEventListener('textinput',username_verify);
password.addEventListener('textinput',password_verify);


function validation()
    if(username.value.length<9){
        username.style.border = "1px solid red";
        user_error.style.display = "block";
        return false;
    }
    if(password.value.length<6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        return false;
    }

    function user_verify(){
        if(username.value.length>=8){
            username.style.border = "1px solid silver";
            user_error.style.display = "none";
            return true;
        }
    }
    function Toggle() {
        var temp = document.getElementById("typepass");
        if (temp.type === "password") {
            temp.type = "text";
        }
        else {
            temp.type = "password";
        }
    }
