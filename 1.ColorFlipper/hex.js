const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A', 'B','C','D', 'E', 'F'];


const btn =document.querySelector('#btn');
const body = document.querySelector('body');
const hexa = document.querySelector('.color');

btn.addEventListener('click', changeBckColorAndHexa);

function changeBckColorAndHexa(){
   let hashHex = '#';
   for(let i=0; i<6; i++){
      hashHex += hexNumbers[getRandomColor()];
      //console.log(hashHex);
   }

   hexa.innerHTML = hashHex;
   body.style.backgroundColor = hashHex;

}

function getRandomColor(){
   return Math.floor(Math.random() * hexNumbers.length);
}






