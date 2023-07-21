// var Url = window.location.href;
// var CurrentUrl = Url.slice(0, Url.lastIndexOf('/')+1);

// // // var ImgUrl = decodeURI(CurrentUrl + 'images/');
// // var ImgUrl = CurrentUrl + 'images/';

// // // function changeUrl(){
// // //     window.location.href= ImgUrl;
// // // }

// // // setTimeout(changeUrl, 2000);

// // console.log(ImgUrl);

// var data = document.getElementById('category').getElementsByTagName('span');

// var codeName = [];

// var Imgs = [
//     'https://www.youtube.com/embed/5jw756SIkfw',
//     'https://www.youtube.com/embed/9XeHERlfXPI',
//     'https://www.youtube.com/embed/v-Rlqna8zaQ',
//     'https://www.youtube.com/embed/RVynNYn7u-E'
// ];

// function changeImg(i){
//     if(i === Imgs.length){
//         i = 0;
//         iframe.src = `${Imgs[i]}`;
//         index = i;
//     }
//     else if(index < 0){
//         i = Imgs.length-1;
//         iframe.src = `${Imgs[i]}`;
//         index = i;
//     }
    
//     else{
//         iframe.src = `${Imgs[i]}`;
//     }
    
// }

// function nextImg(){
//     index+=1;
//     changeImg(index);
//     console.log(index)
// }

// function previousImg(){
//     index-=1;
//     changeImg(index);
//     console.log(index)
// }

// // setInterval(nextImg, 3000);

// // prev.addEventListener('click', previousImg);
// // next.addEventListener('click', nextImg);

// // for(let i = 0; i < data.length; i++){
// //     codeName.push(data[i].dataset.name);
// // }

// // for(let i = 0; i < data.length; i++){
// //     data[i].addEventListener('click', function (){
// //         setTimeout(window.location = `${CurrentUrl}/images/${data[i].dataset.name}/`, 1000);
// //     });
// // }

// console.log(codeName);