const percentage=0;

setInterval(()=>{
  if(percentage==100){
    percentage=0;
  }else{
    document.body.style.background=`radial-gradient(circle at center, #0F172A, #020617 ${percentage}%)`;

  }
  percentage=percentage+10;
},1000);