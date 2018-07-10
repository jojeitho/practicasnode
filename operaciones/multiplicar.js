const fs = require('fs');

let Mostrar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        suma = '';


        if (!Number(base)) {
            reject(`El parametro ${base} no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {


            suma += `${base} * ${i} = ${base*i}\n`;



        }
        resolve(suma);



    })



}


let Multiplicar = (base, limite = 10) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El parametro ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)

            else resolve(`tabla-${base}.txt`);
        });
    });
}


module.exports = {
    Multiplicar,
    Mostrar
    //////EL  MODULE EXPORTS SIRVE PARA MANDAR SOLO EL METODO A OTRO ARCHIVO QUE LO REQUIERA PODEMOS MANDAR
    /////DIFERENTED METODDOS SI SE DESEA
}