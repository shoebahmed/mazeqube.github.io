// JavaScript to load header.html into the page
document.addEventListener("DOMContentLoaded", function() {

    // Select all <a> elements in the newly loaded header
    const firstLinks = document.querySelectorAll('#header-placeholder a');
    processLinks(firstLinks);
    const secondLinks = document.querySelectorAll('#header-industries a');
    processLinks(secondLinks);
});

function processLinks(links) {
  // Loop through each <a> and replace ".html" with "" (remove extension)
  links.forEach(link => {
    if(link.href.indexOf('index.html') > 1) {
      link.href = link.href.replace('index.html', '');
    } else {
      link.href = link.href.replace('.html', '');
    }
  });
}