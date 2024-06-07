const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

function UpdateTime(){
    const currentyear=new Date().getFullYear();
    console.log(currentyear);
    const newyear=new Date(`January 1, ${currentyear + 1} 00:00:00`);
    console.log(newyear);
    const currentDate=new Date();
    console.log(currentDate);
    const diff=newyear-currentDate;
    console.log(diff);
    const d=Math.floor(diff/1000/60/60/24);
    console.log(d);
    const h=Math.floor((diff/1000/60/60)%24);
    console.log(h);
    const m=Math.floor((diff/1000/60)%60);
    console.log(m);
    const s=Math.floor((diff/1000)%60);
    console.log(s);
    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;
}
setInterval(UpdateTime,1000);