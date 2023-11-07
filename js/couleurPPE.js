/* SCRIPT A APPLIQUER SUR LA PAGE INTERFACE POLE PEDAGOGIE DES ECOLES */
/* AJOUTER DANS L EDITION DE PAGE LA BALISE SUIVANTE: */
/* <script src="./Customizing/global/skin/eformarine/js/couleurPPE.js"></script> */
/* VINCENT SAYAH */

function CardCouleur(){
let div = document.querySelectorAll(".il-card");
let colorIndex = 0;
let colors = ["#D60725", "#001b39", "#CBCCD1"];

for (let i = 0; i < div.length; i++) {
  if (i % 1 === 0) {
    colorIndex = (colorIndex + 1) % colors.length;
  }
  div[i].style.backgroundColor = colors[colorIndex];
}
}

function CardHeadCouleur(){
let div = document.querySelectorAll(".il-card-repository-head");
let colorIndex = 0;
let colors = ["#D60725", "#001b39", "#CBCCD1"];

for (let i = 0; i < div.length; i++) {
  if (i % 1 === 0) {
    colorIndex = (colorIndex + 1) % colors.length;
  }
  div[i].style.backgroundColor = colors[colorIndex];
}
}

function CardTextCouleur(){
let div = document.getElementsByClassName("caption");

	for (let i = 0; i < div.length; i++) {
	  div[i].style.color = "#ffffff";
	}
}


// function CardTitreCouleur(){
// let div = document.getElementsByTagName("a");

	// for (let i = 0; i < div.length; i++) {
	  // div[i].style.color = "#ffffff";
	// }
// }

// function CardTitreCouleur(){
// let div = document.querySelector("div a");

	// for (let i = 0; i < div.length; i++) {
	  // div[i].style.color = "#ffffff";
	// }
// }

function CardTitreCouleur(){
let div = document.getElementsByClassName("ppe");

for (let i = 0; i < div.length; i++) {
	  div[i].style.color = "#ffffff";
	}
}






if (document.readyState === 'complete'){
	CardCouleur();
	CardHeadCouleur();
	CardTextCouleur();
	CardTitreCouleur();
}

else {
	document.addEventListener ('DOMContentLoaded', function() {
	CardCouleur();
	CardHeadCouleur();
	CardTextCouleur();
	CardTitreCouleur();
	});
}



