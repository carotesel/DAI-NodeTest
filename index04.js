import fs from 'fs'; 

let path = "./pruebita.txt";

const data = fs.readFileSync (path); 
console.log(data.toString())

function cambiarContenidoFile(path, newContent) {
    fs.writeFileSync(path, newContent)
}

cambiarContenidoFile(path, "siuuuu")
