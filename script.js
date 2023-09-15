const darkModeBtn = document.querySelector('#darkModeBtn')
const body = document.body;

localStorage.getItem('darkMode');
if (localStorage.getItem('darkMode') == undefined) {
    localStorage.setItem('darkMode', 'dark')
}

if (localStorage.getItem('darkMode') == 'dark') {
    body.dataset.bsTheme = body.dataset.bsTheme = "dark"
}
if (localStorage.getItem('darkMode') == 'light') {
    body.dataset.bsTheme = body.dataset.bsTheme = "light"
}

const campoNome = document.querySelector('#inputNome');
const formRegistro = document.querySelector('#formRegistro')

const inputs = formRegistro.querySelectorAll('input')


formRegistro.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputes = this.querySelectorAll('input');

    inputes.forEach(input => {
        if (!input.value) {
            console.log(this)
            console.log('input ' + input.name + ' vazio')
            console.log(input)
            let parentElement = input.parentNode
            parentElement.querySelector('.texto-validacao').textContent = "Campo obrigatório";
        }
    })
})

//blur é quando o elemento sai de foco
campoNome.addEventListener('blur', function () {
    console.log('elemento perdeu o foco')
    console.log(this.value)
})



const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

Toast.fire({
    icon: 'error',
    title: 'Campos incompletos'
})



darkModeBtn.addEventListener('click', function () {
    if (body.dataset.bsTheme === 'light') {
        localStorage.setItem('darkMode', 'dark')
        body.dataset.bsTheme = body.dataset.bsTheme = 'dark';
    }
    else if (body.dataset.bsTheme === 'dark') {
        localStorage.setItem('darkMode', 'light')
        body.dataset.bsTheme = body.dataset.bsTheme = 'light';
    }
})