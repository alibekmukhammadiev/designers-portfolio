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

// particles js animation
particlesJS.load("particles-js", "particles.json", function () {});

// scrollreveal js in services section
let slideUp1 = {
  distance: "50%",
  origin: "left",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
let slideUp2 = {
  distance: "20%",
  origin: "bottom",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
let slideUp3 = {
  distance: "50%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
ScrollReveal().reveal(".services__data_1", slideUp1);
ScrollReveal().reveal(".services__data_2", slideUp2);
ScrollReveal().reveal(".services__data_3", slideUp3);

// scrollreveal js in about section

let sectionTitle = {
  distance: "60%",
  origin: "top",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 100,
  easing: "ease-in-out",
};
let aboutDesc = {
  opacity: 0.4,
  reset: true,
  duration: 850,
  delay: 100,
  easing: "ease-in-out",
  scale: 1.5
};
let aboutNum1 = {
  distance: "60%",
  origin: "left",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 150,
  easing: "ease-in-out",
};
let aboutNum2 = {
  distance: "60%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 150,
  easing: "ease-in-out",
};
ScrollReveal().reveal(".section-title", sectionTitle);
ScrollReveal().reveal(".about__description", aboutDesc);
ScrollReveal().reveal(".about__num_1", aboutNum1);
ScrollReveal().reveal(".about__num_2", aboutNum2);

// scrollreveal js in qualification section
let firstQual = {
  distance: "50%",
  origin: "left",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
let secondQual = {
  distance: "50%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
ScrollReveal().reveal(".qualification__content_1", firstQual);
ScrollReveal().reveal(".qualification__content_2", secondQual);

// scrollreveal js in qualification section
let contactBox1 = {
  distance: "50%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 150,
  easing: "ease-in-out",
};
let contactBox2 = {
  distance: "55%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 250,
  easing: "ease-in-out",
};
let contactBox3 = {
  distance: "60%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 300,
  easing: "ease-in-out",
};
let contactBox4 = {
  distance: "65%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 350,
  easing: "ease-in-out",
};
ScrollReveal().reveal(".contact__box_1", contactBox1);
ScrollReveal().reveal(".contact__box_2", contactBox2);
ScrollReveal().reveal(".contact__box_3", contactBox3);
ScrollReveal().reveal(".contact__box_4", contactBox4);

// scrollreveal js in qualification section
let contactInput1 = {
  distance: "60%",
  origin: "left",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
let contactInput2 = {
  distance: "60%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
let contactInput3 = {
  distance: "60%",
  origin: "left",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
let contactInput4 = {
  distance: "60%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
let contactInput5 = {
  distance: "35%",
  origin: "left",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
let contactBtn = {
  distance: "60%",
  origin: "bottom",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
ScrollReveal().reveal(".contact__input_1", contactInput1);
ScrollReveal().reveal(".contact__input_2", contactInput2);
ScrollReveal().reveal(".contact__input_3", contactInput3);
ScrollReveal().reveal(".contact__input_4", contactInput4);
ScrollReveal().reveal(".contact__input_5", contactInput5);
ScrollReveal().reveal(".contact__button", contactBtn);

// scrollreveal js in portfolio section
let allPortfolioContent = document.querySelectorAll(".portfolio__content");
let portfolioContent = {
  distance: "50%",
  origin: "bottom",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
};
allPortfolioContent.forEach((e) => {
  portfolioContent.delay += 50;
  ScrollReveal().reveal(e, portfolioContent);
});
