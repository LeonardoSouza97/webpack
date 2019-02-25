let p = new Promise(function (resolve, reject) {

    let teste = false;

    if(teste){
        resolve('Tudo Ok!');
    }else{
        reject('Deu erro');
    }
});


p.then(retorno => {
    console.log(retorno);
}).catch(retorno => {
    console.log(retorno);
});