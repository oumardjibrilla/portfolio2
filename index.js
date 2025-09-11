/* pour  le nav bar */

const div_bar = document.querySelector('.div-menu-bar')
const div_ferme_bar = document.querySelector('.div-menu-ferme')
const nav = document.querySelector('nav')

/* pour les boutton */
const boutton_menu_bar = document.querySelector('.boutton-bar')
const boutton_menu_bar_ferme = document.querySelector('.boutton-bar-ferme')

boutton_menu_bar.addEventListener('click' , () =>{
     nav.style.display='block'
     boutton_menu_bar_ferme.style.display='block'
     boutton_menu_bar.style.display='none'
})

boutton_menu_bar_ferme.addEventListener('click' ,()=>{
     nav.style.display='none'
     boutton_menu_bar_ferme.style.display='none'
     boutton_menu_bar.style.display='block'

})