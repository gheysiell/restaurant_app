document.querySelector('#wrapper-img-arrow').addEventListener("click", () => {
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
            wrapperImgMenuTabs[i].style.width = '30%'
        }
    } else {
        document.querySelector('#wrapper-menu').style.width = '50px '
        document.querySelector('#header').style.width = 'calc(100% - 50px)'
        document.querySelector('#wrapper-content').style.width = 'calc(100% - 50px)'
        document.querySelector('#wrapper-title').style.display = 'none'
        document.querySelector("#wrapper-logo-and-title").style.background = '#303030'
        document.querySelector('#wrapper-img-arrow').style.transform = 'rotate(0deg)'

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

document.querySelector("#btn-new").addEventListener("click", () => {
    if ((document.querySelector("#frame-model-new-dish").style.display === 'none') || (document.querySelector("#frame-model-new-dish").style.display === '')) {
        document.querySelector("#frame-model-new-dish").style.display = 'flex'
    }
})