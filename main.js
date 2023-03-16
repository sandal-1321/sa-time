let day=document.querySelector(".date")
let days=new Date();

 
 function dayy()
 {
 	let daayy=days.getDate();
 	let mon=days.getMonth() + 1;
 	let year=days.getFullYear();
    day.innerHTML=(`${daayy}/${mon}/${year}`)
}  
dayy()

let weekly=document.querySelector(".day")
let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"];

function weekl()
{
   let we=week[days.getDay()];
  weekly.innerHTML=(we)
}
weekl()






let timeout=document.querySelector(".timeout")
function clock() {
	var time=new Date();
	var hrs=time.getHours();
	var min=time.getMinutes();
	var sec=time.getSeconds();
	

	if(hrs>12)
	{
		hrs=hrs-12;
	}else if(hrs==0)
	{
		hrs=12;
	}
	hrs=hrs<10?"0"+hrs:hrs;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
   
    timeout.innerHTML=`${hrs} : ${min} : ${sec}`;
}
clock();
setInterval(clock,1000);














