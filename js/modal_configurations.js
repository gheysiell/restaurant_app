var wrapperTopTabSenha = document.querySelector('#wrapper-top-tab-senha')
if (wrapperTopTabSenha) {
    wrapperTopTabSenha.addEventListener("click", () => {
        wrapperTopTabSenha.classList.remove("tab-top-inactive")
        wrapperTopTabSenha.classList.add("tab-top-active")        
        document.querySelector('#wrapper-top-tab-tema').classList.remove("tab-top-active")
        document.querySelector('#wrapper-top-tab-tema').classList.add("tab-top-inactive")
        document.querySelector('#wrapper-tema').style.display = 'none'
        document.querySelector('#wrapper-alterar-senha').style.display = 'flex'
    })
}

var wrapperTopTabTema = document.querySelector('#wrapper-top-tab-tema')
if (wrapperTopTabTema) {
    wrapperTopTabTema.addEventListener("click", () => {
        wrapperTopTabTema.classList.remove("tab-top-inactive")
        wrapperTopTabTema.classList.add("tab-top-active")
        document.querySelector('#wrapper-top-tab-senha').classList.remove("tab-top-active")       
        document.querySelector('#wrapper-top-tab-senha').classList.add("tab-top-inactive")               
        document.querySelector('#wrapper-alterar-senha').style.display = 'none'
        document.querySelector('#wrapper-tema').style.display = 'flex'
    })
}

var wrapperToggle = document.querySelector("#wrapper-line-toggle")
if (wrapperToggle) {
    wrapperToggle.addEventListener("click", () => {
        if (document.querySelector("#circle-toggle").classList.contains("toggle-start")) {
            document.querySelector("#circle-toggle").classList.remove("toggle-start")
            document.querySelector("#circle-toggle").classList.add("toggle-end")
            document.querySelector("#img-sun").classList.remove("img-selected")
            document.querySelector("#img-sun").classList.add("img-unselected")
            document.querySelector("#img-moon").classList.remove("img-unselected")
            document.querySelector("#img-moon").classList.add("img-selected")
        } else {
            document.querySelector("#circle-toggle").classList.remove("toggle-end")
            document.querySelector("#circle-toggle").classList.add("toggle-start")
            document.querySelector("#img-sun").classList.remove("img-unselected")
            document.querySelector("#img-sun").classList.add("img-selected")            
            document.querySelector("#img-moon").classList.remove("img-selected")
            document.querySelector("#img-moon").classList.add("img-unselected")
        }                
    })
}