
function clearError(){
    var error=document.getElementsByClassName("formError");
    for(let x of error){
        x.innerHTML="";
    }
}


// Contact Form Validation
function validateForm(){
    var returnval=true;
    clearError();
    var inputName=document.getElementById("name").value;
    var inputMail=document.getElementById("email").value;

    var pattern=/^[a-zA-Z\s]*$/;
    if(pattern.test(inputName)== false){
        document.getElementsByClassName("formError")[0].innerHTML="*Invalid Name";
        returnval=false;
    }

    var pattern2=/[a-zA-Z0-9_\-\.]+[@][a-zA-Z0-9]+[\.][a-zA-Z]{2,}/;
    if(pattern2.test(inputMail) == false){
        document.getElementsByClassName("formError")[1].innerHTML="*Invalid email address";
       returnval=false;
    }
    
    return returnval;
}

// Reset Form
function resetForm(){
    clearError();
}