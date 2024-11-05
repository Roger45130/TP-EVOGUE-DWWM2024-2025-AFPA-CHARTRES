//  Exercice 1 : GALERIE :


document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne le conteneur où l'image agrandie devra être affichée
    const imageGdTaille = document.querySelector('.imageGdTaille');

    // Sélectionne toutes les images dans le conteneur imagePtTaille
    const images = document.querySelectorAll('.imagePtTaille img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            // Efface tout contenu précédent dans le conteneur imageGdTaille
            imageGdTaille.innerHTML = '';
            
            // Crée un conteneur pour l'image et la légende
            const imageContainer = document.createElement('div');
            imageContainer.style.position = 'relative';
            imageContainer.style.display = 'inline-block';
            imageContainer.style.margin = '20px auto';
            imageContainer.style.textAlign = 'center';

            // Crée un nouvel élément img pour l'image cliquée
            const enlargedImg = document.createElement('img');
            enlargedImg.src = image.src;
            enlargedImg.alt = image.alt;
            enlargedImg.style.maxWidth = '60%';
            enlargedImg.style.height = 'auto';
            enlargedImg.style.display = 'block';

            // Crée un élément de légende
            const caption = document.createElement('div');
            caption.textContent = image.alt;
            caption.style.position = 'absolute';
            caption.style.bottom = '0';
            caption.style.left = '0';
            caption.style.right = '0';
            caption.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            caption.style.color = '#fff';
            caption.style.padding = '10px';
            caption.style.borderTop = '2px solid lightgray';
            caption.style.maxWidth = '58.7%';

            // Ajoute l'image et la légende au conteneur
            imageContainer.appendChild(enlargedImg);
            imageContainer.appendChild(caption);

            // Ajoute le conteneur au conteneur imageGdTaille
            imageGdTaille.appendChild(imageContainer);
        });
    });
});


//  Exercice 2 : COPIEUR :


document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne l'input où l'utilisateur écrit le texte original
    const texteOriginal = document.getElementById('texteOriginal');

    // Sélectionne l'input où le texte sera copié
    const texteCopie = document.getElementById('texteCopie');

    // Ajoute un événement pour détecter les changements dans l'input texteOriginal
    texteOriginal.addEventListener('input', () => {
        // Copie la valeur de l'input texteOriginal dans l'input texteCopie
        texteCopie.value = texteOriginal.value;
    });
});


//  Exercice 3 : TABLEAU DE CALCUL :


document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne l'input où l'utilisateur inscrit un nombre
    const nombreChoisi = document.getElementById('nombreChoisi');

    // Sélectionne les divs où les résultats seront affichés
    const copyNumber = document.querySelector('.copyNumber');
    const resultSquare = document.querySelector('.resultSquare');
    const resultCube = document.querySelector('.resultCube');

    // Ajoute un événement pour détecter les changements dans l'input nombreChoisi
    nombreChoisi.addEventListener('input', () => {
        const valeur = nombreChoisi.value;

        // Vérifie que la valeur entrée est un nombre valide (entier ou décimal)
        if (/^\d*\.?\d+$/.test(valeur)) {
            // Copie la valeur dans la div copyNumber
            copyNumber.textContent = valeur;

            // Calcule le carré et le cube du nombre et les affiche
            const nombre = parseFloat(valeur);
            resultSquare.textContent = (nombre * nombre).toFixed(2);
            resultCube.textContent = (nombre * nombre * nombre).toFixed(2);
        } else {
            // Efface les résultats si la valeur n'est pas valide
            copyNumber.textContent = '';
            resultSquare.textContent = '';
            resultCube.textContent = '';
        }
    });
});


//  Exercice 4 : DEPLACEMENT CARRE :


document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne l'élément .carre et le bouton .bouge
    const carre = document.querySelector('.carre');
    const bouton = document.querySelector('.bouge');

    // Initialise un compteur pour suivre le nombre de clics
    let NbreClique = 0;

    bouton.addEventListener('click', () => {
        NbreClique++;
        switch (NbreClique) {
            case 1:
                // Premier clic : déplace le carré de 50px sur la droite
                carre.style.transform = 'translateX(50px)';
                break;
            case 2:
                // Deuxième clic : déplace le carré en diagonale droite vers le haut de 100px
                carre.style.transform = 'translate(100px, -100px)';
                break;
            case 3:
                // Troisième clic : déplace le carré vers le haut de 100px
                carre.style.transform = 'translate(50px, -200px)';
                break;
            case 4:
                // Quatrième clic : déplace le carré de 50px sur la gauche
                carre.style.transform = 'translate(0px, -200px)';
                break;
            case 5:
                // Cinquième clic : déplace le carré en diagonale gauche vers le bas de 100px
                carre.style.transform = 'translate(-100px, -100px)';
                break;
            case 6:
                // Sixième clic : déplace le carré de 100px vers le bas
                carre.style.transform = 'translate(-50px, 0px)';
                break;
            default:
                // Réinitialise le compteur et remet le carré à sa position initiale
                NbreClique = 0;
                carre.style.transform = 'translate(0px, 0px)';
                break;
        }
    });
});


//  Exercice 5 : DEPLACEMENT CARRE AUX SCROLL DE LA SOURIS :


document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne l'élément                    .carreVert
    const carreVert = document.querySelector('.carreVert');
    
    // Initialise la position de déplacement
    let positionX = 0;

    // Ajoute un événement pour détecter le scroll de la souris
    window.addEventListener('wheel', (deplacement) => {
        // Vérifie la direction du scroll
        if (deplacement.deltaY < 0) {
            // Scroll vers le haut : déplace vers la droite
            positionX += 40;
        } else if (deplacement.deltaY > 0) {
            // Scroll vers le bas : déplace vers la gauche
            positionX -= 40;
        }
        
        // Applique la transformation au carré
        carreVert.style.transform = `translateX(${positionX}px)`;
    });
});