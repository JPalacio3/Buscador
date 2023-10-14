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

    mostrarAutos(autos); // Muestra los automóviles al cargar
    llenarSelect(); // Genera la secuencia de años
})

// Event listener para los select de busqueda
marca.addEventListener('change',(e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change',(e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change',(e) => {
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAuto();
});

maximo.addEventListener('change',(e) => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto();
});

puertas.addEventListener('change',(e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change',(e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change',(e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});


console.log(datosBusqueda);

// FUNCIONES

//Función en cargada de mostrar el HTML
function mostrarAutos(autos) {

    limpiarHtml(); // Elimina el HTML previo

    autos.forEach(auto => {

        const { marca,modelo,year,precio,puertas,color,transmision } = auto;

        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - $ ${precio} - ${puertas} Puertas - ${color} - Transmisión: ${transmision}`;

        // Insertar el resultado en el HTML
        resultado.appendChild(autoHTML); // AppendChild muestra los resultados pero no limpia cuando hayan cambios
    });
}

// Limpiar el HTML en el filtrado
function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
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

// Función que realiza la filtración de autos en base a la búsqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    // console.log(resultado)
    // Recargar el HTML para actualizar el dato de los vehículos ya filtrados
    mostrarAutos(resultado);
}

// Funciones que realizan los filtrados
function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca == marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if (year) {
        return auto.year == year;
    }
    return auto;
}

function filtrarMin(auto) {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMax(auto) {
    const { maximo } = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas == puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision == transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color == color;
    }
    return auto;
}


