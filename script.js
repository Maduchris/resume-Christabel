const linkedinLink = document.querySelector('#contact a');
linkedinLink.addEventListener('click', function() {
    window.open(linkedinLink.getAttribute('href'), '_blank');
});