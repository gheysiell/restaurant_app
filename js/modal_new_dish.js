/*document.querySelector("#xmark-img").addEventListener("click", () => {        
    document.querySelector("#container").style.display = 'none'
})*/

var btn = document.querySelector("#xmark-img").addEventListener("click", () => {    
    var parent = this.parentNode
    console.log(parent)
    //console.log(parent.classList)
})

//pai = parent.document.formularioX; // especifica o elemento de id="formularioX", dentro do documento que é pai deste iframe.
//var nome = pai.nome.value; // captura o valor do campo de id="nome", dentro do elemento de id="formularioX", dentro do documento que é pai deste iframe.
//var email = pai.email.value; // captura o valor do campo de id="email", dentro do elemento de id="formularioX", dentro do documento que é pai deste iframe.