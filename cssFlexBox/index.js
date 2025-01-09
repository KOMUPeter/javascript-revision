document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const circles = Array.from(document.querySelectorAll('.circle'));
  
    let currentIndex = 0;
  
    // Function to update positions of the divs
    const updatePositions = () => {
      circles.forEach((circle, index) => {
        const newIndex = (index + currentIndex) % 4; // Calculate the new index
        switch (newIndex) {
          case 0:
            circle.style.top = '0';
            circle.style.left = '125px';
            break;
          case 1:
            circle.style.top = '125px';
            circle.style.left = '0';
            break;
          case 2:
            circle.style.top = '250px';
            circle.style.left = '125px';
            break;
          case 3:
            circle.style.top = '125px';
            circle.style.left = '250px';
            break;
        }
      });
    };
  
    // Initial positions
    updatePositions();
  
    // Move divs every 5 seconds (3 seconds transition + 2 seconds rest)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % 4; // Shift the index for circular motion
      updatePositions();
    }, 5000);
  });
  