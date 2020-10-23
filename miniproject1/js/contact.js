var name;
$(document).ready(function(){
    $('#submit').click(function(){
         name= $('#cname').val();
        console.log(name);
        sessionStorage.setItem("name", name);
        
        window.location.href = "thanks.html";


    })
})