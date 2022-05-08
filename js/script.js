const criptografar = document.getElementById("btnCripto");

criptografar.addEventListener("click", criptografarTexto);

function criptografarTexto(){
   if (textoCodificar != "") {
   		textoCodificado = textoCodificar.value.replace(/e/g,"enter");
   		textoCodificado = textoCodificado.replace(/i/g,"imes");
   		textoCodificado = textoCodificado.replace(/o/g,"ober");
   		textoCodificado = textoCodificado.replace(/u/g,"ufat");
   		textoCodificado = textoCodificado.replace(/a/g,"ai");

   		document.getElementById("textoCodificado").value = textoCodificado;


   }
   
}

const descriptografar = document.getElementById("btnDescri");

descriptografar.addEventListener("click", descriptografarTexto);

function descriptografarTexto(){
   if (textoCodificar != "") {
   		textoCodificado = textoCodificar.value.replace(/enter/g,"e");
   		textoCodificado = textoCodificado.replace(/imes/g,"i");
   		textoCodificado = textoCodificado.replace(/ober/g,"o");
   		textoCodificado = textoCodificado.replace(/ufat/g,"u");
   		textoCodificado = textoCodificado.replace(/ai/g,"a");

   		document.getElementById("textoCodificado").value = textoCodificado;


   }
   
}

document.getElementById("btnCopiar").addEventListener("click", copiarMensagem);

 function copiarMensagem(){
   document.querySelector("#textoCodificado").select();
   document.execCommand("copy");
   alert("Mensagem copiada para a área de transferência!");
   
 }

 document.getElementById("btnLimpar1").addEventListener("click", limparMensagem1);

 function limparMensagem1(){
   document.querySelector("#textoCodificar").value="";
 }


 document.getElementById("btnLimpar2").addEventListener("click", limparMensagem2);

 function limparMensagem2(){
   document.querySelector("#textoCodificado").value="";
 
}

const bloquear = document.querySelector("#textoCodificar");
bloquear.addEventListener("keypress", function(e){

    if(!checarElementos(e)){    
        e.preventDefault();

    }
});

function checarElementos(e) {

    const elementos = String.fromCharCode(e.keyCode);

    const padrao = '[a-z]';
    if(elementos.match(padrao)){
        return true;
    }
}