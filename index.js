window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("nav-fill", window.scrollY > 0);
})

window.addEventListener("mousedown", function(e){
    console.log(this);
    var clicked = document.querySelector(this.src);
})