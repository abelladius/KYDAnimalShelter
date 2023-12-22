    // Burger functionality
const burger = document.querySelector('.burger');
const navItems = document.querySelector('.nav-items');

burger.addEventListener('click', () => {
    navItems.classList.toggle('open');
})

// 

    // Contact form

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("contact-form");
        const successMessage = document.getElementById("success-message");
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
    
            // Simulate form submission (you can replace this with an actual API call)
            setTimeout(function() {
                successMessage.textContent = "Message sent successfully!";
                form.reset();
            }, 1000);
        });
    });


    // Gallery popup

    function showImage(imageNumber) {
        var modal = document.getElementById('image-modal');
        var modalImg = document.getElementById('modal-content');
      
        modal.style.display = 'flex'; // Change to 'flex' to center the content vertically
        modalImg.src = 'images/gallery-' + imageNumber + '.jpeg';
      }
      
      function closeImage() {
        var modal = document.getElementById('image-modal');
        modal.style.display = 'none';
      }
      
      // Close the modal if the user clicks outside the image
      window.onclick = function(event) {
        var modal = document.getElementById('image-modal');
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };
      

    // function showImage(imageNumber) {
    //     var modal = document.getElementById('image-modal');
    //     var modalImg = document.getElementById('modal-content');
        
    //     modal.style.display = 'block';
    //     modalImg.src = 'images/gallery-' + imageNumber + '.jpeg';
    // }
    
    // function closeImage() {
    //     var modal = document.getElementById('image-modal');
    //     modal.style.display = 'none';
    // }
