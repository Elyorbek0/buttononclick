


let hello = document.querySelectorAll("h1")
let button = document.querySelector("button")


button.onclick = () => {
    for (let i = 0; i <= hello.length -1 ; i++){
        hello[i].style.color= "red"
        hello[i].style.textAlign="center"
    }
}