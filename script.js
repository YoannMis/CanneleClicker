// Variables globales, accessibles de partout dans le code
// Ici l'argent et le nombre de fours sont utiles à plusieurs
// endroits, donc on en fait des variables globales
var argent = 0;
var fours = 1;
var prixFour = 50;
var prixAmeliorerFour = 100;
var AmeliorationFour = 2;
var cuistots = 0;
var prixCuistot = 1000;

function fibo(n) {
    if (n <= 1) {
        return n
    }
    else {
        return fibo(n-1) + fibo(n-2)
    }
}
var puissanceFour = fibo(AmeliorationFour)

// Déclaration de la fonction "cuisiner"
function cuisiner() {
    // On récupère l'élement dans la page HTML d'ID "score"
    var score = document.getElementById("score");
    // On ajoute de l'argent selon le nombre de fours
    argent += fours * puissanceFour;
    // On affiche l'argent après modification
    score.innerText = argent + "$";
    }

function acheterFour() {
    // On récupère l'élement dans la page HTML d'ID "score"
    var score = document.getElementById("score");
    var buttonFour = document.getElementById("achatFour");
    // On ajoute 1 four si on a assez d'argent
    if (argent >= prixFour) {
        fours += 1;
        score.innerText = (argent - prixFour) + "$";
        argent -= prixFour;
        prixFour = Math.ceil(prixFour * 1.5);
        // On affiche le prix du four
        buttonFour.innerText = `Acheter un four (${prixFour}$)`;
    }
    }

function ameliorerFour() {
    // On récupère l'élement dans la page HTML d'ID "score"
    var score = document.getElementById("score");
    var buttonFour = document.getElementById("ameliorerFour");
    if (argent >= prixAmeliorerFour) {
        AmeliorationFour += 1;
        puissanceFour = fibo(AmeliorationFour)
        score.innerText = (argent - prixAmeliorerFour) + "$";
        argent -= prixAmeliorerFour;
        prixAmeliorerFour = Math.ceil(prixAmeliorerFour * 1.5);
        buttonFour.innerText = `Ameliorer les fours (${prixAmeliorerFour}$)`;
    }
    }

function acheterCuistot() {
    // On récupère l'élement dans la page HTML d'ID "score"
    var score = document.getElementById("score");
    var buttonCuistot = document.getElementById("achatCuistot");
    // On ajoute 1 four
    if (argent >= prixCuistot) {
        cuistots += 1;
        score.innerText = (argent - prixCuistot) + "$";
        argent -= prixCuistot;
        prixCuistot = Math.ceil(prixCuistot * 1.5);
        // On affiche le prix du four
        buttonCuistot.innerText = `Acheter un cuistot (${prixCuistot}$)`;
    }
    }

function cuistot() {
    var score = document.getElementById("score");
    argent += cuistots;
    score.innerText = argent + "$";
}

setInterval(cuistot, 1000);