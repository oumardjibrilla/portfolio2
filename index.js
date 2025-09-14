/* pour  le nav bar */

const div_bar = document.querySelector('.div-menu-bar')
const div_ferme_bar = document.querySelector('.div-menu-ferme')
const nav = document.querySelector('nav')

/* pour les boutton */
const boutton_menu_bar = document.querySelector('.boutton-bar')
const boutton_menu_bar_ferme = document.querySelector('.boutton-bar-ferme')

boutton_menu_bar.addEventListener('click' , () =>{
      nav.style.display='flex'
      boutton_menu_bar_ferme.style.display='block'
      boutton_menu_bar.style.display='none'
})

boutton_menu_bar_ferme.addEventListener('click' ,()=>{
      nav.style.display='none'
      boutton_menu_bar.style.display='flex' 
      boutton_menu_bar_ferme.style.display='none'
})

/* Important : réinitialiser en desktop */
window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) {
    nav.style.display ='flex';
    boutton_menu_bar_ferme.style.display = 'none';
    boutton_menu_bar.style.display = 'none';
  }
});

/* poru l'envoie du mail */


function sendMail() {
    
    let para = { 
        sujet: document.querySelector('#sujet').value,
        message: document.querySelector('#message').value,
        email: document.querySelector('#email').value
    };

    emailjs.send('service_01xnqmc', 'template_d3m36pz', para)
        .then(() => {
            alert('Message envoyé avec succès !');
            document.querySelector('#email').value = '';
            document.querySelector('#sujet').value = '';
            document.querySelector('#message').value = '';
        })
        .catch((error) => {
            console.error('Erreur lors de l\'envoi du message :', error);
            alert('Erreur lors de l\'envoi du message.');
        });
}


var boutton_mail = document.querySelector('#boutton-mail');
boutton_mail.addEventListener('click', ()=>{
    const email = document.querySelector('#email').value
    const sujet =  document.querySelector('#sujet').value
    const message =  document.querySelector('#message').value
    if(email == "" || sujet == "" || message == ""){
        alert('Des informations sont manquantes, merci de vérifier votre saisie.')
    }
    else{
        sendMail();
    }
    
});



/* le code pour afficher mon cv  */


const voir_cv = document.querySelector('.boutton-voir-cv')

voir_cv.addEventListener('click' ,()=>{
    window.open('mon_cv.pdf' ,'_blank')
})