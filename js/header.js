// Shorthand for $( document ).ready()
$(function() {
    console.log("ready!");

    // Select all <a> elements in the newly loaded header
    const firstLinks = $('#header-placeholder a');
    const secondLinks = $('#header-industries a');
    const firstLinksMobile = $('#header-placeholder-mobile a');
    const secondLinksMobile = $('#header-industries-mobile a');

    processLinks(firstLinks);
    processLinks(secondLinks);
    processLinks(firstLinksMobile);
    processLinks(secondLinksMobile);

    // Navbar toggler click event. (mobile view menu button)
    $('.navbar-toggler').on('click', function() {
        const isExpanded = $(this).attr('aria-expanded') === 'true';

        $(this).attr('aria-expanded', !isExpanded);

        //  menu visibility toggle kiye
        $('.st-popup').css('display', !isExpanded ? 'block' : 'none');

        // prvent scroll when menu open
        $('body').toggleClass('menu-open', !isExpanded);
    });
});

function processLinks(links) {
    // Loop through each <a> and replace ".html" with "" (remove extension)
    links.each(function() {
        let href = $(this).attr('href');
        if (typeof href === 'undefined') {
         return;
        }
        console.log(href);
        if (href.indexOf('index.html') > 1) {
            href = href.replace('index.html', '');
        } else {
            href = href.replace('.html', '');
        }
        $(this).attr('href', href);
    });
}
