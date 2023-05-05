let header = document.getElementById("t");
header.style.opacity = 0.75; //priehladnost navbaru 25%

//znizenie priehladnosti na 0% pri scrolle
window.addEventListener("scroll", function () {
    let header = document.getElementById("t");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    header.style.opacity = 0.75 + scrollTop  / 1100; 
});