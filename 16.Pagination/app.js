import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const title = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
}

const init = async () => {
  const followers = await fetchFollowers();
  //displayFollowers(paginate(followers)[0]);//displayFollowers(followers)
  title.textContent = 'pagination';
  pages = paginate(followers);
  setupUI();
  
}

btnContainer.addEventListener('click', function(e){
  //Handle the fact that if the user click outside the btn, nothing happens!
  if (e.target.classList.contains('btn-container')) return;
  //When user clic on btn.contains(page-btn), index is reasign!
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
  }
  //update setupUI by calling it here
  setupUI();

  //Handle the click on next btn
  if (e.target.classList.contains('next-btn')) {
    //Increment the index
    index++;
    //prevent error if index > pages.length
    if (index > pages.length -1) {
      index = 0;
    }
  }

  //Handle the click on prev btn
  if (e.target.classList.contains('prev-btn')) {
    //decrement index
    index--;
    //prevent error if the index < page.length
    if (index < 0) {
      index = pages.length - 1;
    }
  }

})

window.addEventListener('load', init);


