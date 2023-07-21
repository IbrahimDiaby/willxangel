var icon = document.getElementById("fa-bars");
var close = document.getElementById("fa-times");
var nav = document.getElementsByClassName("navbar")[0];

icon.addEventListener('click', function (){
    for(let i = 0; i < nav.getElementsByTagName('ul')[0].getElementsByClassName('link').length; i++){
        nav.getElementsByTagName('ul')[0].getElementsByClassName('link')[i].style.display = 'flex';
        nav.getElementsByTagName('ul')[0].getElementsByClassName('link')[i].style.flexDirection = 'column';
        nav.getElementsByTagName('ul')[0].getElementsByClassName('link')[i].style.width = '100%';
    }
    
    // for(let i = 0; i < nav.getElementsByTagName('ul')[0].getElementsByClassName('subtitle').length; i++){
    //     nav.getElementsByTagName('ul')[0].getElementsByClassName('subtitle')[i].style.margin = '0px -100px 0px 0px';
    // //     nav.getElementsByTagName('ul')[0].getElementsByClassName('subtitle')[i].style.margin = '0px';
    // //     nav.getElementsByTagName('ul')[0].getElementsByClassName('subtitle')[i].style.padding = '0px';
    // }

    nav.style.display = 'flex';
    nav.style.marginTop = '30px';
    icon.style.display = 'none';
    close.style.display = 'block';
    close.style.opacity = '0';

});

close.addEventListener('click', function (){
    close.style.display = 'none';
    nav.style.display = 'none';
    icon.style.display = 'block';
    icon.style.opacity = '0';
});