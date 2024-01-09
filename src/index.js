let root = document.querySelector('.toggle');
let dis = document.querySelector('nav > div:last-child');
let count = 0;

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