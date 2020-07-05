// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal(){
   if(modalOverlay.classList.contains('open-modal')){
      modalOverlay.classList.remove('open-modal');
   }
   else{
      modalOverlay.classList.add('open-modal')
   }

   console.log(modalOverlay.classList.contains('open-modal'))
}

function closeModal(){
   modalOverlay.classList.remove('open-modal')
}