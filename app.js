// requires
// const fs = require('fs');        // 1. Require propio de Node
// const fs = require('express');   // 2. No existe en Node, se instala y se usa, No son nativos
// const fs = require('./fs');      // 3. Archivos creados en el proyecto



// Sin destructurar
// const multiplicar = require('./multiplicar/multiplicar');

// Destructurando
const { crearArchivo, listarTabla } =  require('./multiplicar/multiplicar');
const argv = require('./conifg/yargs').argv;

const colors = require('colors');

let comando = argv._[0];

switch( comando ) {
    case 'listar':
        console.log('listar');
        listarTabla( argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch( e => console.log(e) );
        break;
    default:
        console.log('Comnado no reconocido');
        break;
}
console.log(argv);


// let base = 'abc';

// console.log( multiplicar );
// console.log( module );
// console.log( process );
// console.log( process.argv );

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];



// console.log(argv.base);
// console.log('Limite', argv.limite);
// console.log(argv2);

