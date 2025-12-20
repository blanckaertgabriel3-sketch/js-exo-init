window.addEventListener("load", function(){

	//modifications textuelles 
	const message = document.getElementById("emplacement-libre");
	message.textContent = "Bonjour la page est chargée";

	const Miam = document.querySelector(".texte-actu-cuisine");
	Miam.textContent = "Miam Miam............................";

	//modifications style
	const hautPage = document.getElementById("haut-page");
	hautPage.style.backgroundColor = "rgba(125, 215, 146, 1)";

	const tousElements = document.querySelectorAll("*");
	tousElements.forEach(function(tousElements) {
		tousElements.style.margin = "0";
		tousElements.style.padding = "0";
	});

	const uppercase = document.querySelectorAll(".uppercase");
	uppercase.forEach(function(uppercase) {
		uppercase.style.textTransform = "uppercase";
	});
});
