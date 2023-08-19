
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


setInterval(

function(){

     a =new Date();
 let date =a.toLocaleDateString(undefined,options);
let  day =a.getDay()

 let time=a.getHours()+": "+a.getMinutes()+": "+a.getSeconds()+"sec ";



document.getElementById('times').innerText=time + date;
 

},1000)