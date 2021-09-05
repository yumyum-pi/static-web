var navbar;
var navmenu;
var burger;
var navbtn;
var faq;
var ques;

function init() {
  navbar = document.getElementById("navbar");
  navmenu = document.getElementById("nav-menu");
  navbtn = document.getElementById("nav-btn");
}

function toggleFAQ(i) {
  ques[i].classList.toggle("active");
  ques[i].classList.toggle("inactive");
}

var navshow = true;

// show navigation bar using hamburger menu
function toggleNav() {
  if (navshow) {
    navbar.className = navbar.className.replace(" h-8", " h-128");
    navmenu.className = navmenu.className.replace(" opacity-0", " opacity-100");
  } else {
    navbar.className = navbar.className.replace(" h-128", " h-8");
    navmenu.className = navmenu.className.replace(" opacity-100", " opacity-0");
  }
  navbtn.classList.toggle("close");
  navshow = !navshow;
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    if (!navshow) {
      toggleNav();
    }
  }
};

/**
 * Animate elements when they appeat in the viewport
 * @param { IntersectionObserverEntry[] } changes: IntersectionObserver changes
 */
const animonCallback = function (changes) {
  changes.forEach((change) => {
    let target = change.target;
    let delay = parseInt(target.getAttribute("data-delay")) || 0;
    let duration = target.getAttribute("data-duration") || null;
    if (change.intersectionRatio > 0) {
      setTimeout(() => {
        if (duration) {
          target.style.transitionDuration = `${duration}, ${duration}`;
        }
        target.classList.add("is-visible");
      }, delay);
    } else {
      target.classList.remove("is-visible");
      target.style.removeProperty("transition-duration");
    }
  });
};
let options = {
  root: null, // relative to document viewport
  rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
  threshold: 0.2, // visible amount of item shown in relation to root
};
/**
 * Create a new IntersectionObserver object
 * @param { Function } animonCallback: function to be executed
 */
const observer = new IntersectionObserver(animonCallback, options);

/**
 * Animon's initialisation
 * @param { String } selector: items that should be animated
 */
const animon = (selector = ".animonItem") => {
  // Build our nodes list
  const nodes = document.querySelectorAll(selector);

  // If IntersectionObserver is supported
  if ("IntersectionObserver" in window) {
    // Observe each node
    nodes.forEach((node) => {
      observer.observe(node);
    });
  } else {
    // Else make every node visible
    nodes.forEach((node) => node.classList.add("is-visible"));
  }
};

window.addEventListener("load", function () {
  init();
  animon();
});
