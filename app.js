const video1 = document.querySelector('#projectvid1');
const video2 = document.querySelector('#projectvid2');
const video3 = document.querySelector('#projectvid3');
const hoverSign = document.querySelector('.hover-sign');

// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');

const videoList = [video1,video2,video3];

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


menu.addEventListener("click", function(){
    sideBar.classList.add("open-sidebar")
})