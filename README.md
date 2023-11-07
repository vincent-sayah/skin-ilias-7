**Mise en place skin  Ilias V7.19**


- Dézipper eformarine.zip dans Customizing/global/skin

- Dans le fichier Customizing/global/skin/eformarine/tpl.page\_content.html, adapté la balise href ( lien vers la liste des écoles) de la ligne 35.

- Dans le fichier <racine du site>/Services/Object/CommonSettings/TileImage/classes/ class.ilObjectTileImage, commenter la ligne 136 :

*/\*ilUtil::execConvert($fullpath . "[0] -geometry " . $min . "x" . $min . "^ -gravity center -extent " . $min . "x" . $min . " " . $fullpath);\*/*

- Placer dans l’édition de page voulue le chemin des scripts borderPPE.js et couleurPPE.js pour avoir des tiles qui alterneront entre la couleurs bleu, gris et rouge :

<script src="./Customizing/global/skin/eformarine/js/couleurPPE.js"></script><script src="./Customizing/global/skin/eformarine/js/borderPPE.js"></script>


- Le skin comporte une étendue « global » eformarine et une étendue « local » accueil. Dans styles et mise en page associé une catégorie au skin « local »
