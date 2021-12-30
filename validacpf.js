
const botao = document.getElementById('button_cpf');
const campo_cpf = document.getElementById('form_cpf');



function verficaCPF(){
    var cpf = document.getElementById('form_cpf').value; //capturar o texto do campo cpf

    //replace do cpf para retirar os valores de . e  -
    let newcpf = cpf.replace(/\./gi, '');
    newcpf = newcpf.replace(/\-/gi, '');

    let i = 0;
    let soma = 0;
  
  /*Passo 1 acumular a soma dos 9 primeiros dígitos*/
    while( i <= 8){
        
        soma = soma + newcpf[i]*(10-i);
       // console.log(soma + ' = ' + soma + '  ' + newcpf[i] + ' x' + (10-i) );

        i++;
    }
   //console.log(soma);
   // console.log("Chguei e o cpf é: " + newcpf);

   /*Encontrar o resto da divisão da soma acumulada por 11*/
   let dig1 = 0;
   let dig2 = 0.;
   let resto = soma%11;
   //console.log(resto);

   if(resto >1){  //caso o resto da divisao do resultado da soma por 11 seja maior que 1 o primero digito recebe o valor do resto caso constrário recebe 0
        dig1 = 11-resto;
   }

   /* Calcular a soma para o  2º digito*/

   soma = 0;
   i = 0;

   while( i <= 9){
    
    if(i===9){
        soma = soma + dig1*(11-9);  //soma + dig1*2  
    //console.log(soma + ' = ' + soma + '+' + ' + ' + newcpf[i] + ' x' + (11-i) );
    }
    else{
        soma = soma + newcpf[i]*(11-i);
    }
    
    //console.log(soma + ' = ' + soma + '  ' + newcpf[i] + ' x' + (11-i) );

    i++;
}

//console.log("soma ->" + soma);


/* Calcular  2º digito*/
resto = soma%11;
//console.log(resto);

if(resto >1){  //caso o resto da divisao do resultado da soma por 11 seja maior que 1 o primero digito recebe o valor do resto caso constrário recebe 0
     dig2 = 11-resto;
}

console.log(`${dig1}${dig2}`);

//verificar se os dígitos confrem


if(newcpf[9]==dig1 && newcpf[10]==dig2){
    //console.log('Conseguimos');
    document.getElementById('button_cpf').className = 'green';
    console.log(typeof(newcpf[9]) +''+ typeof(dig1)); 
}else{
    console.log(`O valor esperado para digito1 era: ${newcpf[9]} e para o digito2 era: ${newcpf[10]}...mas são ${dig1} e ${dig2}`); 
}

}


function mascaracpf(){

    var campo = document.getElementById('form_cpf');

    valor = campo.value;
    
    if(valor.length == 3){
        campo.value = valor + ".";
    }
    if(valor.length == 7){
        campo.value = valor + ".";
    }
    if(valor.length == 11){
        campo.value = valor + "-";
    }
    if(valor.length === 13 || valor.length ==14){  
        document.getElementById('button_cpf').className = 'orange'; 
        console.log("CHEIO"); 
        return true;
    }
    if(valor.length!=13 || valor.length!=14){
        document.getElementById('button_cpf').className = 'red';
    }    


    //console.log(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, "$1.$2.$3-$4"));  mostra no fim da escrita o cpf no formato de poto e traço
}



    campo_cpf.addEventListener('keypress', ()=>{
        let cpf = campo_cpf.value;
        console.log(campo_cpf.value.length);
        //campo_cpf.value = newcpf; imprime no campo o formato com máscara

        mascaracpf();;
        
        //console.log("->"newcpf);
    })



botao.addEventListener('click', (e)=>{
    verficaCPF();
    

})


