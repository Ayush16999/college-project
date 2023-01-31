const btn7 = document.getElementById("seven");

btn7.addEventListener('click', function left_table() {
    main.classList.remove("bgimg");
    body.classList.remove("invisible");
    div1.innerHTML = `
   <table class="menu-table">
   <thead>Key Indicator<hr></thead>
   <br>
   <br>
   </table>`
   work7_1();
});
function work7_1(){
    div2.innerHTML = ``;
}