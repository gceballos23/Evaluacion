function setVector() {
  let longitud = Number(
    prompt("Indique  la cantidad de nros que desea incorporar al Vector : ")
  );
  let vector: number[] = new Array(longitud);
  for (let index = 0; index < vector.length; index++) {
    vector[index] = Math.floor(Math.random() * 10);
  }
  return vector;
}

//setVector tambien se puede dividir en dos funciones uno para dimensionar el array
//otro para cargar aleatorio el array

let TamanoArreglo: number = 0;
TamanoArreglo = Number(
  prompt("Indique  la cantidad de nros que desea incorporar al Vector : ")
);

let arrayNro: number[] = new Array(TamanoArreglo);

function getRndInteger(min, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargarVector(v: number[], cantidad: number) {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    v[indice] = getRndInteger(1, 100);
  }
}

function mostrarVertor(v: number[], cantidad: number) {
  for (let indice = 0; indice < cantidad; indice++) {
    console.log("Nro :", v[indice]);
  }
}

function valorMenor(v: number[], cantidad: number): number {
  let nroMenorTemporal: number = v[0];
  for (let indice = 1; indice < cantidad; indice++) {
    if (v[indice] < nroMenorTemporal) {
      nroMenorTemporal = v[indice];
    }
  }
  return nroMenorTemporal;
}

cargarVector(arrayNro, arrayNro.length);
mostrarVertor(arrayNro, arrayNro.length);
console.log("El Nro Menor es:", valorMenor(arrayNro, arrayNro.length));
