let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active');
}else{
    document.querySelector('#scroll-top').classList.remove('active');

}
}






// var btn = document.getElementById('top1');

// btn.onclick = function(){
//     window.scroll({
//         left:0,
//         top: 0,
//         behavior:'smooth'
//     });
// }
