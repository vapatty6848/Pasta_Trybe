/*
function validacaoEmail(field) {
usuario = field.value.substring(0, field.value.indexOf("@"));
dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
document.getElementById("e-mail").innerHTML="E-mail válido";
alert("email valido");
}
else{
document.getElementById("e-mail").innerHTML="<font color='red'>Email inválido </font>";
alert("E-mail invalido");
}
} */
function valida_form (){
var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
if(!filter.test(document.getElementById("email").value)){
alert('Por favor, digite o email corretamente');
document.getElementById("email").focus();
return false;
}
}

/* let estadosDoBrasil = ([“”, “AC”, “AL”, “AM”, “AP”, “BA”, “CE”, “DF”, “ES”, “GO”, “MA”, “MG”, “MS”, “MT”, “PA”, “PB”, “PE”, “PI”, “PR”, “RJ”, “RN”, “RO”, “RS”, “SC”, “SE”, “SP”, “TO” ]); */
const estados =(["Selecione seu Estado", "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]);

function criarListaDeEstados(estados) {
    for (let i = 0; i < estados.length; i += 1) {
        let option = document.createElement("option");
        option.value = i;
        option.text = estados[i];
        document.getElementById("estado").add(option);
    }
}
function validarData() {
    const arrayDataInicio = document.querySelector("#dataInicio").value.split("/");
    if((arrayDataInicio.length !== 3) || (arrayDataInicio[0] <= 0 || arrayDataInicio[0] > 31) || (arrayDataInicio[1] <= 0 || arrayDataInicio[1] > 12) || (arrayDataInicio[2] < 0)) {
        alert("data inválida, por favor, informar no formato DD/MM/AAAA");
    }
}

function validarCpf() {
    const cpf = document.querySelector("#cpf").value;
    if (cpf.length !== 11) {
        alert("Por favor, digitar somente números.");
    }
}

  function validarTipoHabitacao() {
    const tipoHabitacao = document.getElementsByName("tipo-de-habitação");
    for (let i = 0; i < tipoHabitacao; i += 1) {
        if (tipoHabitacao[i] === true) {
           tipo = tipoHabitacao[i].value;
        }
    }
}
function validarDados(event) {
    const nome = document.getElementById("nome").value;
    const eMail = document.getElementById("e-mail").value;
    const cpf = document.getElementById("cpf").value;
    validarCpf(cpf);
    const endereco = document.getElementById("endereco").value;
    const cidade = document.getElementById("cidade").value;
    const estado = estados[document.getElementById("estado").value];
    const tipo = document.getElementsByName("tipo-de-habitação").value;
    validarTipoHabitacao(tipo);
    const resumoCurriculo = document.getElementById("resumo").value;
    const cargo = document.getElementById("cargo").value;
    const descricaoCargo = document.getElementById("descricaoCargo").value;
    const dataInicio = document.getElementById("dataInicio").value;
    validarData (dataInicio);
    event.preventDefault();
    const dadosGerais = [nome, eMail, cpf, endereco, cidade, estado, resumoCurriculo, cargo, descricaoCargo, dataInicio];
 for (let index = 0; index < dadosGerais.length; index += 1) {
        const dadosConsolidados = document.getElementById("dadosConsolidados");
        const novoElemento = document.createElement("p");
        novoElemento.innerHTML = dadosGerais[index];
        dadosConsolidados.appendChild(novoElemento);
    }    
}
function apagarDados() {
        const paragrafos = document.querySelector("p");
    for (let i = 0; i < paragrafos.length; i += 1) {
        removeparagrafo = paragrafos[i];
        getElementById("dadosConsolidados").removeChild(removeparagrafo);
    }    
}

window.onload = function () {
    criarListaDeEstados(estados);
    const botaoEnviar = document.getElementById('enviar');
    botaoEnviar.addEventListener('click', validarDados);
    const botaoLimpar = document.getElementById('limpar');
    botaoLimpar.addEventListener('click', apagarDados);
};