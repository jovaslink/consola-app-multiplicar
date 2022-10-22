
const fs = require('fs');

const crearTabla= async (base = 6, mostrar = false , limite = 10)=>{

  try {
    
    let data = '';
    
    for (let index = 1; index <= limite; index++) {
        data += `${base} X ${index} = ${base*index}\n`;
    }
    
    fs.writeFile(`archivos/tabla${base}.txt`, data, 'utf8', (err)=>{
        if(err) console.log(`Error al guardar la tabla del ${base}`);
        console.log(`Archivo ${base}.txt guardado con éxito`);
    });

    if(mostrar){
        console.log('======================');
        console.log( 'TABLA DEL: ', base)
        console.log('======================');
        console.log(data);
    }
    
    
    return `La tabla del ${base} se creo con éxito`;
    
  } catch (error) {

    throw `Error al crear la tabla del ${base} `;
  }

}

module.exports= {
    crearTabla
}