//using selectors inside the element
 const questions = document.querySelectorAll('.question');
 questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function(){
       //Allow to close the previous open article
       questions.forEach((item) =>{
          if(item !== question){
             item.classList.remove('show-text');
          }
       });
       question.classList.toggle('show-text');
    });
 });



// traversing the dom

 //const btns = document.querySelectorAll('.question-btn');
 //btns.forEach((btn) => {
 //   btn.addEventListener('click', function(e){
 //      const question = e.currentTarget.parentElement.parentElement;
 //      
 //        if(question.classList.contains('show-text')){
 //           question.classList.remove('show-text');
 //        }else{
 //           question.classList.add('show-text');
 //        }
 //       
 //      //question.classList.toggle('show-text')
 //   });
 //});

 