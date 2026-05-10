
//função que é chamada pelo botão (modo noturno/diurno), ativa a classe css dark e muda o site pro modo escuro
function mudar(){
    //ativa e desativa os efeitos da classe css "dark" quando o evento chamado pelo botão
      document.body.classList.toggle("dark");
}

//função que é chamada pelo botão (enviar mensagem), confere se todos os campos estão preenchidos e confere se o email é valido
function validar(){

    //atribui os valores digitados nos imputs de nome, email e mensagem, as variaveis que serão utilizadas
    let email = document.getElementById("email").value;
    let nome = document.getElementById('nome').value;
    let mensagem = document.getElementById('mensagem').value;
    var vazio ;

    //if confere se todos os campos foram preenchidos
     if (email === "" || nome === "" || mensagem === ""){
        vazio = 2; //atribui valor a variavel que será usada para validar se um dos campos está vazio
     }
     else{
        vazio = 1 //atribui valor a variavel que será usada para validar se um dos campos está vazio
     }
      
     //procura o @
     let arroba = email.indexOf("@");

     //procura o ultimo ponto (.) no email
     let ponto = email.lastIndexOf(".");

     
     if(vazio === 2){
        alert("por favor preencha todos os campos"); //mensagem exibida quando um campo é deixado em branco
     }
     //if, todas as condições devem ser verdadeiras para o email ser validado
     else if (
        email.length >= 5 && //confere se o email em pelo menos 5 caracteres
        email.includes("@") && //confere se o email tem um @
        email.includes(".") &&  //confere se o email tem um .
        arroba > 0 && //confere se tem pelo menos um caractere antes do @
        arroba < email.length -1 && //confere se tem pelo menos um caractere depois do @, checando se o @ é no minimo o penultimo caractere do email
        ponto > arroba + 1 && //confere se tem um ponto depois do @, com pelo menos um caractere entre eles, checando se a posição dele é maior que a posição do arroba +1
        ponto < email.length - 1 //confere se tem pelo menos um caractere depois do ponto, checando se o ponto é no minimo o penultimo caractere do email
     )
        
 {
    //mensagem exibida quando todos os campos são preenchidos e o email é valido
        alert("Mensagem enviada!");
        //limpa o conteudo de todos os inputs
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
    }
    else{
        //mensagem exibida quando o email é invalido
        alert("Email inválido, por favor confira se você não esqueceu o @, um . ou de colocar um tipo de email (ex: com, net, etc...)");
    }

}


