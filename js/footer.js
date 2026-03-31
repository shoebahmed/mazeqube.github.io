document.addEventListener("DOMContentLoaded", function() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;

      const links = document.querySelectorAll('#footer-placeholder a');
      links.forEach(link => {
        if (link.href.indexOf('index.html') > 1) {
          link.href = link.href.replace('index.html', '');
        }
        // Removed: the .html stripping that was breaking industry page links
      });

      const copyrightSpan = document.querySelector('#footer-placeholder #copyright');
      if (copyrightSpan) {
        copyrightSpan.textContent = new Date().getFullYear();
      }
    })
    .catch(error => console.error('Error loading the footer:', error));
});
