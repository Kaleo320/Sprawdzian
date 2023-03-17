
function oknoPrompt() {
    let sufit = prompt("Wpisz kolor sufitu");

    if (sufit) {
        alert("Twoje niebo ma kolor " + sufit);
    }
    else
    {
        alert("Anulowałeś akcję a okno prompt zwróciło " + sufit);
    }
}

const pro = document.querySelector("#Przycisk")
pro.addEventListener('click', () => {
    oknoPrompt()
})
console.log(pro)