// SHOW MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// CHANGE BACKGROUND HEADER
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL TOP
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

// MIXITUP FILTER PORTFOLIO
const mixer = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__content",
  },
  animation: {
    duration: 300,
  },
});

// LINK ACTIVE PORTFOLIO
const linkPortfolio = document.querySelectorAll(".portfolio__item");

function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
    this.classList.add("active-portfolio");
  }
}
linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));

// SWIPER CAROUSEL
const swiper = new Swiper(".testimonial__container", {
  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//   GSAP ANIMATION
gsap.from(".home__img", { opacity: 0, duration: 2, delay: 0.5, x: 60 });
gsap.from(".home__data", { opacity: 0, duration: 2, delay: 0.8, y: 25 });
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".home__social-icon", {
  opacity: 0,
  duration: 2,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

// Form submit
TEMPLATE_ID = "template_vnk0jbb";
SERVICE_ID = "service_kpzvjx8";
PUBLIC_KEY = "o27GH_pTFYPacIXp-";

emailjs.init(PUBLIC_KEY);

const mainForm = document.querySelector(".contact__form");

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the form data
  const name = mainForm.elements["name"].value;
  const email = mainForm.elements["email"].value;
  const message = mainForm.elements["message"].value;
  const phone = mainForm.elements["phone"].value;
  const project = mainForm.elements["project"].value;

  // Send the email
  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, {
      to_name: "Amirbek",
      from_name: name,
      from_email: email,
      phone_number: phone,
      project_name: project,
      message_html: message,
    })
    .then(
      function () {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Failed to send message!");
      }
    );
  mainForm.reset();
});

// Comments with Firebase RealTime Database

// Post
const commentsForm = document.querySelector(".testimonial__form");
const testimonialSection = document.querySelector(".testimonial")

commentsForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = commentsForm.elements["name"].value;
  const message = commentsForm.elements["message"].value;
  const rating = commentsForm.elements["rating"].value;

  const urlPost = "https://comments-b3dce-default-rtdb.firebaseio.com/.json";

  const data = {
    name: name,
    text: message,
    rating: rating,
  };

  fetch(urlPost, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  commentsForm.reset();
  location.reload();
  // back to testimonial section
  setTimeout(() => {
    testimonialSection.scrollIntoView({ behavior: 'smooth' });
  }, 500);
});

// Fetch
function fetchData() {
  const urlFetch = "https://comments-b3dce-default-rtdb.firebaseio.com/.json";
  const parentSwiper = document.querySelectorAll(".swiper-wrapper")[0];

  fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (const [key, value] of Object.entries(data)) {
        const comments = `
      <div class="testimonial__content swiper-slide">
      <h3 class="testimonial__title">${value.name}</h3>
      <p class="testimonial__description">
        ${value.text}
      </p>
      <p class="testimonial__star">${value.rating}/10</p>
      </div>`;

        parentSwiper.innerHTML += comments;
      }
    })
    .catch((error) => console.error(error));
}

fetchData()
