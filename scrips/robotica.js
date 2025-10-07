 <script>
    function toggleImage(button) {
      const imageDiv = button.nextElementSibling;
      const isVisible = imageDiv.style.display === 'block';

      if (isVisible) {
        imageDiv.style.display = 'none';
        button.textContent = 'Mostrar imagem';
      } else {
        imageDiv.style.display = 'block';
        button.textContent = 'Esconder imagem';
      }
    }
  </script>