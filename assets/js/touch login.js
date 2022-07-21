const { text } = require("stream/consumers");

function validation (){
    var form =document.getElementById('formData')
    var email=document.getElementById('studentem')
    var pass=document.getElementById('studentpass')
    var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)){
        form.classList.add("valid");
        text.innerHtml="please enter valid email"
        

    }else{
        form.classList.remove("valid")
        

        
    }

}