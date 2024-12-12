let dom = document.querySelector(".dom")

function changeContent(){
  let dom = document.querySelector(".dom")
  dom.style.backgroundColor="green"
  dom.innerHTML="I know now what the DOM is🤩"

}
dom.addEventListener("click", changeContent)

let access = document.querySelector(".access")

function changeAccess(){
  let access = document.querySelector(".access")
  access.style.backgroundColor="gray"
  access.innerHTML="I know how to access/select elements in the DOM😝"

}
access.addEventListener("click", changeAccess)


let use = document.querySelector(".use")

function changeUse(){
  let use= document.querySelector(".use")
  use.style.backgroundColor="black"
  use.innerHTML="I know how to use the style methods to change the style of an element in the DOM 😎😎"

}
use.addEventListener("click", changeUse)


let style = document.querySelector(".style")

function changeStyle(){
  let style = document.querySelector(".style")
  style.style.backgroundColor="cyan"
  style.innerHTML="I know how the styling properties differ in JS form CSS🤗"
  style.style.color="black"

}
style.addEventListener("click", changeStyle)


let excited = document.querySelector(".excited")

function changeExcited(){
  let excited = document.querySelector(".excited")
  excited.style.backgroundColor="coral"
  excited.innerHTML=" Yes i did it!! I manipulated the DOm and styled my elements🥰"

}
excited.addEventListener("click", changeExcited)


let open = document.querySelector(".open")
function openImage(){
    let image = document.querySelector(".image")
    image.style.display="block"
    let close = document.querySelector(".close")
    close.style.display="block"
    let open= document.querySelector(".open")
    open.style.display="none"
}

open.addEventListener("click", openImage)


let close = document.querySelector(".close")
function closeImage(){
    let image = document.querySelector(".image")
    image.style.display="none"
    let close = document.querySelector(".close")
    close.style.display="none"
    let open= document.querySelector(".open")
    open.style.display=" block"
}

close.addEventListener("click", closeImage)