document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('changeColorBtn');
  const container = document.querySelector('.container');

  button.addEventListener('click', function () {
      const randomColor = getRandomColor();
      container.style.backgroundColor = randomColor;
  });

  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
});