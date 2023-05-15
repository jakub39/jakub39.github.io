let header = document.getElementById("t");
header.style.opacity = 0.65; //priehladnost navbaru 25%

//znizenie priehladnosti na 0% pri scrolle
window.addEventListener("scroll", function () {
    let header = document.getElementById("t");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    header.style.opacity = 0.65 + scrollTop  / 800; 
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("logo").style.height = "100px";
    } else {
    document.getElementById("logo").style.height = "120px";
    }
}