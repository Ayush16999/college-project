const btn5 = document.getElementById("five");
btn5.addEventListener('click', function left_table() {
    main.classList.remove("bgimg");
    body.classList.remove("invisible");
    div1.innerHTML = `
   <table class="menu-table">
   <thead>Key Indicator<hr></thead>
   <br>
   <br>
   </table>`
   work5_1();
});
function work5_1(){
    div2.innerHTML = ``;
}
