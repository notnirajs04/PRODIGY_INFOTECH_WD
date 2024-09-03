var i = 0;
let second = 0;
let minute = 0;
let time=document.getElementById("time");
let timeLap = document.getElementById("timeLap");
var second1 = 0;
var minute1 = 0;
var timerId,timerIdLap;
var j = 0;
showTime = ()=>{
    if(timeLapResume){
        showTimeLap();
    }
    i++;
    if(i == 100){
        i = 0;
        second++;
    }
    if(second == 60){
        second = 0;
        minute++;
    }
    if(second <10 && minute < 10 && i>9){
        time.innerText = "0"+minute+":0"+second+"."+i;
    }
    else if(second >=10 && minute < 10 && i>9){
        time.innerText = "0"+minute+":"+second+"."+i;
    }
    else if(second<10 && minute>9 && i>9){
        time.innerText = minute+":0"+second+"."+i;
    }
    else if(second>9 && minute>9 && i>9){
        time.innerText = minute+":"+second+"."+i;
    }
    else if(second <10 && minute < 10 && i<10){
        time.innerText = "0"+minute+":0"+second+".0"+i;
    }
    else if(second >=10 && minute < 10 && i<10){
        time.innerText = "0"+minute+":"+second+".0"+i;
    }
    else if(second<10 && minute>9 && i<10){
        time.innerText = minute+":0"+second+".0"+i;
    }
    else if(second>9 && minute>9 && i<10){
        time.innerText = minute+":"+second+".0"+i;
    }
}
showTimeLap = ()=>{
    j++;
    if(j == 100){
        j = 0;
        second1++;
    }
    if(second1 == 60){
        second1 = 0;
        minute1++;
    }
    if(second1 <10 && minute1 < 10 && i>9){
        timeLap.innerText = "0"+minute1+":0"+second1+"."+i;
    }
    else if(second1 >=10 && minute1 < 10 && i>9){
        timeLap.innerText = "0"+minute1+":"+second1+"."+i;
    }
    else if(second1<10 && minute1>9 && i>9){
        timeLap.innerText = minute1+":0"+second1+"."+i;
    }
    else if(second1>9 && minute1>9 && i>9){
        timeLap.innerText = minute1+":"+second1+"."+i;
    }
    else if(second1 <10 && minute1 < 10 && i<10){
        timeLap.innerText = "0"+minute1+":0"+second1+".0"+i;
    }
    else if(second1 >=10 && minute1 < 10 && i<10){
        timeLap.innerText = "0"+minute1+":"+second1+".0"+i;
    }
    else if(second1<10 && minute1>9 && i<10){
        timeLap.innerText = minute1+":0"+second1+".0"+i;
    }
    else if(second1>9 && minute1>9 && i<10){
        timeLap.innerText = minute1+":"+second1+".0"+i;
    }
}
let resume = true;
let timeLapResume = false;
let btn1 = document.getElementsByClassName("btn1")[0];
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementsByClassName("btn3")[0];
let btn = document.getElementsByClassName("btn")[0];
let lapReading = document.getElementsByClassName("lapReading")[0];
let lapNumber = document.getElementsByClassName("lapNumber");
let lapTime = document.getElementsByClassName("lapTime");
let totalLap = document.getElementsByClassName("totalLap");
let lap_number=0,lap_time=0,total_lap;
let total_lap_object = {
    milisecond:0,
    second:0,
    minute:0,
};
btn2.addEventListener("click",()=>{
    if(resume){
        if(second == 0){
            btn1.classList.add("btn1-after");
            btn1.classList.remove("btn1-before")
            btn3.classList.add("btn3-after");
            btn3.classList.remove("btn3-before")
        }
        btn.classList.remove("bxs-right-arrow");
        btn.classList.add("bx-pause");
        btn1.disabled = true;
        btn3.disabled = false;
        timeLapResume = true;
        timerId = setInterval(showTime,showTimeLap,10);
        resume = false;
    }
    else{
        clearInterval(timerId);
        timeLapResume = false;
        btn.classList.remove("bx-pause");
        btn.classList.add("bxs-right-arrow");
        btn1.disabled = false;
        btn3.disabled = true;
        resume = true;
    }
})
btn1.addEventListener("click",()=>{
    clearInterval(timerId);
    timeLapResume = false;
    timeLap.style.opacity = "0";
    timeLap.innerText = "00:00.00";
    time.innerText = "00:00.00";
    btn1.classList.remove("btn1-after");
    btn1.classList.add("btn1-before")
    btn3.classList.remove("btn3-after");
    btn3.classList.add("btn3-before");
    Array.from(lapTime).forEach((element)=>{
        element.innerText = "";
    })
    Array.from(lapNumber).forEach((element)=>{
        element.innerText = "";
    })
    Array.from(totalLap).forEach((element)=>{
        element.innerText = "";
    })
   lapReading.style.opacity = "0";
    total_lap_object.second = second1 = second = 0;
    total_lap_object.minute = minute1 = minute = 0;
    total_lap_object.milisecond = j = i = 0;
    lap_number = 0;
    lap_time = total_lap = "";
})
btn3.addEventListener("click",()=>{
    j = 0;
    second1 = 0;
    minute1 = 0;
    timeLap.style.opacity = "1";
    timeLapResume = true;
   lapReading.style.opacity = "1";
    lap_number++;

    lap_time = "+"+timeLap.innerText;
    total_lap_object.milisecond = total_lap_object.milisecond+Number(lap_time.slice(7));
    total_lap_object.second = total_lap_object.second+Number(lap_time.slice(4,6));
    total_lap_object.minute = total_lap_object.minute+Number(lap_time.slice(1,3));
    if(total_lap_object.milisecond>=100){
        total_lap_object.milisecond=total_lap_object.milisecond-100;
        total_lap_object.second++;
    }
    if(total_lap_object.second>=60){
        total_lap_object.second=total_lap_object.second-60;
        total_lap_object.minute++;
    }
    total_lap = (total_lap_object.minute<10?"0":"")+total_lap_object.minute+":"+(total_lap_object.second<10?"0":"")+total_lap_object.second+"."+(total_lap_object.milisecond<10?"0":"")+total_lap_object.milisecond;
    console.log(total_lap);
    lapNumber[2].innerText =lapNumber[1].innerText;
    lapNumber[1].innerText =lapNumber[0].innerText;
    lapNumber[0].innerText =lap_number;

    lapTime[2].innerText =lapTime[1].innerText;
    lapTime[1].innerText =lapTime[0].innerText;
    lapTime[0].innerText =lap_time;
    
    totalLap[2].innerText =totalLap[1].innerText;
    totalLap[1].innerText =totalLap[0].innerText;
    totalLap[0].innerText = total_lap;


})