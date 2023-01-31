const btn1 = document.getElementById("one");
btn1.addEventListener('click', function left_table() {
    main.classList.remove("bgimg");
    body.classList.remove("invisible");
    div1.innerHTML = `
    <table class="menu-table" >
    <thead>Key Indicator<hr></thead>
    <br>
    <br>
    <tr>
    <td><button class="active" onclick ="work1_1()">1.1</button></td>
    </tr>
    <tr>
        <td><button onclick="work1_2()">1.2</button></td>
    </tr> 
    <tr>
        <td><button onclick = "work1_3()">1.3</button></td>
    </tr>
    <tr>
        <td><button onclick = "work1_4()">1.4</button></td>
    </tr>
    </table>`;
    change();
    work1_1();
})

function work1_1(){
    div2.innerHTML = `
    <h1>Criterion I - Curricular Aspects</h1>
    <hr><br>
    <h3>1.1 Curricular Planning and Implementation</h3>
    <table>
        <thead>
            <th> Metric No.</th>
            <th> Description</th>
            <th> Link</th>
        </thead>
        <tr>
            <td>1.1.1</td>
            <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
            <td> <a href="/" target="_blank">View </a> </td>
        </tr>
        <tr>
            <td>1.1.2</td>
            <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
            <td><a href="/" target="_blank">View </a></td>
        </tr>
        <tr>
            <td>1.1.3</td>
            <td>Teachers of the Institution participate in following activities related to curriculum development and assessment of the affiliating University and/are represented on the following academic bodies during the last five years
                Academic council/BoS of Affiliating university
                Setting of question papers for UG/PG programs
                Design and Development of Curriculum for Add on/ certificate/ Diploma Courses
                Assessment /evaluation process of the affiliating University</td>
            <td><a href="/" target="_blank">View </a></td>
        </tr>
    </table>`;
}

function work1_2(){
    div2.innerHTML = `
    <h1>Criterion I - Curricular Aspects</h1>
    <hr><br>
    <h3>1.2 Curricular Planning</h3>
    <table>
        <thead>
            <th> Metric No.</th>
            <th> Description</th>
            <th> Link</th>
        </thead>
        <tr>
            <td>1.2.1</td>
            <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
            <td> <a href="/" target="_blank">View </a> </td>
        </tr>
        <tr>
            <td>1.2.2</td>
            <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
            <td><a href="/" target="_blank">View </a></td>
        </tr>
    </table>`;
}

function work1_3(){
    div2.innerHTML = `
    <h1>Criterion I - Curricular Aspects</h1>
    <hr><br>
    <h3>1.3 Curricular Planning</h3>
    <table>
        <thead>
            <th> Metric No.</th>
            <th> Description</th>
            <th> Link</th>
        </thead>
        <tr>
            <td>1.3.1</td>
            <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
            <td> <a href="/" target="_blank">View </a> </td>
        </tr>
    </table>`;
}

function work1_4(){
    div2.innerHTML = `
    <h1>Criterion I - Curricular Aspects</h1>
    <hr><br>
    <h3>1.4 Curricular Planning</h3>
    <table>
        <thead>
            <th> Metric No.</th>
            <th> Description</th>
            <th> Link</th>
        </thead>
        <tr>
            <td>1.4.1</td>
            <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
            <td> <a href="/" target="_blank">View </a> </td>
        </tr>
        <tr>
            <td>1.4.2</td>
            <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
            <td><a href="/" target="_blank">View </a></td>
        </tr>
    </table>`;
}