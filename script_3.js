// Demande à l'utilisateur le nombre d'étages pour la pyramide
var nombreEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Convertit la saisie en nombre entier
nombreEtages = parseInt(nombreEtages);

// Vérifie si la saisie est un nombre valide
if (!isNaN(nombreEtages) && nombreEtages > 0) {
    // Construit et affiche la pyramide
    for (var i = 1; i <= nombreEtages; i++) {
        var ligne = "";

        // Ajoute les espaces à gauche
        for (var j = 1; j <= nombreEtages - i; j++) {
            ligne += " ";
        }

        // Ajoute les "#" pour la pyramide à gauche
        for (var k = 1; k <= i; k++) {
            ligne += "#";
        }

        // Ajoute les "#" pour la pyramide à droite
        for (var l = i - 1; l >= 1; l--) {
            ligne += "#";
        }

        console.log(ligne);
    }
} else {
    // Affiche un message d'erreur si la saisie n'est pas un nombre valide
    console.log("Veuillez entrer un nombre valide d'étages.");
}
