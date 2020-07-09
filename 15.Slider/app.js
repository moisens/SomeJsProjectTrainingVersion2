const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide, index) => {
   slide.style.left = `${index * 100}%`
});

let counter = 0;
nextBtn.addEventListener('click', function(){
   counter++;
   caroussel();
});

prevBtn.addEventListener('click', function(){
   counter--;
   caroussel();
});

function caroussel(){
   //Working with slides
   // if(counter === slides.length){
   //    counter = 0;
   // }

   // if(counter < 0){
   //    counter = slides.length - 1;
   // }

   //Working with btn
   // if(counter < slides.length - 1){
   //    nextBtn.style.display = 'block';
   // }else{
   //    nextBtn.style.display = 'none';
   // }

   // if(counter > 0){
   //    prevBtn.style.display = 'block';
   // }else{
   //    prevBtn.style.display = 'none';
   // }

   if(counter < slides.length - 1){
      nextBtn.disabled = false;
   }else{
      nextBtn.disabled = true;
   }

   if(counter > 0){
      prevBtn.disabled = false;
   }else{
      prevBtn.disabled = true;
   }
   


   slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`
   });
}

//Hide/Or disable the prev Btn once the application load
//prevBtn.style.display = 'none';
prevBtn.disabled = true;