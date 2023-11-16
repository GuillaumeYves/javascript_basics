// Demande à l'utilisateur d'entrer son prénom
var prenom = prompt("Entrez votre prénom :");

// Vérifie si l'utilisateur a saisi un prénom
if (prenom !== null && prenom !== "") {
    console.log("Bonjour, " + prenom + " !");
} else {
    console.log("Mon nom est personne? ");
}