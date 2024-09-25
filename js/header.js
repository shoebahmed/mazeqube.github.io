// JavaScript to load header.html into the page
document.addEventListener("DOMContentLoaded", function() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      // Select all <a> elements in the newly loaded header
      const links = document.querySelectorAll('#header-placeholder a');


      // Loop through each <a> and replace ".html" with "" (remove extension)
      links.forEach(link => {
        if(link.href.indexOf('index.html') > 1) {
          link.href = link.href.replace('index.html', '');
        } else {
          link.href = link.href.replace('.html', '.html');
        }
      });
    })
    .catch(error => console.error('Error loading the header:', error));
});