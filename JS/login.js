function entrar() {
    let email = document.querySelector('#email')

    let senha = document.querySelector('#senha')



    let listaUser = []

    let userValid = {

         
    }

    listaUser = JSON.parse(localStorage.getItem('usuarios'))

    listaUser.forEach((item) => {
        if (email.value == item.email && senha.value == item.senha) {

            userValid = {
                email: item.email,
                senha: item.senha
            }

        }
    })

    if (email !== userValid.email && senha !== userValid.senha) {
        alert("Preencha corretamente os campos!")
        return

    } else {(email.value === userValid.email && senha.value === userValid.senha)
        window.location.href = './recados.html'
    }

    

}