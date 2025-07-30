//console.log("hello");
//prompt("quel est ton nom?");
document.addEventListener('DOMContentLoaded', function() {
    var texteSuiveur = document.getElementById('blocSuiveur');

    document.addEventListener('mousemove', function(e) {
        // Met à jour la position du texte pour suivre la souris
        texteSuiveur.style.left = (e.pageX + 10) + 'px';
        texteSuiveur.style.top = (e.pageY + 10) + 'px';
    });
});
