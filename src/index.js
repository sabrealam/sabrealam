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

// function typed(){
    // let typed = new Typed("#text", {
    //     Strings : ["Full Stack Web Developer","Problem Solver","DataBase With Python","DSA With Java And JavaScript"],
    //     typeSpeed : 100,
    //     backSpeed : 100,
    //     backDelay : 1000,
    //     loop : true
    // })
// }
// typed()