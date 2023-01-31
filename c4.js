const btn4 = document.getElementById("four");
btn4.addEventListener('click', function left_table() {
    main.classList.remove("bgimg");
    body.classList.remove("invisible");
    div1.innerHTML = `
   <table class="menu-table">
   <thead>Key Indicator<hr></thead>
   <br>
   <br>
   </table>`
   work4_1();
});
function work4_1(){
    div2.innerHTML = ``;
}