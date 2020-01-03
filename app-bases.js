const { crearArchivo, listarTabla } = require('./multiplicador');

const { yargs } = require('./config/yargs')
// Also can be required as: const yargs = require('./config/yargs').yargs

//let base = process.argv[2].split('=')[1]; 
//Remember that to show the arguments and processes running in node via command line: Use the process.argv 

let commando = yargs._[0];  

switch (commando) {
    
    case 'listar':
        listarTabla(yargs.base, yargs.limite);
        break;
    
    case 'crear':
        crearArchivo(yargs.base,yargs.limite)
            .then(response =>
                console.log(response))
            .catch(err =>
                console.log(err));
        break;
    default:
        console.log('Comando no reconocido')
            
}   
        
          
         