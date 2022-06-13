
let datos = [];
let posicion = 0;
let cont = 0;

// Este y oeste
let x = 0;

// Norte y sur
let y = 0;


const simulacion = () => {


    for (let j = 0; j < 10; j++) {

        for (let i = 0; i < 10; i++) {
            calcular();
        }
        evaluar();

    }

    graficar(datos);
}


const calcular = () => {
    const prob = getRandomInt(0, 4);
    if (prob == 0) {
        x++;
    } else if (prob == 1) {
        x--;
    }


    if (prob == 2) {
        y++;
    }
    else if (prob == 3) {
        y--;
    }
}


const evaluar = () => {
    // console.log(`X = ${x} Y = ${y}`);

    if (x == 0 && y == 2 || x == 0 && y == -2
        || x == 2 && y == 0 || x == -2 && y == 0
        || x == 1 && y == 1 || x == 1 && y == -1
        || x == -1 && y == 1 || x == -1 && y == -1) {
        // console.log("Esta a dos calles del origen");
        datos.push(1);
    } else {
        // console.log("No esta en el origen ni a dos calles");
        datos.push(0);
    }

    x = 0;
    y = 0;
}

const graficar = (datos) => {


    for (let i = 0; i < datos.length; i++) {
        cont++;
        if (datos[i] == 1) {
            document.getElementById("results").insertRow(-1).innerHTML = `<tr><th class="table-success" scope="row">${cont}</th><td class="table-success">${'Verdadero'}</td></tr>`;
        }
        else{
            document.getElementById("results").insertRow(-1).innerHTML = `<tr><th class="table-danger" scope="row">${cont}</th><td class="table-danger">${'Falso'}</td></tr>`;
            
        }


    }


}


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

