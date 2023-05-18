const botao = document.querySelector('button')
const nome = document.getElementById('nome')
const idade = document.getElementById('idade')


botao.onclick = () => {
    if(idade.value >= 18){
        alert('Parabens! Sua carteira foi aprovada')
    }else{
        alert('Não foi dessa vez')
    }

}
