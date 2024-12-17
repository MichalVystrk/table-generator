let sloupce = 0,
    radky = 0;

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
                cell.onclick = zmanaZivota;
                tr.appendChild(cell);
            }
            tabulka.appendChild(tr);
        }
    }
}

function zmanaZivota() {
    let id = this.id;
    let classList = this.classList;
    if (classList == "dead") {
        this.setAttribute("class", "alive");
        this.style.backgroundColor = "var(--text-color)";
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
}

function startToggle() {
    let start = document.querySelector("#start");
    if (start.innerHTML === "Start") {
        start.innerHTML = "Stop";
    } else {
        start.innerHTML = "Start";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#vytvorit").onclick = vytvorTabulku;
    document.addEventListener('keydown', enterPress);
    document.querySelector("#clear").onclick = clear;
    document.querySelector("#start").onclick = startToggle;
});