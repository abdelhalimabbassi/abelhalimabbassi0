function afficherContenu(type) {
    // Récupérer les éléments à afficher/masquer selon le type
    if (type === 1) {
        var contenu = document.getElementById('ex1resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex1code');
    }
    
    // Afficher ou masquer le contenu en fonction de son état actuel
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}