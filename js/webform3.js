function checkPass()
{
   var password = document.getElementById('password2');
    var confirm  = document.getElementById('confirm2');   
    var message = document.getElementById('confirm-message2');   
    var good_color = "#66cc66";
    var bad_color  = "#ff6666";
   
    if(password.value == confirm.value){        
        confirm.style.backgroundColor = good_color;
        message.style.color           = good_color;
        message.innerHTML             ="Passwords Match!";
    }
    else{
        confirm.style.backgroundColor = bad_color;
        message.style.color           = bad_color;
        message.innerHTML             = "Passwords Do Not Match!";
    }
}  

function dataform()
{
    var Firstname = document.getElementById("Firstname");
	var Lastname = document.getElementById("Lastname");
	var email =document.getElementById("email");
	var phone = document.getElementById("phone");
    var bool = email.value.indexOf("@");

	if(Firstname.value.length < 2) {
        document.getElementById("error-Firstname").innerHTML = "Not correct";
    }
    if(Firstname.value.length >= 2) {
        document.getElementById("error-Firstname").innerHTML = "correct";
    }
    if(Firstname.value.length >32 ) {
        document.getElementById("error-Firstname").innerHTML = "Not correct";
    }

    if(Lastname.value.length < 2) {
        document.getElementById("error-Lastname").innerHTML = "Not correct";
    }
    if(Lastname.value.length >= 2) {
        document.getElementById("error-Lastname").innerHTML = "correct";
    }
    if(Lastname.value.length > 32) {
        document.getElementById("error-Lastname").innerHTML = "Not correct";
    }

    if(email.value.length<2) {
        document.getElementById("error-email").innerHTML = " Not correct";
    }

    if(email.value.length>=2 && bool>0 ) {
        document.getElementById("error-email").innerHTML = " correct";
    }

   
    if(phone.value.length ==10) {
        document.getElementById("error-phone").innerHTML = " correct";      
    }
    else{
        document.getElementById("error-phone").innerHTML = "Not correct";      
    }
            
}

function myFunction() {
    var x = document.getElementById("tint");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }