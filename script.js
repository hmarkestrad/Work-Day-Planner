var today = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let month = months[today.getMonth()];
var date = month+' '+today.getDate()+', '+today.getFullYear();

let displayTime = weekday[today.getDay()];
var time = today.toLocaleString('en-US', { hour: 'numeric', minute:	"numeric", hour12: true });

document.getElementById('currentDay').innerHTML = date+" "+displayTime+" "+time;