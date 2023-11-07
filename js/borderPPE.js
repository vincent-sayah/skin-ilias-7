/* SCRIPT A APPLIQUER SUR LA PAGE INTERFACE POLE PEDAGOGIE DES ECOLES */
/* AJOUTER DANS L EDITION DE PAGE LA BALISE SUIVANTE: */
/* <script src="./Customizing/global/skin/eformarine/js/borderPPE.js"></script> */
/* VINCENT SAYAH */

function CardBorder(){
let div = document.getElementsByClassName("il-card-image-container");

	for (let i = 0; i < div.length; i++) {
	  div[i].style.borderBottom = "none";
	}
}

if (document.readyState === 'complete'){
	CardBorder();
	}
else {
	document.addEventListener ('DOMContentLoaded', function() {
	CardBorder();
	});
}

