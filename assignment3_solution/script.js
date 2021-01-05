document.addEventListener('DOMContentLoaded', function() {
  const totalBoxes = document.querySelectorAll('div.color').length;
  let totalColored = 0;

  function randomColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random()*255) + ')';
  }

  function bgChange(e) {

    if (!e.target.dataset.colored && e.target.classList.contains('color')) {
      const color = document.getElementById('color-picker').value;
      
      if(color === "") {
        e.target.style.backgroundColor = randomColor();
        e.target.dataset.colored = true;
      } else {
        e.target.style.backgroundColor = color;
        e.target.dataset.colored = true;
        document.getElementById('color-picker').value = "";       
      }
      totalColored++;
      e.target.textContent = e.target.style.backgroundColor;
      
      if (totalColored === totalBoxes) {
        alert("all boxes colored!");
      }
    }
  }

  document.getElementById('boxes').addEventListener('click', bgChange);
});