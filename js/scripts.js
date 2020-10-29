// Separate both arrows and groups of product listings into variables
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var firstGroup = document.querySelector('.product-listings-group-1');
var secondGroup = document.querySelector('.product-listings-group-2');

// Left arrow onClick event
left.onclick = () => {
  if (firstGroup.style.left === 0) {
    // do nothing
    return;
  } else {
    secondGroup.style.left = `0px`;
    secondGroup.style.height = `100%`;
    firstGroup.style.left = `0px`;
    firstGroup.style.height = `100%`;
  }
};

// Right arrow onClick event
right.onclick = () => {
  // Shift amount = 4 listing element width (firstGroup/secondGroup.offsetWidth)
  if (secondGroup.style.left === `-${secondGroup.offsetWidth}px`) {
    // do nothing
    return;
  } else {
    firstGroup.style.left = `-${firstGroup.offsetWidth}px`;
    firstGroup.style.height = `100%`;
    secondGroup.style.left = `-${firstGroup.offsetWidth}px`;
    secondGroup.style.height = `100%`;
  }
};
