$(document).ready(function() {
    // Add animations or interactivity here using jQuery
    $('.project').click(function() {
        $(this).toggleClass('project-expanded');
    });
});


function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
  

// let slideIndex = 1;
//   showSlides(slideIndex);

//   function moveCarousel(n) {
//     showSlides(slideIndex += n);
//   }

//   function showSlides(n) {
//     let i;
//     const slides = document.getElementsByClassName("details-container");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
//   }


// let slideIndex = 0;
// showSlides();

// function moveSlide(n) {
//   slideIndex += n;
//   showSlides();
// }

// function showSlides() {
//   const slides = document.querySelectorAll('.details-container');
//   if (slideIndex >= slides.length) { slideIndex = 0 }
//   if (slideIndex < 0) { slideIndex = slides.length - 1 }
//   slides.forEach(slide => {
//     slide.style.display = 'none';
//   });
//   slides[slideIndex].style.display = 'block';
// }