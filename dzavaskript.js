let logo = document.getElementById("logo");
logo.style.height = "110px";

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    logo.style.height = "80px";
    } 
    else {
    logo.style.height = "110px";
    }
}

let header = document.getElementById("t");
header.style.opacity = 0.75; //priehladnost navbaru 75%

//znizenie priehladnosti na 0% pri scrolle
window.addEventListener("scroll", function () {
    let header = document.getElementById("t");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    header.style.opacity = 0.75 + scrollTop / 900;
});


//Zobraznenie elementov
function reveal() {
    var reveals = document.querySelectorAll(".zobrazenie");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 90;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);