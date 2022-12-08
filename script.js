async function buscaEndereco(cep) {
    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvert = await consultaCEP.json();
        if (consultaCEPConvert.erro) {
            throw Error('CEP não existente!')
        }
        const cidade = document.getElementById('cidade');
        const logradouro = document.getElementById('endereco');
        const estado = document.getElementById('estado');
        const bairro = document. getElementById('bairro')

        bairro.value = consultaCEPConvert.bairro;
        cidade.value = consultaCEPConvert.localidade;
        logradouro.value = consultaCEPConvert.logradouro;
        estado.value = consultaCEPConvert.uf;

        console.log(consultaCEPConvert);
        return consultaCEPConvert;
    }
    catch (erro) {
        console.log(erro)
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        mensagemErro.style.color = 'red';
        mensagemErro.style.paddingTop = '5px';
    }
}
    

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => {
    buscaEndereco(cep.value);
})

