// Function to update image sources based on screen width
function updateImageSources() {
    // Select all elements with class .card.item1
    var cards = document.querySelectorAll('.card');

    // Loop through each card
    cards.forEach(function(card) {
      // Select the image element within the card
      var image = card.querySelector('img');
      
      // Update the src attribute based on screen width
      if (window.matchMedia("(min-width: 768px)").matches) {
        image.src = 'images/desktop/' + image.src.split('/').pop();
      } else {
        image.src = 'images/mobile/' + image.src.split('/').pop();
      }
    });
  }

  // Initial call to update image sources
  updateImageSources();

  // Add event listener for changes in screen width
  window.addEventListener('resize', updateImageSources);