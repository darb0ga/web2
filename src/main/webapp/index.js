function validate(x, y, r){
    if (!x) {
        throw new IncorrectInputException("x is not defined");
    }

    if (isNaN(x)) {
        throw new IncorrectInputException("x must be a number");
    }

    if (parseInt(x) > 3 || parseInt(x) < -5) {
        throw new IncorrectInputException("x must be in [-5; 3]");
    }
    if (r.length < 1) {
        throw new IncorrectInputException( "r is not defined");
    }

    if (y.length !== 1) {
        throw new IncorrectInputException( "y is not defined");
    }

    if (r.length > 1) {
        throw new IncorrectInputException( "choose one value of r");
    }


}

function IncorrectInputException(message) {
    this.message = message;
    this.name = "IncorrectInputException";
}

function onSubmit(ev) {
    let mainForm = document.getElementById('table');

    try {
        let x = document.getElementById("x").value;
        let y = Array.from(
            document.getElementsByName("y")).filter(e => e.checked
        );
        let r = Array.from(
            document.getElementsByName("r")).filter(e => e.checked
        );
        validate(x, y, r);
        mainForm.submit();
    } catch (e) {
        alert(e.message);
        return;
    }

    this.submit(ev);

}

async function addRow(x, y, r, scriptTime, result) {
    let table = document.getElementById("res");
    let newRow = table.insertRow(-1);

    let cell1 = newRow.insertCell(0);
    cell1.textContent = x;

    let cell2 = newRow.insertCell(1);
    cell2.textContent = y;

    let cell3 = newRow.insertCell(2);
    cell3.textContent = r;

    let cell4 = newRow.insertCell(3);
    cell4.textContent = scriptTime;


    let cell5 = newRow.insertCell(4);
    cell5.textContent = result;

}


function loadData() {
    localStorage.setItem('savedLastTries', JSON.stringify(document.getElementById("res")))

    let savedMas = JSON.parse(localStorage.getItem('savedLastTries'));
    if (savedMas) {
        //а откуда у нас там что появится еслли мы не добавляем
        let lastTries = document.getElementById("res");
        for (let i = 0; i < savedMas.length; i++) {
            const newRow = lastTries.insertRow(-1);
            const resCell = newRow.insertCell(0)
            const xCell = newRow.insertCell(1);
            const yCell = newRow.insertCell(2);
            const rCell = newRow.insertCell(3);
            const timeCell = newRow.insertCell(4);
            const scriptCell = newRow.insertCell(5);

            resCell.textContent = savedMas[i][0];
            xCell.textContent = savedMas[i][1];
            yCell.textContent = savedMas[i][2];
            rCell.textContent = savedMas[i][3];
            timeCell.textContent = savedMas[i][4];
            scriptCell.textContent = savedMas[i][5];
        }
        return null;
    }
}


function tableToJson(table) {
    let data = [];
    for (let i = 1; i < table.rows.length; i++) {
        let tableRow = table.rows[i];
        let rowData = [];
        for (let j = 0; j < tableRow.cells.length; j++) {
            rowData.push(tableRow.cells[j].innerHTML);
        }
        data.push(rowData);
    }
    return data;
}


 document.addEventListener('DOMContentLoaded', () => {
    loadData();
});