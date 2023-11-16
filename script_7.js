// Fonction pour gérer la conversation avec le bot
function conversationAvecLeBot(phrase) {
    // Si on lui envoie un message vide
    if (!phrase.trim()) {
        return "t'es en PLS ?";
    }

    // Si on lui hurle dessus (100% en majuscules)
    if (phrase === phrase.toUpperCase()) {
        return "Pwa, calme-toi...";
    }

    // Si la phrase contient le mot "Fortnite"
    if (phrase.toLowerCase().includes("fortnite")) {
        return "on s' fait une partie soum-soum ?";
    }

    // Si on lui pose une question
    if (phrase.endsWith("?")) {
        return "Ouais Ouais...";
    }

    // Règle par défaut
    return "balek.";
}

// Demander à l'utilisateur de saisir une phrase via prompt
var utilisateurPhrase = prompt("Parle au bot :");

// Gérer la conversation et imprimer la réponse dans la console
var reponseBot = conversationAvecLeBot(utilisateurPhrase);
console.log(reponseBot);
