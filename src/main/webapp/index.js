function validate(x, y, r) {
    if (!x) {
        throw new IncorrectInputException("x is not defined");
    }

    if (isNaN(x)) {
        throw new IncorrectInputException("x must be a number");
    }

    if (parseFloat(x) > 3 || parseFloat(x) < -5) {
        throw new IncorrectInputException("x must be in [-5; 3]");
    }
    if (r.length < 1) {
        throw new IncorrectInputException("r is not defined");
    }

}

function IncorrectInputException(message) {
    this.message = message;
    this.name = "IncorrectInputException";
}

function onSubmit(ev) {
    let mainForm = document.getElementById('table');

    try {
        let formData = new FormData(mainForm);
        const values = Object.fromEntries(formData);
        validate(values.x, values.y, values.r);
        mainForm.submit();
    } catch (e) {
        alert(e.message);
        return;
    }

}

function checkBox(selectedCheckbox){
    const checkboxes = document.getElementsByName("r");

    checkboxes.forEach(checkbox => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false; // Снимаем отметку у остальных
        }
    });

}

function yChecking(selectedCheckbox){
    const checkbox = document.getElementsByName("y");

    checkbox.forEach(checkbox => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false; // Снимаем отметку у остальных
        }
    });

}