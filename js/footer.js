document.addEventListener("DOMContentLoaded", function() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
      const copyrightSpan = document.querySelector('#footer-placeholder #copyright');
      if (copyrightSpan) {
        copyrightSpan.textContent = new Date().getFullYear();
      }
    })
    .catch(error => console.error('Error loading the footer:', error));
});