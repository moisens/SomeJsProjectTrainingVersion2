  // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
   // linkContainer.classList.toggle('show-links');
   const containerHeight = linkContainer.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height;
   if(containerHeight === 0){
      linkContainer.style.height = `${linksHeight}px` 
   }else{
      linkContainer.style.height = 0;
   }
});


// ********** fixed navbar ************
const navbar = document.querySelector('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
   const scrollHeight = window.pageYOffset;
   const navHeight = navbar.getBoundingClientRect().height;
   

   if(scrollHeight > navHeight){
      navbar.classList.add('fixed-nav');
   }else{
      navbar.classList.remove('fixed-nav');
   }

   //Show the link button that return to Home
   if(scrollHeight > 699){
      topLink.classList.add('show-link');
   }else{
      topLink.classList.remove('show-link');
   }

});


// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((scrollLink) =>{
   scrollLink.addEventListener('click', function(e){
      //Prevent Default
      e.preventDefault();
      //Navigate to specific spot
      const id = e.currentTarget.getAttribute('href').slice(1);
      const element = document.getElementById(id);
      //Calculate the heights
      const navHeight = navbar.getBoundingClientRect().height;
      const containerHeight = linkContainer.getBoundingClientRect().height;
      const fixedNav = navbar.classList.contains('fixed-nav');
      let position = element.offsetTop - navHeight;
      //When fixednav hasn't the class fixed-nav
      if(!fixedNav){
         position = position - navHeight;
      }
      //Checking the nav's height on small screen(hambourger menu)
      if(navHeight > 82){
         position = position + containerHeight;
      }

      window.scrollTo({
         left: 0,
         top: position,
      });
      //Close the navbar after clicking on a link
      linkContainer.style.height = 0;
   });
});