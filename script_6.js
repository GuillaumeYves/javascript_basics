// Fonction pour traduire un codon en acide aminé et retour en cas d'inconnu
function traduireCodon(codon) {
    switch (codon) {
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
        case 'AGU':
        case 'AGC':
            return 'Sérine';
        case 'CCU':
        case 'CCC':
        case 'CCA':
        case 'CCG':
            return 'Proline';
        case 'UUA':
        case 'UUG':
            return 'Leucine';
        case 'UUU':
        case 'UUC':
            return 'Phénylalanine';
        case 'CGU':
        case 'CGC':
        case 'CGA':
        case 'CGG':
        case 'AGA':
        case 'AGG':
            return 'Arginine';
        case 'UAU':
        case 'UAC':
            return 'Tyrosine';
        default:
            return 'Codon inconnu';
    }
}

// Fonction pour traduire un ARN en une suite d'acides aminés
function traduireARN(arn) {
    // Découper l'ARN en codons de 3 lettres
    const codons = arn.match(/.{1,3}/g) || [];

    // Traduire chaque codon en acide aminé
    const acidesAmines = codons.map(traduireCodon);

    // Joindre les acides aminés en une chaîne et imprimer dans la console
    console.log(acidesAmines.join('-'));
}

// ARN à traduire en protéines
const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

// Traduire les ARN et imprimer dans la console
console.log("ARN 1 :");
traduireARN(arn1);

console.log("\nARN 2 :");
traduireARN(arn2);
