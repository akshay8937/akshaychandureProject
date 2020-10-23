
document.addEventListener('DOMContentLoaded', function() {
      window.addEventListener('scroll', myFunctionForSticky);
      var navbar = document.getElementById("navtop");
      var sticky = navbar.offsetTop;
   
    function myFunctionForSticky() {
      
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
 
    function myFunctionForResponsive() {
      navbar.classList.toggle('responsive');
    }
  })

