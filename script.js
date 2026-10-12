function js(){
    let img=document.querySelector("img");
    img.src="js.png"
    let button1=document.querySelector(".text1")
    button1.value='js'
    let p=document.querySelector("p")
    p.innerHTML='JavaScript (JS) — это популярный язык программирования, который делает сайты интерактивными и живыми.'
}
let button1=document.querySelector(".text1")
button1.addEventListener('click',js)
function python(){
    let img=document.querySelector("img");
    img.src="Python.png"
    let button2=document.querySelector(".text2")
    button2.value='python'
    let p=document.querySelector("p")
    p.innerHTML='Python — это высокоуровневый язык программирования общего назначения, который ценится за простой, понятный синтаксис и универсальность.'
}
let button2=document.querySelector(".text2")
button2.addEventListener('click',python)
function c(){
    let img=document.querySelector("img");
    img.src="images.png"
    let button3=document.querySelector(".text3")
    button3.value='c#'
    let p=document.querySelector("p")
    p.innerHTML='C# (си шарп) — это компилируемый язык программирования общего назначения со статической типизацией и объектно-ориентированной архитектурой, созданный компанией Microsoft.'
}
let button3=document.querySelector(".text3")
button3.addEventListener('click',c)
