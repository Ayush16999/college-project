const btn2 = document.getElementById("two");
btn2.addEventListener('click', function left_table() {
    main.classList.remove("bgimg");
    body.classList.remove("invisible");
    div1.innerHTML = `
   <table class="menu-table">
   <thead>Key Indicator<hr></thead>
   <br>
   <br>
       <tr>
           <td><button class="active" onclick ="work2_1()">2.1</button></td>
       </tr>
       <tr>
           <td><button onclick ="work2_2()"">2.2</button></td>
       </tr>
       <tr>
           <td><button onclick ="work2_3()">2.3</button></td>
       </tr>
       <tr>
           <td><button onclick ="work2_4()">2.4</button></td>
       </tr>
       <tr>
           <td><button onclick ="work2_5()">2.5</button></td>
       </tr>
       <tr>
           <td><button onclick ="work2_6()">2.6</button></td>
       </tr>
       <tr>
           <td><button onclick ="work2_7()">2.7</button></td>
       </tr>
   </table>`
   work2_1();
   change();
});
function work2_1(){
    div2.innerHTML = `
   <h1>Criterion II - Teaching-Learning and Evaluation</h1>
   <hr><br>
   <h3>2.1 Student Enrolment and Profile</h3>
   <table>
       <thead>
           <th> Metric No.</th>
           <th> Description</th>
           <th> Link</th>
       </thead>
       <tr>
           <td>2.1.1</td>
           <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
       <tr>
           <td>2.1.2</td>
           <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
   </table>
</div>`
};

function work2_2(){
    div2.innerHTML = `
   <h1>Criterion II - Teaching-Learning and Evaluation</h1>
   <hr><br>
   <h3>2.2 Student Enrolment and Profile</h3>
   <table>
       <thead>
           <th> Metric No.</th>
           <th> Description</th>
           <th> Link</th>
       </thead>
       <tr>
           <td>2.2.1</td>
           <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
       <tr>
           <td>2.2.2</td>
           <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
   </table>
</div>`
};
function work2_3(){
    div2.innerHTML = `
   <h1>Criterion II - Teaching-Learning and Evaluation</h1>
   <hr><br>
   <h3>2.3 Student Enrolment and Profile</h3>
   <table>
       <thead>
           <th> Metric No.</th>
           <th> Description</th>
           <th> Link</th>
       </thead>
       <tr>
           <td>2.3.1</td>
           <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
       <tr>
           <td>2.3.2</td>
           <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
   </table>
</div>`
};
function work2_4(){
    div2.innerHTML = `
   <h1>Criterion II - Teaching-Learning and Evaluation</h1>
   <hr><br>
   <h3>2.4 Student Enrolment and Profile</h3>
   <table>
       <thead>
           <th> Metric No.</th>
           <th> Description</th>
           <th> Link</th>
       </thead>
       <tr>
           <td>2.4.1</td>
           <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
       <tr>
           <td>2.4.2</td>
           <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
   </table>
</div>`
};
function work2_5(){
    div2.innerHTML = `
   <h1>Criterion II - Teaching-Learning and Evaluation</h1>
   <hr><br>
   <h3>2.5 Student Enrolment and Profile</h3>
   <table>
       <thead>
           <th> Metric No.</th>
           <th> Description</th>
           <th> Link</th>
       </thead>
       <tr>
           <td>2.5.1</td>
           <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
       <tr>
           <td>2.5.2</td>
           <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
   </table>
</div>`
};
function work2_6(){
    div2.innerHTML = `
   <h1>Criterion II - Teaching-Learning and Evaluation</h1>
   <hr><br>
   <h3>2.6 Student Enrolment and Profile</h3>
   <table>
       <thead>
           <th> Metric No.</th>
           <th> Description</th>
           <th> Link</th>
       </thead>
       <tr>
           <td>2.6.1</td>
           <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
       <tr>
           <td>2.6.2</td>
           <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
   </table>
</div>`
};
function work2_7(){
    div2.innerHTML = `
   <h1>Criterion II - Teaching-Learning and Evaluation</h1>
   <hr><br>
   <h3>2.7 Student Enrolment and Profile</h3>
   <table>
       <thead>
           <th> Metric No.</th>
           <th> Description</th>
           <th> Link</th>
       </thead>
       <tr>
           <td>2.7.1</td>
           <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
       <tr>
           <td>2.7.2</td>
           <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
           <td> <a href="/" target="_blank">View </a> </td>
       </tr>
   </table>
</div>`
};