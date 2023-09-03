///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

// SET CURRENT YEAR
const yearEl = document.querySelector(".Year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener('click', function() {
  headerEl.classList.toggle("nav-open");
})


// STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  console.log(ent)
  if(ent.isIntersecting == false){
    // document.querySelector('.header').classList.add('sticky');
    document.body.classList.add('sticky');
  }
  if(ent.isIntersecting == true){
    document.body.classList.remove('sticky');
  }
},

{
  // IN THE VIEWPORT
  root: null,
  threshold: 0,
  rootMargin: "-75px",
})

obs.observe(sectionHeroEl);
















