//PRELOADER

let load = document.querySelector ("[data-load]")

window.addEventListener ("load", () =>{
    load.classList.add ("loaded")
})


//HEADER

let head = document.querySelector ("[data-header]")

window.addEventListener ("scroll", function (){
    window.scrollY > 30 ? head.classList.add ("active") : head.classList.remove ("active")
})

//NAVBAR

let nav = document.querySelector ("[data-nav]")
let overlay = document.querySelector ("[data-overlay]")
let open = document.querySelector ("[data-open]")
let close = document.querySelector ("[data-close]")

let arr = [overlay , open , close]

for (let i = 0; i<arr.length; i++){
    arr[i].addEventListener ("click", function(){
        nav.classList.toggle ("active")
        overlay.classList.toggle ("active")
    })
}