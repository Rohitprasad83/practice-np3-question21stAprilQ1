// Import stylesheets
import './style.css';

// Write Javascript code!
const getAllBoldText = document.querySelectorAll('strong');

getAllBoldText.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.color = 'green';
  });
  item.addEventListener('mouseleave', () => {
    item.style.color = 'black';
  });
});
