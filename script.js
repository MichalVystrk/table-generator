let sloupce = 0,
    radky = 0;


function buttonDisable() {
    const table = document.querySelector("#tabulka");
    const borderButton = document.querySelector("#borderTog");
    if (table.rows.length === 0) {
        borderButton.style.display = 'none';
    } else {
        borderButton.style.display = 'block';
    }
}

function vytvorTabulku() {
    sloupce = document.querySelector("#sloupce").value;
    radky = document.querySelector("#radky").value;
    let tabulka = document.querySelector("#tabulka");
    tabulka.innerHTML = "";
    alerter = document.querySelector('#alerter')
    alerter.innerHTML = "";
    if (sloupce < 1 || radky < 1) {
        alerter.innerHTML = "Zadejte prosím číslo větší než 0";
        return;
    }

    else if (sloupce > 100 || radky > 100) {
        alerter.innerHTML = "Zadejte prosím menší než 100";
        return;
    }
    else {
        for (let r = 0; r < radky; r++) {
            let tr = document.createElement("tr");
            for (let s = 0; s < sloupce; s++) {
                let cell = document.createElement("td");
                cell.setAttribute("id", r + "_" + s);
                cell.setAttribute("class", "dead");
                cell.setAttribute("class", "cell");
                cell.onclick = zmanaZivota;
                tr.appendChild(cell);
            }
            tabulka.appendChild(tr);
        }
    }
    buttonDisable()
}



function zmanaZivota() {
    let id = this.id;
    let classList = this.classList;
    if (classList == "dead") {
        this.setAttribute("class", "alive");
        this.style.backgroundColor = "var(--button-hover-color)";
    } else {
        this.setAttribute("class", "dead");
        this.style.backgroundColor = "transparent";
    }
}

function enterPress(event) {
    if (event.key === "Enter") {
        vytvorTabulku();
    }
}

function clear() {
    const cells = document.querySelectorAll("td");
    cells.forEach(cell => {
        cell.setAttribute("class", "dead");
        cell.style.backgroundColor = "transparent";
    });
    buttonDisable()
}

function startToggle() {
    let start = document.querySelector("#start");
    if (start.innerHTML === "Start") {
        start.innerHTML = "Stop";
    } else {
        start.innerHTML = "Start";
    }
}

function borderToggle() {
    const cells = document.querySelectorAll("td");
    const buttonIcon = document.querySelector('#buttonIcon');
    cells.forEach(cell => {
        const currentBorder = getComputedStyle(cell).border;
        if (currentBorder === '1px solid rgb(0, 0, 0)') {
            cell.style.border = 'none';
        } else {
            cell.style.border = '1px solid black';
        }
    });

    if (buttonIcon.classList.contains('fa-border-all')) {
        buttonIcon.classList.remove('fa-solid', 'fa-border-all');
        buttonIcon.classList.add('fa-regular', 'fa-square');
    } else {
        buttonIcon.classList.remove('fa-regular', 'fa-square');
        buttonIcon.classList.add('fa-solid', 'fa-border-all');
    }
}


document.addEventListener("DOMContentLoaded", () => {
    buttonDisable();
    document.querySelector("#vytvorit").onclick = vytvorTabulku;
    document.addEventListener('keydown', enterPress);
    document.querySelector("#clear").onclick = clear;
    document.querySelector("#start").onclick = startToggle;
    document.querySelector("#borderTog").onclick = borderToggle;
});