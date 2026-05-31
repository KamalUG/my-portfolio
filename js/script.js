
// // FADE-IN ANIMATION

// const observer = new IntersectionObserver(
//   (entries) => {

//     entries.forEach((entry, i) => {

//       if (entry.isIntersecting) {

//         setTimeout(() => {
//           entry.target.classList.add('visible');
//         }, i * 70);

//       }

//     });

//   },

//   {
//     threshold: 0.08,
//   }
// );


// // OBSERVE ELEMENTS

// document
//   .querySelectorAll('.fade-in')
//   .forEach((el) => observer.observe(el));


// // CONTACT FORM

// const form = document.getElementById('contactForm');

// form.addEventListener('submit', handleSubmit);


// function handleSubmit(e) {

//   e.preventDefault();

//   const btn = document.getElementById('submitBtn');

//   btn.disabled = true;
//   btn.textContent = 'Sending...';


//   setTimeout(() => {

//     form.reset();

//     document.getElementById('formSuccess').style.display = 'block';

//     btn.textContent = 'Send Message';
//     btn.disabled = false;

//   }, 1000);
// }
