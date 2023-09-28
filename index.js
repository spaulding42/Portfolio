window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("nav-fill", window.scrollY > 0);
})

function shrink(e){
    var enlargedPic = document.getElementById("enlarged-pic")
    var bg = document.getElementById("black-overlay")
    bg.hidden = true
    enlargedPic.src = ""
    enlargedPic.hidden = true
}
function enlarge(e)
{
    console.log(e.src)
    var enlargedPic = document.getElementById("enlarged-pic")
    var bg = document.getElementById("black-overlay")
    bg.hidden = false
    enlargedPic.src = e.src
    enlargedPic.hidden = false

    // make the alt text show up on enlarged image as a description
    var picText = document.getElementById("enlarged-alt")
    picText.innerHTML = e.alt
}


function selfieIn(e)
{
    console.log(e.src)
    e.src = "Assets/Tahoe_Selfie.jpg";
}

function selfieOut(e)
{
    console.log("OUT")
    e.src = "Assets/Tahoe_Selfie-BnW.jpg";
}
