unction oknoAlert() {
    alert('Ptaki latają kluczem');
}

const guzik = document.querySelector("#przycisk");
guzik.addEventListener('click', () => {
    oknoAlert();
});
console.log(guzik)