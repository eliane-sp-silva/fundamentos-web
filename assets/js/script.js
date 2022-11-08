/*
Case sensitive = reconhece  letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()

*/
//através da declaração de variáveis podemos acessar o DOM
let nome = window.document.getElementById ('nome')
let email = document.querySelector('#email') //no caso de query seletor, precisa indicar se é classe ou id.
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let mensagemOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
  
  let txtNome = document.querySelector('#txtNome')

  if (nome.value.length < 3) {
    txt.innerHTML = 'Nome Inválido'
    nomeOk = false
    // innerHTML coloca um valor dentro da div.
    txtNome.style.color = 'red'
  }else{
    nomeOk = true
    txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = 'green'
  }
}

function validaEmail(){

  let txtEmail = document.querySelector('#txtEmail')

  if (txtEmail.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    // indexOf ->verifica se dentro dos valores digitados tem algum valores específico.
    emailOk = false
    txtEmail.innerHTML = 'E-mail Inválido'
    txtEmail.style.color = 'red'
    email.style.backgroundColor = '#EDAFB8'
  }else{
    txtEmail.innerHTML = 'E-mail Válido'
    txtEmail.style.color = 'green'
    email.style.backgroundColor = '#5ABCB9'
    emailOk = true
  }
}

function validaEmail2() {
  // o regex irá verificar a padronização do que será digitado no campo, e validar o padrão
  // qualquer email tem que ter letras + @ + letras + .com no minimo, e isso é o que o regex verifica
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let txtEmail = document.querySelector('#txtEmail')

  // aqui, iremos verificar se os valores batem, com a função match() do JS, então fazemos 
  // o if meio que contrário ao anterior, pois esperamos o acerto
  if(email.value.match(regex)) {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    email.style.backgroundColor = '#5ABCB9'
    emailOk = true
  } else {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    email.style.backgroundColor = '#EDAFB8'
    emailOk = false
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')
  if(assunto.value.length <= 100) {
    assuntoOk = true
    txtAssunto.innerHTML = 'ainda ta dando pra ler'
    txtAssunto.style.color = 'green'
  } else {
    assuntoOk = false
    txtAssunto.innerHTML = 'digita menos ai, por favor'
    txtAssunto.style.color = 'red'
  }
}

function enviarForm() {
  if(nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Enviamos seu formulário, aguarde a resposta')
  } else {
    alert('Algum dos campos está fora do esperado, confira, por favor')
  }
}

function zoomMapa() {
  mapa.style.aspectRatio = '16/19'
}

function mapaSemZoom() {
  mapa.style.aspectRatio = '16/12'
}


// função para voltar a tela para o topo, e o máximo pra esquerda possivel.
function topo() {
  window.scrollTo(0,0)
}

