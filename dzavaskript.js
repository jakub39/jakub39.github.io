//Zmensenie navbaru pri scrolle
let logo = document.getElementById("logo");
logo.style.height = "90px";

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
    logo.style.height = "75px";
    } 
    else {
    logo.style.height = "90px";
    }
}

//Zobraznenie elementov animacie
//Zdola hore
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

//Zlava do prava
function reveal2() {
  var reveals = document.querySelectorAll(".zobrazenie2");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var triggerPoint = windowHeight * 0.8; // Adjust the trigger point as needed

    if (elementTop < triggerPoint) {
      reveals[i].classList.add("active2");
    } else {
      reveals[i].classList.remove("active2");
    }
  }
}
window.addEventListener("scroll", reveal2);

//Zprava do lava
function reveal3() {
  var reveals = document.querySelectorAll(".zobrazenie3");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var triggerPoint = windowHeight * 0.8; // Adjust the trigger point as needed

    if (elementTop < triggerPoint) {
      reveals[i].classList.add("active3");
    } else {
      reveals[i].classList.remove("active3");
    }
  }
}
window.addEventListener("scroll", reveal3);

//Navbar na carouseli
let header = document.getElementById("t");
header.style.opacity = 0.8; //priehladnost navbaru 20%

//znizenie priehladnosti na 0% pri scrolle
window.addEventListener("scroll", function () {
    let header = document.getElementById("t");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    header.style.opacity = 0.8 + scrollTop / 900;
});