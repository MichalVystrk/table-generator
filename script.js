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
    } else {
            for (let r = 0; r < radky; r++) {
                let tr = document.createElement("tr");
                for (let s = 0; s < sloupce; s++) {
                    let td = document.createElement("td");
                    tr.appendChild(td);
                }
                tabulka.appendChild(tr);
            }
        }
    }


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#vytvorit").onclick = vytvorTabulku;
})