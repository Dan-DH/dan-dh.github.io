document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.nextElementSibling;

      // Close all other accordion items
      document.querySelectorAll('.accordion-content').forEach(item => {
          if (item !== content) {
              item.style.display = 'none';
              item.previousElementSibling.classList.remove('active');
          }
      });

      // Toggle the clicked item
      button.classList.toggle('active');
      if (button.classList.contains('active')) {
          content.style.display = 'block';
      } else {
          content.style.display = 'none';
      }
  });
});
