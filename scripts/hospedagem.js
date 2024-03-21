// BOTÃO HAMBURGUER 
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () =>{
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// BOTÃO HAMBURGUER END


const list = document.querySelector(".hospedagem")
const submenu = document.querySelector(".submenu")
const icone = document.querySelector(".fa-caret-up")

list.addEventListener("click", () => {
  submenu.classList.toggle("clicado")
  icone.classList.toggle("clicado")
});


// BACK TO TOP
const toTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("ativado");
  } else {
    toTop.classList.remove("ativado");
  }
})
// BACK TO TOP END