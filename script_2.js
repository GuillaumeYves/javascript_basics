// Définition de la fonction factorielle
function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

// Demande à l'utilisateur d'entrer un nombre
var nombre = prompt("De quel nombre voulez-vous calculer la factorielle ?");

// Convertit la saisie en nombre entier
nombre = parseInt(nombre);

// Vérifie si la saisie est un nombre valide
if (!isNaN(nombre)) {
    // Calcule et affiche la factorielle du nombre saisi
    var resultat = factorielle(nombre);
    console.log("Le résultat est : " + resultat);
} else {
    // Affiche un message d'erreur si la saisie n'est pas un nombre valide
    console.log("Veuillez entrer un nombre valide.");
}
