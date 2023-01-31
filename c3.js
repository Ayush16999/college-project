const btn3 = document.getElementById("three");
btn3.addEventListener('click', function left_table() {
    main.classList.remove("bgimg");
    body.classList.remove("invisible");
    div1.innerHTML = `
    <table class="menu-table" >
    <thead>Key Indicator<hr></thead>
    <br>
    <br>
    <tr>
    <td><button class="active" onclick ="work3_1()">3.1</button></td>
    </tr>
    <tr>
        <td><button onclick="work3_2()">3.2</button></td>
    </tr> 
    <tr>
        <td><button onclick = "work3_3()">3.3</button></td>
    </tr>
    <tr>
        <td><button onclick = "work3_4()">3.4</button></td>
    </tr>
    </table>`;
    change();
    work3_1();
});

function work3_1(){
        div2.innerHTML = `
        <h1>Criterion III - Curricular Aspects</h1>
        <hr><br>
        <h3>3.1 Curricular Planning and Implementation</h3>
        <table>
            <thead>
                <th> Metric No.</th>
                <th> Description</th>
                <th> Link</th>
            </thead>
            <tr>
                <td>3.1.1</td>
                <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
                <td> <a href="/" target="_blank">View </a> </td>
            </tr>
            <tr>
                <td>3.1.2</td>
                <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
                <td><a href="/" target="_blank">View </a></td>
            </tr>
            <tr>
                <td>3.1.3</td>
                <td>Teachers of the Institution participate in following activities related to curriculum development and assessment of the affiliating University and/are represented on the following academic bodies during the last five years
                    Academic council/BoS of Affiliating university
                    Setting of question papers for UG/PG programs
                    Design and Development of Curriculum for Add on/ certificate/ Diploma Courses
                    Assessment /evaluation process of the affiliating University</td>
                <td><a href="/" target="_blank">View </a></td>
            </tr>
        </table>`;
    }
    
    function work3_2(){
        div2.innerHTML = `
        <h1>Criterion III - Curricular Aspects</h1>
        <hr><br>
        <h3>3.2 Curricular Planning</h3>
        <table>
            <thead>
                <th> Metric No.</th>
                <th> Description</th>
                <th> Link</th>
            </thead>
            <tr>
                <td>3.2.1</td>
                <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
                <td> <a href="/" target="_blank">View </a> </td>
            </tr>
            <tr>
                <td>3.2.2</td>
                <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
                <td><a href="/" target="_blank">View </a></td>
            </tr>
        </table>`;
    }
    
    function work3_3(){
        div2.innerHTML = `
        <h1>Criterion III - Curricular Aspects</h1>
        <hr><br>
        <h3>3.3 Curricular Planning</h3>
        <table>
            <thead>
                <th> Metric No.</th>
                <th> Description</th>
                <th> Link</th>
            </thead>
            <tr>
                <td>3.3.1</td>
                <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
                <td> <a href="/" target="_blank">View </a> </td>
            </tr>
        </table>`;
    }
    
    function work3_4(){
        div2.innerHTML = `
        <h1>Criterion IV - Curricular Aspects</h1>
        <hr><br>
        <h3>3.4 Curricular Planning</h3>
        <table>
            <thead>
                <th> Metric No.</th>
                <th> Description</th>
                <th> Link</th>
            </thead>
            <tr>
                <td>3.4.1</td>
                <td>The Institution ensures effective curriculum delivery through a well planned and documented process</td>
                <td> <a href="/" target="_blank">View </a> </td>
            </tr>
            <tr>
                <td>3.4.2</td>
                <td>The institution adheres to the academic calendar including for the conduct of CIE</td>
                <td><a href="/" target="_blank">View </a></td>
            </tr>
        </table>`;
    }