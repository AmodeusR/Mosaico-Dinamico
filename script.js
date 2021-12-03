const masonry = document.querySelector(".masonry");

// Utility functions
  
const createImage = source => {
  const imgEl = document.createElement("img");
  imgEl.src = source;
  imgEl.classList.add("gallery-img");
  console.log(source)
  return imgEl;
}

const pushToPage = element => {
  masonry.append(element);
}

const loadImagesOnPage = quantity => {
  quantity = quantity ?? 4;
  
  for (let i = 0; i < quantity; i++) {
    const image = createImage(`https://source.unsplash.com/random?${i}`);
    pushToPage(image); 
  }
}

// Loading images on page as a masonry display

loadImagesOnPage(1);

const macy = new Macy({
  container: ".masonry",
  columns: 1,
  margin: {
    x: 12,
    y: 5,
  },
  mobileFirst: true,
  breakAt: {
    560: 2,
    800: 3,
    1200: 4,
    1600: 5
  }
});