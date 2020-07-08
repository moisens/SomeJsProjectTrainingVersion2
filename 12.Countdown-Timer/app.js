const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
 ];
 const weekdays = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
 ];

 const giveaway = document.querySelector('.giveaway');
 const deadline = document.querySelector('.deadline');
 const items = document.querySelectorAll('.deadline-format h4');
//Make sure to allways have an updated time for the countdown + 10 days
 let tempDate = new Date();
 let tempYear = tempDate.getFullYear();
 let tempMonth = tempDate.getMonth();
 let tempDay = tempDate.getHours();
 
const futureDate = new Date(tempYear,tempMonth,tempDay + 10, 23,59)

//let futureDate = new Date(2020,7,31,23,59,59);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();


let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} at ${hours}:${minutes} pm`;

//Future time in milliseconds
const futeureTime = futureDate.getTime();
//console.log(futeureTime);

function getRemainingTime(){
   const today = new Date().getTime();
   //Remainn time
   const t = futeureTime - today
   //console.log(t);
   //1s = 1000ms
   //1min 60s
   //1hrs = 60min
   //1d = 24hrs

   //Values in milliseconds
   const oneDay = 24 * 60 * 60 * 1000;
   const oneHour = 60 * 60 * 1000;
   const oneMinute = 60 * 1000;

   //Calculate all the values
   let days = t / oneDay
   days = Math.floor(days)
   //console.log(days);

   let hours = Math.floor((t % oneDay) / oneHour);
   //console.log(hours);

   let minutes = Math.floor((t % oneHour) / oneMinute);
   //console.log(minutes);

   let secondes = Math.floor((t % oneMinute) / 1000);
   //console.log(secondes)

   //Set values arrays
   const values = [days, hours, minutes, secondes];
   
   function format(item){
      if(item < 10){
         return item = `0${item}`;
      }
      return item
   }
   
   items.forEach((item, index) => {
      item.innerHTML = format(values[index])
   });
   //Clear Interval
   if(t < 0){
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">Sorry this giveaway has expired</h4>`; 
      
   }

}
//Countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();