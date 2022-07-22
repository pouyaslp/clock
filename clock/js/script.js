
let HourNeshan=document.querySelector("#hour");
let MinuteNeshan=document.querySelector("#minute");
let SecondNeshan=document.querySelector("#second");

 
function runClock(){
 
let date=new Date();
console.log(date)
let hr=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
console.log("Hour:"+hr+" minute"+min+" second:"+sec);

HourNeshan.style.transform="rotate("+(hr*360/12)+"deg)";
 
MinuteNeshan.style.transform="rotate("+(min*360/60)+"deg)";
 
SecondNeshan.style.transform="rotate("+(sec*360/60)+"deg)";
}
let interval=setInterval(runClock,1000)
 
function showTime()
{
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let section="AM";
 
    if(h==0)
    {
        h=12;
    }
    if(h>12){
        h=h-12;
        section="PM";
    }

    let time=h+":"+m+":"+s+" "+section;
    document.getElementById("ClockDisplay").innerText=time;
}
showTime();
setInterval(showTime,1000);
 
document.getElementById("MyName").innerHTML="By Pouya Salehipour "
 
document.getElementById("WatchName").innerHTML="HAMAN"