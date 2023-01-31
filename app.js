const home = document.getElementById("home");
const main = document.getElementById("main-body");
const body = document.getElementById("main-content");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
// home click
home.addEventListener('click', function handleClick() { 
    main.classList.add("bgimg");
    body.classList.add("invisible");
});

let navbar = document.querySelector(".navbar").querySelectorAll("button");
// console.log(navbar);

// looop 
navbar.forEach(element => {
    element.addEventListener("click" , function(){
        navbar.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");
    })
});


function change(){
    let right_button = document.querySelector("#div1").querySelectorAll("button");
console.log(right_button);

//loop
right_button.forEach(element =>{
    element.addEventListener("click" , function(){
        right_button.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");
    })
})
}