const video1 = document.querySelector('#projectvid1');
const video2 = document.querySelector('#projectvid2');
// const video3 = document.querySelector('#projectvid3');
const hoverSign = document.querySelector('.hover-sign');

// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

// nav bar buttons
const insta = document.querySelector('#insta-btn');
const linkedin = document.querySelector('#linkedin-btn');
const github = document.querySelector('#github-btn');

//Project buttons
const portfolio = document.querySelector('#portfolio-proj-btn');
const instaclone = document.querySelector('#insta-clone-btn')


const videoList = [video1,video2];

videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout', function(){
        video.pause()
        hoverSign.classList.remove("active")
    })
})


menu.addEventListener('click', function(){
    sideBar.classList.remove('close-sidebar');
    sideBar.classList.add('open-sidebar');
})

close.addEventListener('click', function(){
    sideBar.classList.remove('open-sidebar');
    sideBar.classList.add('close-sidebar');
})

linkedin.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'www.linkedin.com/in/uday-kiran-reddy-katam';
})
insta.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'https://www.instagram.com/uday_kiran_katam';
})
github.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'https://github.com/udaykirankatam';
})


portfolio.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'https://udaykirankatam.github.io/portfolio/';
})
instaclone.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'https://udaykirankatam.github.io/insta_clone/';
})