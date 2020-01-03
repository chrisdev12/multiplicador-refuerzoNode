const { writeFile } = require('fs');
var colors = require('colors');


let listarTabla = (base, limite) => {
    for (let i = 0; i <= limite; i++) {
     console.log(`${base} * ${i} = ${base * i}`.green);
    }
}


let crearArchivo = async (base,limite) => {
    
    if (!Number(base)) {
        throw new Error(`El valor introducido: ${base} no es un número`);
    }
    
    let resultado = '';
  
    for (let i = 0; i <= limite; i++) {
     resultado += `${base} * ${i} = ${base * i} \n`;
    }
    
    const data = new Uint8Array(Buffer.from(resultado));
    
    writeFile('message.txt', data, (err) => {
        
        if (err) {
            throw new Error(err)
        }  
    });
    
     return `The table ${base} has been created`
}

module.exports = {
    crearArchivo,
    listarTabla
}

