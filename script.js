// 1) Lancer Live Serveur en cliquant sur Go live
// 2) Ouvrir le Dev Tool puis la console
// 3) Ecrire son texte sauvegarder pour voir le compteur.
document.addEventListener("DOMContentLoaded", () => {
const boutonCalculer = document.querySelector(".calculate");
const saisie = document.querySelector(".saisie");
const afficheur = document.querySelector(".afficheur");

boutonCalculer.addEventListener("click", () => {
const figures = saisie.value.length;
afficheur.value = figures;
    });
});
// console.log(toCount.length)

// document.addEventListener("DOMContentLoaded", () => { // Assure que le script s'exécute après le chargement complet du DOM
//     const boutonCalculer = document.querySelector(".calculate"); // Sélectionne le bouton par sa classe
//     const saisie = document.querySelector(".saisie"); // Sélectionne l'input de saisie
//     const afficheur = document.querySelector(".afficheur"); // Sélectionne l'input d'affichage

//     boutonCalculer.addEventListener("click", () => {
//         const nombreDeCaracteres = saisie.value.length; // Compte le nombre de caractères
//         afficheur.value = nombreDeCaracteres; // Affiche le nombre de caractères dans l'input d'affichage
//     });
// });
