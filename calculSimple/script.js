const bouton = document.getElementById("valider");
const mettreCouleur = document.getElementById("couleur");
const message = document.getElementById("message");

function calculerAfficher() {
	const couleur = mettreCouleur.value;
	
	const nombre1 = Number(prompt("Entrez le nombre 1 : "));
	const nombre2 = Number(prompt("Entrez le nombre 2 : "));

	if (isNaN(nombre1) || isNaN(nombre2)) {
		alert("Veuillez entrer des nombres valides !");
		return;
	}
	const resultat = nombre1 + nombre2;
	
	message.textContent = nombre1 + " + " + nombre2 + " = " + resultat;
	
	message.style.backgroundColor = couleur;
}


bouton.addEventListener("click", calculerAfficher);