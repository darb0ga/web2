window.addEventListener('load', drawGraph(0));

function canvas() {
    const canvas = document.getElementById("graph");
    const ctx = canvas.getContext("2d");

    let mainForm = document.getElementById('table');
    //валидация данных

    const rect = canvas.getBoundingClientRect();

    const xDom = event.clientX - rect.left - canvas.width / 2;
    const yDom = canvas.height / 2 - (event.clientY - rect.top);

    try {
        const rs = Array.from(
            document.getElementsByName("r")).filter(e => e.checked
        );
        if (rs.length !== 1) {
            throw new Error("choose one value of r");
        }
        const r = 100 * Number(rs[0].value);

        const x = Math.round(xDom * (r / (canvas.width / 4))) / 100;
        const y = Math.round(yDom * (r / (canvas.height / 4))) / 100;

        console.log("x: " + x + ", y: " + y + ", r: " + r / 100);

        mainForm.submit();
    } catch (e) {
        alert(e);
    }

}

function isItHit(x, y, r) {
    x = parseFloat(x);
    return ((x <= 0) && (x >= -r) && (y <= 0) && (y >= -r) || //in rectangle
        (x <= 0) && (y <= x + (r / 2)) && (y >= 0) || //in triangle
        (x * x + y * y <= r * r) && (x >= 0) && (y >= 0) //in circle
    );
}

function pointDot(ctx, itHit, x, y, r) {
    if (!r || !x) {
        return;
    }

    let SCALE_FACTOR = 125 / r;
    ctx.beginPath();
    ctx.arc(x * SCALE_FACTOR, y * SCALE_FACTOR, 5, 0, Math.PI * 2);
    if (isHit) {
        if (isHit.toString().toUpperCase() === 'YES' || isHit === true) {
            ctx.fillStyle = "rgb(255,51,116)";
        } else if (isHit.toString().toUpperCase() === 'NO' || isHit === false) {
            ctx.fillStyle = "rgb(3,27,98)";
        }
    }
    ctx.fill();


}

function drawGraph(R) {
    const scale = 150
    const canvas = document.getElementById("graph");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(1, -1);

    ctx.fillStyle = "rgb(5,23,40)";
    ctx.beginPath();

    // Top left triangle
    ctx.moveTo(0, 0);
    ctx.lineTo(0, scale / 2);
    ctx.lineTo(-scale / 2, 0);

    // Bottom left rectangle
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -scale);
    ctx.lineTo(-scale, -scale);
    ctx.lineTo(-scale, 0);

    // Top left circle
    ctx.arc(0, 0, scale, 0, Math.PI / 2, false);
    ctx.closePath();
    ctx.fill();

    // Axis
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(-canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.moveTo(0, -canvas.height / 2);
    ctx.lineTo(0, canvas.height / 2);
    ctx.stroke();

    ctx.fillStyle = "white";

    var table = document.querySelector('#res')
    var rows = table.querySelectorAll('tr')


    if (rows[1] !== undefined) {
        for (var i = 1; i < rows.length; i++) {
            pointDot(ctx, isItHit(rows[i].cells[1].innerHTML, rows[i].cells[2].innerHTML, R),
                rows[i].cells[1].innerHTML, rows[i].cells[2].innerHTML, R);
        }
    }

    ctx.scale(1, -1);
    ctx.fillStyle = "white";
    ctx.font = "12px monospace";
    ctx.fillText("R", scale, -6);
    ctx.fillText("R/2", scale / 2, -6);
    ctx.fillText("-R/2", -scale / 2, -6);
    ctx.fillText("-R", -scale, -6);

    ctx.fillText("R", 6, -scale);
    ctx.fillText("R/2", 6, -scale / 2);
    ctx.fillText("-R/2", 6, scale / 2);
    ctx.fillText("-R", 6, scale);

    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    return null;
}
