 


// Fonction pour générer un mot de passe
function genererMotDePasse(longueur) {
    let motDePasse = '';
    let majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minuscules = 'abcdefghijklmnopqrstuvwxyz';
    let chiffres = '0123456789';
    let caracteresSpeciaux = '!@#$%^&*()_+[]{}|;:,.<>?';
    
   
    
    // Ajouter 2 majuscules
    for (let i = 0; i < 2; i++) {
        motDePasse = motDePasse + majuscules.charAt(Math.floor(Math.random() * majuscules.length));
    }
    
    // Ajouter 2 chiffres
    for (let i = 0; i < 2; i++) {
        motDePasse = motDePasse + chiffres.charAt(Math.floor(Math.random() * chiffres.length));
    }
    
    // Ajouter 3 caractères spéciaux
    for (let i = 0; i < 3; i++) {
        motDePasse = motDePasse + caracteresSpeciaux.charAt(Math.floor(Math.random() * caracteresSpeciaux.length));
    }
    
   
    let mdpComplet = majuscules + minuscules + chiffres + caracteresSpeciaux;
    for (let i = motDePasse.length; i < longueur; i++) {
        motDePasse =  motDePasse + mdpComplet.charAt(Math.floor(Math.random() * tousLesCaracteres.length));
    }
}
    


// Effectuer une vérification du formulaire d’inscription (si tous les champs sont saisies alors on active le bouton submit)

function verifierFormulaire() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    let submitButton = document.querySelector('button[name="submit"]');

    if (email) {
        submitButton.disabled = false;
        
    }
    if (password) {
        submitButton.disabled = false;
        
    }
    if (password2) {
        submitButton.disabled = false;
    }else {
        submitButton.disabled = true;
    }
}

password1.addEventListener('input', verifierFormulaire);
paswword2.addEventListener('input', verifierFormulaire);


// Lorsque l’utilisateur sélectionne une couleur via le champ dédié afficher cette couleur dans la div et fixer la dimension a 100px par 100px
function afficherCouleur() {
    let couleur = document.getElementById('couleur');
    let apercuCouleur = document.querySelector('.apercu_couleur');
    
    apercuCouleur.style.backgroundColor = couleur.value;
    apercuCouleur.style.width = '100px';
    apercuCouleur.style.height = '100px';
}
couleur.addEventListener('input', afficherCouleur);

// Traitement de l'envoi du formulaire en AJAX
function envoyerFormulaire(event) {
    event.preventDefault();
    
    let donneesFormulaire = $(event.target).serialize(); 

    $.ajax({
        url: '',
        type: 'POST',
        data: donneesFormulaire,
        success: function(data) {
            let message = $('.message');
            message.show();

            if (data.includes('Inscription ok')) {
                message.text('Inscription OK').css('background-color', 'green');
            } else if (data.includes('Erreur mot de passe')) {
                message.text('Erreur mot de passe').css('background-color', 'red');
            } else {
                message.text('Error').css('background-color', 'red');
            }
        },
        error: function(xhr, status, error) {
            console.error('Erreur:', error);
        }
    });
}
// Remplir les champs du formulaire de login
function remplirLogin() {
    let email = document.getElementById('email').value;
    document.getElementById('email_login').value = email;
    document.getElementById('password_login').value = document.getElementById('password').value;
}












