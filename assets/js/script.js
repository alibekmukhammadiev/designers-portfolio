//////////////////////////////////

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

/////////////////////////////////////

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

///////////////////////////////////////

// FORM SUBMIT
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
        let notyf = new Notyf({
          duration: 3500,
          position: {
            x: "center",
            y: "top",
          },
        });
        notyf.success({
          message: "Сообщение успешно отправлено!",
          dismissible: true,
        });
      },
      function (error) {
        let notyf = new Notyf({
          duration: 3500,
          position: {
            x: "center",
            y: "top",
          },
        });
        notyf.error({
          message: "Не удалось отправить сообщение!",
          dismissible: true,
        });
      }
    );
  mainForm.reset();
});

//////////////////////////////////////////////

// PARTICLES JS ANIMATION
particlesJS.load("particles-js", "particles.json", function () {});

//////////////////////////////////////////////

// scrollreveal js in services section
let slideUp1 = {
  distance: "50%",
  origin: "left",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
  mobile: false,
};
let slideUp2 = {
  distance: "20%",
  origin: "bottom",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
  mobile: false,
};
let slideUp3 = {
  distance: "50%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
  mobile: false,
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
  mobile: false,
};
let aboutDesc = {
  opacity: 0.4,
  reset: true,
  duration: 850,
  delay: 100,
  easing: "ease-in-out",
  mobile: false,
  scale: 1.25,
};
let aboutNum1 = {
  distance: "60%",
  origin: "left",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 150,
  easing: "ease-in-out",
  mobile: false,
};
let aboutNum2 = {
  distance: "60%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 150,
  easing: "ease-in-out",
  mobile: false,
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
  mobile: false,
};
let secondQual = {
  distance: "50%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
  mobile: false,
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
  mobile: false,
};
let contactBox2 = {
  distance: "55%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 250,
  easing: "ease-in-out",
  mobile: false,
};
let contactBox3 = {
  distance: "60%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 300,
  easing: "ease-in-out",
  mobile: false,
};
let contactBox4 = {
  distance: "65%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 350,
  easing: "ease-in-out",
  mobile: false,
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
  mobile: false,
};
let contactInput2 = {
  distance: "60%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
  mobile: false,
};
let contactInput3 = {
  distance: "60%",
  origin: "left",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
  mobile: false,
};
let contactInput4 = {
  distance: "60%",
  origin: "right",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
  mobile: false,
};
let contactInput5 = {
  distance: "35%",
  origin: "left",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
  mobile: false,
};
let contactBtn = {
  distance: "60%",
  origin: "bottom",
  opacity: null,
  reset: true,
  duration: 850,
  delay: 200,
  easing: "ease-in-out",
  mobile: false,
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
  distance: "35%",
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

//////////////////////////////////////////////

// typewriter js animation for home h1
let homeTitle = document.querySelector(".home__name");
let nickName = null;
const mobile = window.matchMedia("(max-width: 768px)");

if (mobile.matches) {
  nickName = "MIRR DESIGNER";
} else {
  nickName = "MIRRDESIGNER";
}

let homeTypewriter = new Typewriter(homeTitle, {
  loop: true,
});

homeTypewriter
  .pauseFor(2000)
  .typeString("Тоиров Амир")
  .pauseFor(2000)
  .deleteAll()
  .typeString(nickName)
  .pauseFor(1500)
  .deleteAll()
  .start();

// typewriter js animation for footer h1
let footerTitle = document.querySelector(".footer__title");
let footerTypewriter = new Typewriter(footerTitle, {
  loop: true,
});

footerTypewriter
  .pauseFor(500)
  .typeString("Тоиров Амир")
  .pauseFor(2000)
  .deleteAll()
  .typeString("mirrdesigner")
  .pauseFor(1500)
  .deleteAll()
  .start();

//////////////////////////////////

// CUSTOMIZING MODAL
const infoForModal = [
  {
    header: "Для чего нужен Дизайн И/Э",
    paragraph:
      "Дизайн интерьера и экстерьера помогает создавать гармоничное и функциональное окружение, которое отвечает нуждам и предпочтениям жильцов или пользователей помещений. Это может включать в себя выбор цветов, текстур, мебели, освещения и других элементов, которые создают цельное и визуально привлекательное пространство. Внешний дизайн, в свою очередь, направлен на создание привлекательной и функциональной внешней среды. Это может включать выбор материалов, цветов, ландшафтного дизайна и других элементов, которые дополняют архитектуру здания и создают приветливую и визуально привлекательную внешнюю среду.",
  },
  {
    header: "Для чего нужен Ландшафтный дизайн ?",
    paragraph:
      "Главная задача ландшафтного дизайна — создание гармонии, красоты в сочетании с удобствами использования инфраструктуры зданий, сглаживание конфликтности между урбанизационными формами и природой, зачастую от них страдающей.",
  },
  {
    header: "Для чего нужен Графический дизайн ?",
    paragraph:
      "Графический дизайн — это творческая область, которая включает использование визуальных элементов для передачи идей, сообщений и информации. Он охватывает множество носителей, таких как печатные, цифровые и мультимедийные, и может использоваться для самых разных целей, включая рекламу, брендинг, упаковку, веб-дизайн и многое другое.",
  },
];
const changeHandlerModal = function (num) {
  const h2 = document.querySelector(".modal__h");
  const p = document.querySelector(".modal__p");
  h2.textContent = infoForModal[num].header;
  p.textContent = infoForModal[num].paragraph;
};

const navs = document.querySelectorAll(".modal__header ul li");
navs.forEach((child) => {
  child.addEventListener("click", (e) => {
    navs.forEach((nav) => {
      nav.classList.remove("active__li");
    });
    child.classList.add("active__li");

    const num = Number(child.getAttribute("data-num"));
    changeHandlerModal(num);
  });
});

const exit = document.querySelector(".modal__exit");
const modal = document.querySelector(".modal");
exit.addEventListener("click", (e) => {
  modal.style.display = "none";
  document.body.style.overflowY = 'visible';
});

const btns = document.querySelectorAll(".services__btn");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.body.style.overflowY = 'hidden';
    modal.style.display = "block";

    const num = Number(btn.getAttribute("data-num"));
    navs.forEach((e) => {
      e.classList.remove("active__li");
    });
    navs[num].classList.add("active__li");

    changeHandlerModal(num);
  });
});
