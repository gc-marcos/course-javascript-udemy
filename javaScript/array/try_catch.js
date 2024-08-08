// console.log(nome); //ReferenceError
// console.log('Oi...');
// console.log(4.Oi());

//Tratamos os ERROS com TRY / CATCH

// try{
//     console.log(nome);
// }catch(e){
//     console.log('Não foi possível imprimir!!');
//     console.log(e.nome);
//     console.log(e.message);
// }

// console.log('Oi...........')

//Lançando ERROS

function dividir(num1, num2){
    if(num1 === 0 || num2 === 0) {
        throw('Os valores devem ser positivos!!');  //LANÇANDO UMA EXEÇÃO (ERRO)
    }else{
        return num1 / num2;
    }
}

try{
    let ret = dividir(8, 2);
    console.log(ret);
}catch(e){
    console.log('Não foi possível dividir!!');
}finally{    // O FINALLY é sempre executado independente se dar ERRO ou NÃO
    console.log('Vamos Continuar!!');
}