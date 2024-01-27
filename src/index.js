let root = document.querySelector('.toggle');
let dis = document.querySelector('nav > div:last-child');
let menuButton = document.querySelectorAll('nav > div:last-child  > ul > li ');
var count = 0;

root.addEventListener('click',()=>{
    count++;
    if(count%2 ==1){ 
     dis.style.visibility = "visible";
     dis.style.marginTop = "0%";
     
    }else{ 
        dis.style.visibility = "hidden";
        dis.style.marginTop = "-130%";
         
    }
})
let div = document.querySelector('#scrollnav');
window.addEventListener('scroll',()=>{
    let {scrollTop, clientHeight,scrollHeight} = document.documentElement;
    let percentScroll = (scrollTop/(scrollHeight-clientHeight)*100);
    div.style.width = `${percentScroll}%`; 
})

 
let main = document.querySelector('.projectslider ');


main.addEventListener('scroll',()=>{ 

     
})