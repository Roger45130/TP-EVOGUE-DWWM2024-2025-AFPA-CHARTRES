//  Exercice 1 : GALERIE :


document.addEventListener('DOMContentLoaded', () => {
    //  Sélectionne le conteneur où l'image agrandie devra être affichée
    const imageGdTaille = document.querySelector('.imageGdTaille');

    //  Sélectionne toutes les images dans le conteneur imagePtTaille
    const images = document.querySelectorAll('.imagePtTaille img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            //  Efface tout contenu précédent dans le conteneur imageGdTaille
            imageGdTaille.innerHTML = '';
            
            //  Crée un conteneur pour l'image et la légende
            const imageContainer = document.createElement('div');
            imageContainer.style.position = 'relative';
            imageContainer.style.display = 'inline-block';
            imageContainer.style.margin = '20px auto';
            imageContainer.style.textAlign = 'center';

            //  Crée un nouvel élément img pour l'image cliquée
            const enlargedImg = document.createElement('img');
            enlargedImg.src = image.src;
            enlargedImg.alt = image.alt;
            enlargedImg.style.maxWidth = '80%';
            enlargedImg.style.height = 'auto';
            enlargedImg.style.display = 'block';

            //  Crée un élément de légende
            const caption = document.createElement('div');
            caption.innerHTML = image.alt;
            caption.style.position = 'absolute';
            caption.style.bottom = '0';
            caption.style.left = '0';
            caption.style.right = '0';
            caption.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            caption.style.color = '#fff';
            caption.style.padding = '10px';
            caption.style.borderTop = '2px solid lightgray';
            caption.style.maxWidth = '78.4%';

            //  Ajoute l'image et la légende au conteneur
            imageContainer.appendChild(enlargedImg);
            imageContainer.appendChild(caption);

            //  Ajoute le conteneur au conteneur imageGdTaille
            imageGdTaille.appendChild(imageContainer);
        });
    });
});


//  Exercice 2 : COPIEUR :


document.addEventListener('DOMContentLoaded', () => {
    //  Sélectionne l'input où l'utilisateur écrit le texte original
    const texteOriginal = document.getElementById('texteOriginal');

    //  Sélectionne l'input où le texte sera copié
    const texteCopie = document.getElementById('texteCopie');

    //  Ajoute un événement pour détecter les changements dans l'input texteOriginal
    texteOriginal.addEventListener('input', () => {
        //  Copie la valeur de l'input texteOriginal dans l'input texteCopie
        texteCopie.value = texteOriginal.value;
    });
});


//  Exercice 3 : TABLEAU DE CALCUL :


document.addEventListener('DOMContentLoaded', () => {
    //  Sélectionne l'input où l'utilisateur inscrit un nombre
    const nombreChoisi = document.getElementById('nombreChoisi');

    //  Sélectionne les divs où les résultats seront affichés
    const copyNumber = document.querySelector('.copyNumber');
    const resultSquare = document.querySelector('.resultSquare');
    const resultCube = document.querySelector('.resultCube');

    //  Ajoute un événement pour détecter les changements dans l'input nombreChoisi
    nombreChoisi.addEventListener('input', () => {
        const valeur = nombreChoisi.value;

        //  Vérifie que la valeur entrée est un nombre valide (entier ou décimal)
        if (/^\d*\.?\d+$/.test(valeur)) {
            //  Copie la valeur dans la div copyNumber
            copyNumber.innerHTML = valeur;

            //  Calcule le carré et le cube du nombre et les affiche
            const nombre = parseFloat(valeur);
            resultSquare.innerHTML = (nombre * nombre).toFixed(2);
            resultCube.innerHTML = (nombre * nombre * nombre).toFixed(2);
        } else {
            //  Efface les résultats si la valeur n'est pas valide
            copyNumber.innerHTML = '';
            resultSquare.innerHTML = '';
            resultCube.innerHTML = '';
        }
    });
});


//  Exercice 4 : DEPLACEMENT CARRE :


document.addEventListener('DOMContentLoaded', () => {
    //  Sélectionne l'élément .carre et le bouton .bouge
    const carre = document.querySelector('.carre');
    const bouton = document.querySelector('.bouge');

    //  Initialise un compteur pour suivre le nombre de clics.
    let NbreClique = 0;

    bouton.addEventListener('click', () => {
        NbreClique++;
        switch (NbreClique) {
            case 1:
                //  Premier clic : déplace le carré de 100px sur la droite.
                carre.style.transform = 'translateX(100px)';
                break;
            case 2:
                //  Troisième clic : déplace le carré vers le haut de 100px et rester aligner à droite.
                carre.style.transform = 'translate(100px, -100px)';
                break;
            case 3:
                //  Quatrième clic : déplace le carré de 100px sur la gauche et rester à la même hauteur.
                carre.style.transform = 'translate(0px, -100px)';
                break;
            default:
                //  Réinitialise le compteur et remet le carré à sa position initiale.
                NbreClique = 0;
                carre.style.transform = 'translate(0px, 0px)';
                break;
        }
    });
});


//  Exercice 5 : DEPLACEMENT CARRE AUX SCROLL DE LA SOURIS :


document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne l'élément avec la classe "carreVert".
    const carreVert = document.querySelector('.carreVert');
    let positionX = 0;
    // Initialise la visibilité à false.
    let visible = false; 

    // Fonction pour déplacer le carré
    const deplacerCarre = (deplacement) => {
        if (visible) { // Ne déplace le carré que s'il est visible.
            if (deplacement.deltaY < 0) {
                // Scroll vers le haut : déplace vers la droite.
                positionX += 40;
            } else if (deplacement.deltaY > 0) {
                // Scroll vers le bas : déplace vers la gauche.
                positionX -= 40;
            }
            carreVert.style.transform = `translateX(${positionX}px)`;
        }
    };

    // Crée un observer pour vérifier la visibilité du carré.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Met à jour la visibilité
            visible = entry.isIntersecting; 
        });
    });

    // Observe le carré pour détecter s'il est dans le viewport.
    observer.observe(carreVert);

    // Ajoute l'événement de défilement sur la fenêtre.
    window.addEventListener('wheel', deplacerCarre);
});


//  Exercice 6 : MENU DEROULANT :


//  Sélectionner l'élément du menu principal
const menu = document.querySelector('.menu');
const chevron = document.querySelector('.fa-chevron-down');
//  Ajouter un événement "clique" pour afficher le sous-menu
menu.addEventListener('click', (event) => {
    event.preventDefault();
    const sousMenu = menu.querySelector('.sous-menu');
    if (sousMenu.style.display === 'block') {
        sousMenu.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)'; // Réinitialiser la rotation de l'icône
    } else {sousMenu.style.display = 'block';
            chevron.style.transform = 'rotate(180deg)';
    }
});

//  Ajouter un événement "mouseout" pour masquer le sous-menu lorsque la souris quitte la zone menu
menu.addEventListener('mouseout', () => {
    const sousMenu = menu.querySelector('.sous-menu');
    sousMenu.style.display = 'none';
});