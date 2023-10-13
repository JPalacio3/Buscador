// VARIABLES
const marca = document.querySelector('#marca');
const yearAuto = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear(); // El año máximo corresponde al año en el que estamos
const min = max - 10; // El año mínimo del auto debe ser 10 años atrás

// GENERAR UN OBJETO CON LA BUSQUEDA
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// EVENTOS
document.addEventListener('DOMContentLoaded',() => {

    mostrarAutos(); // Muestra los automóviles al cargar
    llenarSelect(); // Genera la secuencia de años
})

// Event listener para los select de busqueda
marca.addEventListener('change',e => datosBusqueda.marca = e.target.value);
year.addEventListener('change',e => datosBusqueda.year = e.target.value);
minimo.addEventListener('change',e => datosBusqueda.minimo = e.target.value);
maximo.addEventListener('change',e => datosBusqueda.maximo = e.target.value);
puertas.addEventListener('change',e => datosBusqueda.puertas = e.target.value);
transmision.addEventListener('change',e => datosBusqueda.transmision = e.target.value);
color.addEventListener('change',e => datosBusqueda.color = e.target.value);

console.log(datosBusqueda);

// FUNCIONES
function mostrarAutos() {

    autos.forEach(auto => {

        const { marca,modelo,year,precio,puertas,color,transmision } = auto;

        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${precio} - ${puertas} Puertas - ${color} - Transmisión: ${transmision}`;

        // Insertar el resultado en el HTML
        resultado.appendChild(autoHTML);
    });
}

// Genera los años del select
function llenarSelect() {

    for (let i = max;i >= min;i--) {
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;

        // Inserta los años en el campo del select
        yearAuto.appendChild(opcion);
    }
}
