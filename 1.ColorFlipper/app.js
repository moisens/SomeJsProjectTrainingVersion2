const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const color = document.querySelector('.color');

btn.addEventListener('click', changeBckColor);
//Change the colour of the background + return hexademal of the colour
function changeBckColor(){
    let randomColour = getRandomColor();
    body.style.backgroundColor = colors[randomColour];
    color.innerHTML = colors[randomColour];
}

//Get runandom Color
function getRandomColor(){
   return Math.floor(Math.random() * colors.length);

}