const form = document.getElementById('frmAgenda');
const nomeContato = document.getElementById('nome-contato');
const numeroContato = document.getElementById('numero-contato');
const corpoTabela = document.querySelector('tbody');
const contatosCadastrados = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    montarTabela();
    atualizaTabela();
    limparCampos();
});

function montarTabela() {

    if (contatosCadastrados.includes(numeroContato.value)) {
        alert(`Numero ${numeroContato.value} já existe !`);
    }
    else {
        contatosCadastrados.push(numeroContato.value);
        
        let linha = '</tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }
}

function atualizaTabela() {
    corpoTabela.innerHTML = linhas;
}

function limparCampos() {
    nomeContato.value = '';
    numeroContato.value = '';
}