const imageRefs = [
  { name: "Zebra", description: "", url: "zebra.jpeg" },
  { name: "Giraffe", description: "", url: "giraffe.jpeg" },
  { name: "Lion", description: "", url: "lion.jpeg" },
  { name: "Elephant", description: "", url: "elephant.jpeg" },
  { name: "Monkey", description: "", url: "monkey.jpeg" },
];

let currentImage = 0;

function startSlideshow() {
  setInterval(loadImage, 5000);
}

function loadImage() {
  document.getElementById("img").src =
    "../assets/" + imageRefs[currentImage].url;
  if (currentImage === 4) {
    currentImage = 0;
  } else {
    currentImage++;
  }
}
