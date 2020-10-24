// Create two arrays: Arrow Buttons / All Slides
var arrow = document.querySelectorAll('button');
var listings = document.querySelectorAll('.slide');
var slidesToShift = 4;

// Left arrow onClick event
arrow[0].onclick = () => {
  for (let element of listings) {
    // Shift right 4 slides
    element.style.left = '0px';
  }
};

// Right arrow onClick event
arrow[1].onclick = () => {
  for (let element of listings) {
    // Shift left 4 slides
    // Responsive shift amount = listing widths * number of slides to shift + margin around elements
    element.style.left = `-${element.offsetWidth * slidesToShift + 40}px`;
  }
};
