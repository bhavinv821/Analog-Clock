const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let sPosition = (date.getSeconds()*6);
let mPosition = (date.getMinutes()*6 + 6*date.getSeconds()/60)%360;
let hPosition = date.getHours()*30 + 30*date.getMinutes()/60;


HOURHAND.style.transform = "rotate("+hPosition+"deg)";
MINUTEHAND.style.transform = "rotate("+mPosition+"deg)";
SECONDHAND.style.transform = "rotate("+sPosition+"deg)";

function clock(){

sPosition += 6;
mPosition += 6/60 ;
hPosition += 6/360;


HOURHAND.style.transform = "rotate("+hPosition+"deg)";
MINUTEHAND.style.transform = "rotate("+mPosition+"deg)";
SECONDHAND.style.transform = "rotate("+sPosition+"deg)";

}

setInterval(clock, 1000);