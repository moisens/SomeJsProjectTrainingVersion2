const sidebarBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar')

sidebarBtn.addEventListener('click', function(){
   if(sidebar.classList.contains('show-sidebar')){
      sidebar.classList.remove('show-sidebar');
   }else{
      sidebar.classList.add('show-sidebar');
   }
   //console.log(sidebar.classList.contains('show-sidebar'))
});

closeBtn.addEventListener('click', function(){
   //sidebar.classList.remove('show-sidebar');
   //The faster way
   sidebar.classList.toggle('show-sidebar')
   //console.log(sidebar.classList.contains('show-sidebar'));
});