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

 menuButton.forEach(ele=>{
    ele.addEventListener('click', ()=>{
        count++;
        dis.style.visibility = "hidden";
        dis.style.marginTop = "-130%";
    })
 })