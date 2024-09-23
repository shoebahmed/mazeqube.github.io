// JavaScript to load header.html into the page
document.addEventListener("DOMContentLoaded", function() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;

      // Select all <a> elements in the newly loaded header
      const links = document.querySelectorAll('#footer-placeholder a');


      // Loop through each <a> and replace ".html" with "" (remove extension)
      links.forEach(link => {
        if(link.href.indexOf('index.html') > 1) {
          link.href = link.href.replace('index.html', '');
        } else {
          link.href = link.href.replace('.html', '');
        }
      });
    })
    .catch(error => console.error('Error loading the footer:', error));
});