var wrapperImgArrow = document.querySelector('#wrapper-img-arrow')
if (wrapperImgArrow) {
    wrapperImgArrow.addEventListener("click", () => {
        wrapper_menu = document.querySelector('#wrapper-menu').style.width
        if ((wrapper_menu === '50px') || (wrapper_menu === "")) {
            document.querySelector('#wrapper-menu').style.width = '180px'
            document.querySelector('#header').style.width = 'calc(100% - 180px)'
            document.querySelector('#wrapper-content').style.width = 'calc(100% - 180px)'
            document.querySelector('#wrapper-title').style.display = 'flex'
            document.querySelector("#wrapper-logo-and-title").style.background = '#5a5a5a'
            document.querySelector('#wrapper-img-arrow').style.transform = 'rotate(-180deg)'
    
            var wrappersSpansTabs = document.getElementsByClassName('wrapper-span-menu-tabs')
            for(var i = wrappersSpansTabs.length - 1; i >= 0; i--) {
                wrappersSpansTabs[i].style.display = 'flex'
            }
            var wrapperImgMenuTabs = document.getElementsByClassName('wrapper-img-menu-tabs')
            for(var i = wrapperImgMenuTabs.length - 1; i >= 0; i--) {
                wrapperImgMenuTabs[i].style.width = '40%'
            }            

            if (! document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.contains("inactive")) {
                document.querySelector("#wrapper-span-menu-tabs-pedidos").style.background = '#36dd36'
                document.querySelector("#wrapper-span-menu-tabs-sobre").style.background = '#303030'
                document.querySelector("#wrapper-span-menu-tabs-cadastros").style.background = '#303030'
                document.querySelector("#wrapper-span-menu-tabs-configuracoes").style.background = '#303030'

                document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.add('border-img-menu')
                document.querySelector("#dad-wrapper-img-menu-tabs-pedidos").classList.remove('right-align-img-menu')
            } else if (! document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.contains("inactive")) {
                document.querySelector("#wrapper-span-menu-tabs-cadastros").style.background = '#36dd36'
                document.querySelector("#wrapper-span-menu-tabs-sobre").style.background = '#303030'
                document.querySelector("#wrapper-span-menu-tabs-pedidos").style.background = '#303030'
                document.querySelector("#wrapper-span-menu-tabs-configuracoes").style.background = '#303030'

                document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.add('border-img-menu')
                document.querySelector("#dad-wrapper-img-menu-tabs-cadastros").classList.remove('right-align-img-menu')                
            } else if (! document.querySelector("#wrapper-img-menu-tabs-sobre").classList.contains("inactive")) {
                document.querySelector("#wrapper-span-menu-tabs-sobre").style.background = '#36dd36'
                document.querySelector("#wrapper-span-menu-tabs-pedidos").style.background = '#303030'
                document.querySelector("#wrapper-span-menu-tabs-cadastros").style.background = '#303030'
                document.querySelector("#wrapper-span-menu-tabs-configuracoes").style.background = '#303030'
                
                document.querySelector("#wrapper-img-menu-tabs-sobre").classList.add('border-img-menu')
                document.querySelector("#dad-wrapper-img-menu-tabs-sobre").classList.remove('right-align-img-menu')                
            } else {
                document.querySelector("#wrapper-span-menu-tabs-configuracoes").style.background = '#36dd36'
                document.querySelector("#wrapper-span-menu-tabs-pedidos").style.background = '#303030'
                document.querySelector("#wrapper-span-menu-tabs-cadastros").style.background = '#303030'
                document.querySelector("#wrapper-span-menu-tabs-sobre").style.background = '#303030'
                
                document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.add('border-img-menu')
                document.querySelector("#dad-wrapper-img-menu-tabs-configuracoes").classList.remove('right-align-img-menu')                
            }
        } else {
            document.querySelector('#wrapper-menu').style.width = '50px '
            document.querySelector('#header').style.width = 'calc(100% - 50px)'
            document.querySelector('#wrapper-content').style.width = 'calc(100% - 50px)'
            document.querySelector('#wrapper-title').style.display = 'none'
            document.querySelector("#wrapper-logo-and-title").style.background = '#303030'
            document.querySelector('#wrapper-img-arrow').style.transform = 'rotate(0deg)'
            little_img()
    
            var wrappersSpansTabs = document.getElementsByClassName('wrapper-span-menu-tabs')
            for(var i = wrappersSpansTabs.length - 1; i >= 0; i--) {
                wrappersSpansTabs[i].style.display = 'none'
            }
            var wrapperImgMenuTabs = document.getElementsByClassName('wrapper-img-menu-tabs')
            for(var i = wrapperImgMenuTabs.length - 1; i >= 0; i--) {
                wrapperImgMenuTabs[i].style.width = '100%'
            }
        }
    })    
}

function little_img() {
    document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.remove('right-align-img-menu')
    document.querySelector("#dad-wrapper-img-menu-tabs-pedidos").classList.remove('right-align-img-menu')
    document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.remove('right-align-img-menu')
    document.querySelector("#dad-wrapper-img-menu-tabs-cadastros").classList.remove('right-align-img-menu')
    document.querySelector("#wrapper-img-menu-tabs-sobre").classList.remove('right-align-img-menu')
    document.querySelector("#dad-wrapper-img-menu-tabs-sobre").classList.remove('right-align-img-menu')
    document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.remove('right-align-img-menu')
    document.querySelector("#dad-wrapper-img-menu-tabs-configuracoes").classList.remove('right-align-img-menu')

    document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.remove('border-img-menu')    
    document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.remove('border-img-menu')    
    document.querySelector("#wrapper-img-menu-tabs-sobre").classList.remove('border-img-menu')    
    document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.remove('border-img-menu')
}

var wrapperMenuTabPedidos = document.querySelector('#wrapper-menu-tab-pedidos')
if (wrapperMenuTabPedidos) {
    wrapperMenuTabPedidos.addEventListener("click", () => {
        document.querySelector('#frame-modal-records').style.display = 'none'
        document.querySelector('#frame-content-request').style.display = 'flex'    
    })    
}

var wrapperMenuTabCadastros = document.querySelector('#wrapper-menu-tab-cadastros')
if (wrapperMenuTabCadastros) {
    wrapperMenuTabCadastros.addEventListener("click", () => {
        document.querySelector('#frame-content-request').style.display = 'none'
        document.querySelector('#frame-modal-records').style.display = 'flex'
    })    
}

function access_frame_modal_records() {
    var frameModalRecords = document.getElementById("frame-modal-records")
    var innerDoc = frameModalRecords.contentDocument || frameModalRecords.contentWindow.document
    innerDoc.getElementById("wrapper-boxe-pratos").addEventListener("click", () => {
        document.querySelector("#frame-modal-new-dish").style.display = 'flex'
    })
    var frameModalNewDish = document.getElementById("frame-modal-new-dish")
    var innerDoc = frameModalNewDish.contentDocument || frameModalNewDish.contentWindow.document
    innerDoc.getElementById("xmark-img").addEventListener("click", () => {
        document.querySelector("#frame-modal-new-dish").style.display = 'none'
    })    

    var frameModalRecords = document.getElementById("frame-modal-records")
    var innerDoc = frameModalRecords.contentDocument || frameModalRecords.contentWindow.document
    innerDoc.getElementById("wrapper-boxe-clientes").addEventListener("click", () => {
        document.querySelector("#frame-modal-new-client").style.display = 'flex'
    })
    var frameModalNewClient = document.getElementById("frame-modal-new-client")
    var innerDoc = frameModalNewClient.contentDocument || frameModalNewClient.contentWindow.document
    innerDoc.getElementById("xmark-img").addEventListener("click", () => {
        document.querySelector("#frame-modal-new-client").style.display = 'none'
    })

    var frameModalRecords = document.getElementById("frame-modal-records")
    var innerDoc = frameModalRecords.contentDocument || frameModalRecords.contentWindow.document
    innerDoc.getElementById("wrapper-boxe-usuarios").addEventListener("click", () => {
        document.querySelector("#frame-modal-new-user").style.display = 'flex'
    })
    var frameModalNewUser = document.getElementById("frame-modal-new-user")
    var innerDoc = frameModalNewUser.contentDocument || frameModalNewUser.contentWindow.document
    innerDoc.getElementById("xmark-img").addEventListener("click", () => {
        document.querySelector("#frame-modal-new-user").style.display = 'none'
    })
}

var wrapperMenuTabPedidos = document.querySelector("#wrapper-menu-tab-pedidos")
if (wrapperMenuTabPedidos) {
    wrapperMenuTabPedidos.addEventListener("click", () => {    
        document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.remove('inactive')
        document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.add('inactive')    
        document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.add('inactive')
        document.querySelector("#wrapper-img-menu-tabs-sobre").classList.add('inactive')
    
        document.querySelector("#wrapper-span-menu-tabs-pedidos").style.background = '#36dd36'
        document.querySelector("#wrapper-span-menu-tabs-cadastros").style.background = '#303030'
        document.querySelector("#wrapper-span-menu-tabs-sobre").style.background = '#303030'
        document.querySelector("#wrapper-span-menu-tabs-configuracoes").style.background = '#303030'

        document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.add('border-img-menu')
        document.querySelector("#dad-wrapper-img-menu-tabs-pedidos").classList.add('right-align-img-menu')        

        wrapper_menu = document.querySelector('#wrapper-menu').style.width
        if ((wrapper_menu === '50px') || (wrapper_menu === "")) {
            document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.remove('border-img-menu')
            document.querySelector("#dad-wrapper-img-menu-tabs-pedidos").classList.remove('right-align-img-menu')            
        } else {
            document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.add('border-img-menu')
            document.querySelector("#dad-wrapper-img-menu-tabs-pedidos").classList.add('right-align-img-menu')                
        }

        document.querySelector("#img-pedidos").style.filter = "invert(99%) sepia(3%) saturate(6057%) hue-rotate(296deg) brightness(109%) contrast(106%)" 
        document.querySelector("#wrapper-menu-tab-pedidos").style.color = "#fff"                
    })    
}

var wrapperMenuTabCadastros = document.querySelector("#wrapper-menu-tab-cadastros")
if (wrapperMenuTabCadastros) {
    wrapperMenuTabCadastros.addEventListener("click", () => {    
        document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.remove('inactive')
        document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.add('inactive')
        document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.add('inactive')    
        document.querySelector("#wrapper-img-menu-tabs-sobre").classList.add('inactive')
        
        document.querySelector("#wrapper-span-menu-tabs-cadastros").style.background = '#36dd36'
        document.querySelector("#wrapper-span-menu-tabs-pedidos").style.background = '#303030'
        document.querySelector("#wrapper-span-menu-tabs-sobre").style.background = '#303030'
        document.querySelector("#wrapper-span-menu-tabs-configuracoes").style.background = '#303030'

        document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.add('border-img-menu')
        document.querySelector("#dad-wrapper-img-menu-tabs-cadastros").classList.add('right-align-img-menu')        

        wrapper_menu = document.querySelector('#wrapper-menu').style.width
        if ((wrapper_menu === '50px') || (wrapper_menu === "")) {
            document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.remove('border-img-menu')
            document.querySelector("#dad-wrapper-img-menu-tabs-cadastros").classList.remove('right-align-img-menu')            
        } else {
            document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.add('border-img-menu')
            document.querySelector("#dad-wrapper-img-menu-tabs-cadastros").classList.add('right-align-img-menu')                
        }

        document.querySelector("#img-cadastros").style.filter = "invert(99%) sepia(3%) saturate(6057%) hue-rotate(296deg) brightness(109%) contrast(106%)" 
        document.querySelector("#wrapper-menu-tab-cadastros").style.color = "#fff"                
    })    
}

var wrapperMenuTabSobre = document.querySelector("#wrapper-menu-tab-sobre")
if (wrapperMenuTabSobre) {
    wrapperMenuTabSobre.addEventListener("click", () => {    
        document.querySelector("#wrapper-img-menu-tabs-sobre").classList.remove('inactive')
        document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.add('inactive')
        document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.add('inactive')
        document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.add('inactive')    
    
        document.querySelector("#wrapper-span-menu-tabs-sobre").style.background = '#36dd36'
        document.querySelector("#wrapper-span-menu-tabs-cadastros").style.background = '#303030'
        document.querySelector("#wrapper-span-menu-tabs-pedidos").style.background = '#303030'    
        document.querySelector("#wrapper-span-menu-tabs-configuracoes").style.background = '#303030'

        document.querySelector("#wrapper-img-menu-tabs-sobre").classList.add('border-img-menu')
        document.querySelector("#dad-wrapper-img-menu-tabs-sobre").classList.add('right-align-img-menu')        

        wrapper_menu = document.querySelector('#wrapper-menu').style.width
        if ((wrapper_menu === '50px') || (wrapper_menu === "")) {
            document.querySelector("#wrapper-img-menu-tabs-sobre").classList.remove('border-img-menu')
            document.querySelector("#dad-wrapper-img-menu-tabs-sobre").classList.remove('right-align-img-menu')            
        } else {
            document.querySelector("#wrapper-img-menu-tabs-sobre").classList.add('border-img-menu')
            document.querySelector("#dad-wrapper-img-menu-tabs-sobre").classList.add('right-align-img-menu')            
        }

        document.querySelector("#img-sobre").style.filter = "invert(99%) sepia(3%) saturate(6057%) hue-rotate(296deg) brightness(109%) contrast(106%)" 
        document.querySelector("#wrapper-menu-tab-sobre").style.color = "#fff"        
    })    
}

var wrapperMenuTabConfiguracoes = document.querySelector("#wrapper-menu-tab-configuracoes")
if (wrapperMenuTabConfiguracoes) {
    wrapperMenuTabConfiguracoes.addEventListener("click", () => {    
        document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.remove('inactive')
        document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.add('inactive')
        document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.add('inactive')
        document.querySelector("#wrapper-img-menu-tabs-sobre").classList.add('inactive')
    
        document.querySelector("#wrapper-span-menu-tabs-configuracoes").style.background = '#36dd36'
        document.querySelector("#wrapper-span-menu-tabs-sobre").style.background = '#303030'
        document.querySelector("#wrapper-span-menu-tabs-cadastros").style.background = '#303030'
        document.querySelector("#wrapper-span-menu-tabs-pedidos").style.background = '#303030'        

        document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.add('border-img-menu')
        document.querySelector("#dad-wrapper-img-menu-tabs-configuracoes").classList.add('right-align-img-menu')        

        wrapper_menu = document.querySelector('#wrapper-menu').style.width
        if ((wrapper_menu === '50px') || (wrapper_menu === "")) {
            document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.remove('border-img-menu')
            document.querySelector("#dad-wrapper-img-menu-tabs-configuracoes").classList.remove('right-align-img-menu')
        } else {
            document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.add('border-img-menu')
            document.querySelector("#dad-wrapper-img-menu-tabs-configuracoes").classList.add('right-align-img-menu')                                    
        }

        document.querySelector("#img-configuracoes").style.filter = "invert(99%) sepia(3%) saturate(6057%) hue-rotate(296deg) brightness(109%) contrast(106%)" 
        document.querySelector("#wrapper-menu-tab-configuracoes").style.color = "#fff"        
    })
}

var wrapperMenuTabPedidos = document.querySelector("#wrapper-menu-tab-pedidos")
if (wrapperMenuTabPedidos) {
    wrapperMenuTabPedidos.addEventListener("mousemove", () => {
        if (document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.contains("inactive")) {
            document.querySelector("#img-pedidos").style.filter = "invert(82%) sepia(11%) saturate(5534%) hue-rotate(62deg) brightness(91%) contrast(91%)"
            document.querySelector("#wrapper-menu-tab-pedidos").style.color = "#36dd36"
        }
    })
}
var wrapperMenuTabPedidos = document.querySelector("#wrapper-menu-tab-pedidos")
if (wrapperMenuTabPedidos) {
    wrapperMenuTabPedidos.addEventListener("mouseleave", () => {
        if (document.querySelector("#wrapper-img-menu-tabs-pedidos").classList.contains("inactive")) {
            document.querySelector("#img-pedidos").style.filter = "invert(99%) sepia(3%) saturate(6057%) hue-rotate(296deg) brightness(109%) contrast(106%)"
            document.querySelector("#wrapper-menu-tab-pedidos").style.color = "#fff"
        }
    })
}

var wrapperMenuTabCadastros = document.querySelector("#wrapper-menu-tab-cadastros")
if (wrapperMenuTabCadastros) {
    wrapperMenuTabCadastros.addEventListener("mousemove", () => {
        if (document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.contains("inactive")) {
            document.querySelector("#img-cadastros").style.filter = "invert(82%) sepia(11%) saturate(5534%) hue-rotate(62deg) brightness(91%) contrast(91%)"
            document.querySelector("#wrapper-menu-tab-cadastros").style.color = "#36dd36"
        }
    })
}
var wrapperMenuTabCadastros = document.querySelector("#wrapper-menu-tab-cadastros")
if (wrapperMenuTabCadastros) {
    wrapperMenuTabCadastros.addEventListener("mouseleave", () => {
        if (document.querySelector("#wrapper-img-menu-tabs-cadastros").classList.contains("inactive")) {
            document.querySelector("#img-cadastros").style.filter = "invert(99%) sepia(3%) saturate(6057%) hue-rotate(296deg) brightness(109%) contrast(106%)"
            document.querySelector("#wrapper-menu-tab-cadastros").style.color = "#fff"
        }
    })
}

var wrapperMenuTabSobre = document.querySelector("#wrapper-menu-tab-sobre")
if (wrapperMenuTabSobre) {
    wrapperMenuTabSobre.addEventListener("mousemove", () => {
        if (document.querySelector("#wrapper-img-menu-tabs-sobre").classList.contains("inactive")) {
            document.querySelector("#img-sobre").style.filter = "invert(82%) sepia(11%) saturate(5534%) hue-rotate(62deg) brightness(91%) contrast(91%)"
            document.querySelector("#wrapper-menu-tab-sobre").style.color = "#36dd36"
        }
    })
}
var wrapperMenuTabSobre = document.querySelector("#wrapper-menu-tab-sobre")
if (wrapperMenuTabSobre) {
    wrapperMenuTabSobre.addEventListener("mouseleave", () => {
        if (document.querySelector("#wrapper-img-menu-tabs-sobre").classList.contains("inactive")) {
            document.querySelector("#img-sobre").style.filter = "invert(99%) sepia(3%) saturate(6057%) hue-rotate(296deg) brightness(109%) contrast(106%)"
            document.querySelector("#wrapper-menu-tab-sobre").style.color = "#fff"
        }
    })
}

var wrapperMenuTabConfiguracoes = document.querySelector("#wrapper-menu-tab-configuracoes")
if (wrapperMenuTabConfiguracoes) {
    wrapperMenuTabConfiguracoes.addEventListener("mousemove", () => {
        if (document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.contains("inactive")) {
            document.querySelector("#img-configuracoes").style.filter = "invert(82%) sepia(11%) saturate(5534%) hue-rotate(62deg) brightness(91%) contrast(91%)"            
            document.querySelector("#wrapper-menu-tab-configuracoes").style.color = "#36dd36"
        }
    })
}
var wrapperMenuTabConfiguracoes = document.querySelector("#wrapper-menu-tab-configuracoes")
if (wrapperMenuTabConfiguracoes) {
    wrapperMenuTabConfiguracoes.addEventListener("mouseleave", () => {
        if (document.querySelector("#wrapper-img-menu-tabs-configuracoes").classList.contains("inactive")) {
            document.querySelector("#img-configuracoes").style.filter = "invert(99%) sepia(3%) saturate(6057%) hue-rotate(296deg) brightness(109%) contrast(106%)" 
            document.querySelector("#wrapper-menu-tab-configuracoes").style.color = "#fff"
        }
    })
}