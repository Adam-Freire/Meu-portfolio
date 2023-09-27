

const myObserver = new IntersectionObserver((entrar) => {
    entrar.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('mostrar')
        } else {
            entry.target.classList.remove('mostrar')
        }
    })

})

const elementos = document.querySelectorAll('.esconder')

elementos.forEach( (element) => myObserver.observe(element))


function clickmenu() {
    if (menu.style.display === "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
}




function exibir() {
    if (mais.style.display === "block") {
        mais.style.display = "none"
    } else {
        mais.style.display = "block"
    }
}