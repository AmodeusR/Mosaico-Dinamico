const masonry = document.querySelector(".masonry");

window.addEventListener("load", () => {
  const macyChildren = Array.from(masonry.children);
  macyChildren.forEach((child, i) => {
    setTimeout(() => {
      child.classList.add("show");

    }, 300 * i);
  });
})
// Utility functions
  
const createImage = source => {
  const imgEl = document.createElement("img");
  imgEl.src = source;
  imgEl.classList.add("gallery-img");
  
  return imgEl;
}

const pushToPage = element => {
  masonry.append(element);
}

const loadImagesOnPage = quantity => {
  quantity = quantity ?? 4;

  
  for (let i = 0; i < quantity; i++) {
    const [x, y] = generateRandomRange(400, 1200);
    const image = createImage(`https://picsum.photos/seed/${i + 1 * Math.random()}/${x}/${y}`);
    pushToPage(image); 
  }
}

// Loading images on page as a masonry display

loadImagesOnPage(16);

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
  },
  waitForImages: true,
});


function generateRandomRange(minimum, maximum) {
  if (minimum > maximum) {
    minimum, maximum = maximum, minimum;
  }

  const range = Math.round(Math.random() * (maximum - minimum) + minimum);
  const range2 = Math.round(Math.random() * (maximum - minimum) + minimum);

  return [range, range2];
}
