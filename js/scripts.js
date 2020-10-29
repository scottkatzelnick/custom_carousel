// Create two arrays: Arrow Buttons / All Slides
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var firstGroup = document.querySelector('.product-listings-group-1');
var secondGroup = document.querySelector('.product-listings-group-2');

// Left arrow onClick event
left.onclick = () => {
  if (firstGroup.style.left === 0) {
    return;
  } else {
    secondGroup.style.left = `0px`;
    secondGroup.style.height = `100%`;
    firstGroup.style.left = `0px`;
    firstGroup.style.height = `100%`;
  }
};

// Right arrow onClick event
// Responsive shift amount = 4 listing element width
right.onclick = () => {
  if (secondGroup.style.left === `-${secondGroup.offsetWidth}px`) {
    return;
  } else {
    firstGroup.style.left = `-${firstGroup.offsetWidth}px`;
    firstGroup.style.height = `100%`;
    secondGroup.style.left = `-${firstGroup.offsetWidth}px`;
    secondGroup.style.height = `100%`;
  }
};
