function redirectToPage(url) {
    window.location.href = url;
  }
  
  // Additional JavaScript code can be added below if needed
  // Slide the grid items from right to left
function slideGrid() {
    const grid = document.querySelector('.grid');
    grid.style.transform = 'translateX(-100%)';
  }
  
  // Call the slideGrid function after the page loads
  window.addEventListener('load', slideGrid);
  
  const gridContainer = document.querySelector('.grid-container');
const gridItems = Array.from(gridContainer.querySelectorAll('.grid-item'));

const totalWidth = gridItems.reduce((sum, item) => sum + item.offsetWidth + 20, 0);
gridContainer.style.width = totalWidth + 'px';

function scrollGridItems() {
  gridContainer.scrollLeft += gridItems[0].offsetWidth + 20;
}

setInterval(scrollGridItems, 3000);
