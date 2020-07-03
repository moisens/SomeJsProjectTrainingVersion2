let counter = 0;
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const value = document.querySelector('#value');


//Listen to the events
//increase.addEventListener('click', increaseCounter);
//decrease.addEventListener('click', decreaseCounter);
//reset.addEventListener('click', resetCounter);

// //Function that incease the number
// function increaseCounter(){
//    counter++;
//    value.innerHTML = counter;
//    if(value > '0'){
//       value.style.color = 'green';
//    }

// }

// //function that decrease the number
// function decreaseCounter(){
//    counter--;
//    value.innerHTML = counter
//    if(value < '0'){
//       value.style.color = 'yellow';
//    }
// }

// function resetCounter(){
//    counter = 0;
// }


const values = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach((btn) => {
   btn.addEventListener('click', function(e){
      //const styles =  e.currentTarget.classList
      const styles = e.target.classList;

      if(styles.contains('increase')){
         counter++;
         
      }else if(styles.contains('decrease')){
         counter--;

      }else{
         counter = 0;
            
      }
      value.innerHTML = counter;

      //color
      if(counter > 0){
         value.style.color = '#28a745';
      }
      if(counter < 0){
         value.style.color = '#dc3545';
      }
      if(counter === 0){
         value.style.color = '#007bff';
      }
            
   
   });
});