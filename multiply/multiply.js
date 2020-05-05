//Requireds
const fs = require('fs');
const colores = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`==============`);
    console.log(`tabla del ${ base }`.rainbow);
    console.log(`==============`);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}  \n`.cyan);
    }
}
let createMultiplicationTable = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (isNaN(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return; // para que no siga ejecutandose el codigo
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tables/tabla-del-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);

        });


    });

}

module.exports = {
    createMultiplicationTable,
    listarTabla
}