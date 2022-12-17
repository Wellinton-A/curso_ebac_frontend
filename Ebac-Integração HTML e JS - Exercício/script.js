const form = document.getElementById('formMaiorNumb');
let numEValido = false

const numeroA = document.getElementById('numbA');
const numeroB = document.getElementById('numbB');

function validaNumb(numeroA, numeroB) {
    const result = numeroB - numeroA
    return result > 0
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemValida = `Parabéns! o número: <b>${numeroB.value}</b> é maior que o número: <b>${numeroA.value}</b>`

    numEValido = validaNumb(numeroA.value, numeroB.value);
    if (numEValido) {
        const contMessageSuccess = document.querySelector('.messageSuccess');
        contMessageSuccess.innerHTML = mensagemValida;
        contMessageSuccess.style.display = 'block';
        document.querySelector('.messageError').style.display = 'none';
        numeroB.classList.remove('error')

        numeroA.value = '';
        numeroB.value = '';
    } else {
        document.querySelector('.messageError').style.display = 'block';
        numeroB.classList.add('error')
        document.querySelector('.messageSuccess').style.display = 'none';
    }

})