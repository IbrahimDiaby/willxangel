var video = document.getElementById("video");
var iframe = document.getElementById("video").getElementsByTagName("iframe")[0];

// var video_min = document.getElementById("movies-lst");
// var iframes_min = document.getElementById("movies-lst").getElementsByTagName("iframe");

var prev = document.getElementById('prev');
var next = document.getElementById('next');

var index = 0;

iframe.style.width = '100%';
iframe.style.height = '100%';

// for(let i = 0; i < iframes_min.length; i++){
//     iframes_min[i].addEventListener("mouseover", function (){
//         iframe.src = `${iframes_min[i].src}`;
//     }, false);
// }

var movies = [
    'https://www.youtube.com/embed/5jw756SIkfw',
    'https://www.youtube.com/embed/v-Rlqna8zaQ',
    'https://www.youtube.com/embed/Uc0990e4ujs', 
    'https://www.youtube.com/embed/DA4Zn1iwTf8',
    'https://www.youtube.com/embed/uHonn7P8maM'
];

function changeMovie(i){
    if(i === movies.length){
        i = 0;
        iframe.src = `${movies[i]}`;
        index = i;
    }
    else if(index < 0){
        i = movies.length-1;
        iframe.src = `${movies[i]}`;
        index = i;
    }
    
    else{
        iframe.src = `${movies[i]}`;
    }
    
}

function nextMovie(){
    index+=1;
    changeMovie(index);
    console.log(index)
}

function previousMovie(){
    index-=1;
    changeMovie(index);
    console.log(index)
}

// setInterval(nextMovie, 3000);

prev.addEventListener('click', previousMovie);
next.addEventListener('click', nextMovie);