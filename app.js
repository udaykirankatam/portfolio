const video1 = document.querySelector('#projectvid1');
const video2 = document.querySelector('#projectvid2');
const hoverSign = document.querySelector('.hover-sign');

// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

// navbar buttons
const linkedinbtn = document.querySelector('#linkedin-btn');
const github = document.querySelector('#github-btn');
const instabtn = document.querySelector('#insta-btn');

//project links
const portfoliobtn = document.querySelector('#portfolio-proj-btn');
const instaclonebtn = document.querySelector('#insta-clone-btn');

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



linkedinbtn.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'https://www.linkedin.com/in/uday-kiran-reddy-katam/';
})
github.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'https://github.com/udaykirankatam';
})
instabtn.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'https://www.instagram.com/uday_kiran_katam/';
})

portfoliobtn.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'https://udaykirankatam.github.io/portfolio/';
})
instaclonebtn.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'https://udaykirankatam.github.io/insta_clone/';

})

