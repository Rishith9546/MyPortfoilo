let  percentage=60;
let increasing=true;

setInterval(()=>{
    document.body.style.background=`radial-gradient(circle at center, #0F172A, #020617 ${percentage}%)`;
    if(increasing){
        percentage+=1;
        if(percentage >= 80){
        increasing=false;
        }
    }
    else {
    percentage-=1;
    if(percentage<=60){
        increasing = true;
    }
    }
},200);