import fs from 'fs';
import { yarg } from './configs/plugins/args.plugins';

const { b: base, l: limit, s: showTable } = yarg

let outputMessage: string = "";
const header: string = `
===================================
         Tabla del ${base}
=================================== \n
`

outputMessage += header;

for (let index = 1; index <= limit; index++) {
    outputMessage += `${base} x ${index} = ${base * index}\n`
}

const outputPath = "outputs/dir1/dir2/"
fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}tabla-${base}.txt`, outputMessage);

if (showTable) {
    // a
    console.log(outputMessage)
}

