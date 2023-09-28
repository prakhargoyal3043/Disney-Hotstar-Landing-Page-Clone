let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodistinctio explicabo quod sapiente quasi quibusdam.",
    image: "Images/slider 2.PNG"
  },
  {
    name: "Loki",
    des:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodistinctio explicabo quod sapiente quasi quibusdam.",
    image: "Images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodistinctio explicabo quod sapiente quasi quibusdam.",
    image: "Images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodistinctio explicabo quod sapiente quasi quibusdam.",
    image: "Images/slider 4.PNG"
  },
  {
    name: "luca",
    des:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodistinctio explicabo quod sapiente quasi quibusdam.",
    image: "Images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".caraousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  slide.appendChild(content);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting up classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.childern[1];
    video.pause();
  });
});

//Card Sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((items, i) => {
  let conatinerDimensions = items.getBoundingClientRect();
  let containerWidth = conatinerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    items.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    items.scrollLeft += containerWidth + 200;
  });
});
