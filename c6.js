const btn6 = document.getElementById("six");
btn6.addEventListener('click', function left_table() {
    main.classList.remove("bgimg");
    body.classList.remove("invisible");
    div1.innerHTML = `
   <table class="menu-table">
   <thead>Key Indicator<hr></thead>
   <br>
   <br>
   </table>`
   work6_1();
});
function work6_1(){
    div2.innerHTML = ``;
}