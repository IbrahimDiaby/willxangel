var popUp = document.getElementsByClassName("pop-up")[0];

var imgs = document.getElementById("diaporama").getElementsByTagName("img");

var close = document.getElementById("closePopUp");

var Height = 0;

close.addEventListener("click", function (){
    popUp.style.display = "none";
}, false);

for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener("click", function (){
        popUp.style.display = "block";
        popUp.style.backgroundImage = `url(${imgs[i].src})`;
        popUp.style.backgroundSize = 'contain';
        popUp.style.backgroundPosition= 'center';
        popUp.style.backgroundRepeat = 'no-repeat';
        popUp.style.height = '80%';
        popUp.style.width = '80%';
        popUp.style.margin = `${Height+50}px 10% 0px 10%`;
    }, false);
}

window.addEventListener('scroll', function (){
    Height = window.scrollY;
});