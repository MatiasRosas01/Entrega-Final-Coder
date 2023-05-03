const { delay, animate } = require("framer-motion");

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY -20)+"px; left: "+(e.pageX -20)+"px")
});


function abrirMenu() {
  const aux = document.getElementById("menuDesplegable")
  aux.classList.toggle("mostrar")
};
window.onclick = function(event) {
  if (!event.target.matches('#botonMenu') && !event.target.matches('#barraMenu')) {
    var dropdowns = document.getElementsByClassName("menuDesplegable");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('mostrar')) {
        openDropdown.classList.remove('mostrar');
      }
    }
  }
} ;

function PageTransition(){
    var tl = gsap.timeline();
    tl.to('nav.navegacion li', {duration: .5, scaleY: 1, transformOrigin:"bottom left", stragger: .2 })
    tl.to('nav.navegacion li', { duration: .5, scaleY: 0, transformOrigin:"bottom left", stragger: .1, delay: .1})
}
function delayApp(n){
    n=n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done ();
           
        }, n);
    });
}

function contentAnimation(){

    var tl = gsap.timeline();
    tl.from('Bienvenida', { duration: 1.5, translateY: 50, opacity: 0 })
    tl.to('bienvenidaimg', { clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%" })
}
barba.init({
    sync: true,

    transitions:[{
        async leave(data){
            const done = this.async();

            PageTransitionEvent();
            await delayApp(1500);
            done()
        },

        async enter(data){
            contentAnimation();
        },
        async once(data){
            contentAnimation();
        }

    }]
})
