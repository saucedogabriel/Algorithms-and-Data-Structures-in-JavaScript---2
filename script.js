// 1. Dados dos números enteros ingresados por el usuario realizar un algoritmo que calcule el cociente y el resto de su división entera (pueden utilizar el operador % de javascript para obtener el resto de la división entre dos números, por ejemplo 4%2 da como resultado 0, es decir, el resto de la división de 4 por dos, para la cual el resultado es 2).

// EJERCICIO 1
const pedirNumeros = () => {
    const dividendo  = Number(prompt('Ingrese el dividendo'));
    const divisor  = Number(prompt('Ingrese el divisor'));
    let cociente;

    const division = () => {
        cociente = parseInt(dividendo / divisor);
        resto = dividendo - (cociente * divisor);
        console.log(`El cociente de la division es ${cociente}`);
        console.log(`El resto de la division es ${resto}`);
    }
    division();
}

// pedirNumeros();


// 2. Determinar si un número ingresado por el usuario es par o impar.

// EJERCICIO 2
const obtenerNumeroParOImpar = () => {
    let numero = Number(prompt('Ingrese un numero'));
    numero % 2 == 0 
    ? alert(`El numero ingresado es par`) 
    : alert(`El numero ingresado es impar`);
}

// obtenerNumeroParOImpar();


// 3. Dado un cuadrado cuyo lado está definido por dos puntos:
// El origen de los ejes coordenados (0,0) y el punto (0,y), donde y es un numero ingresado por el usuario; solicitar se ingrese un nuevo punto (x1,y1) e informar al usuario si el punto está dentro del cuadrado o no.

// EJERCICIO 3
const pedirNumeroY = () => {
    let y = prompt('Ingresar el numero Y');
    let X1 = prompt('Ingresar el numero X1');
    let Y1 = prompt('Ingresar el numero Y1');

    X1 <= y && Y1 <= y 
    ? alert(`Las Coordernadas (X1, Y1): (${X1},${Y1}) estan adentro del cuadrado`) 
    : alert(`Las Coordernadas (X1, Y1): (${X1},${Y1}) estan fuera del cuadrado`);
}

// pedirNumeroY();


// 4. Ingresar tres números y ordenarlos de menor a mayor, luego de mayor a menor, y luego que el usuario elija.
// .. 4.1. Resolver el mismo ejercicio pero ingresando cuatro números.

// EJERCICIO 4
const obtenerNumeros = () => {
    let numeros = [];

    for(i = 0; i < 4; i++) {
        let num = Number(prompt(`Ingresar el numero ${i + 1}`));
        numeros.push(num);
    };

    let decision =  Number(prompt(`¿Como desea ordenar los numeros? 
    1- Mayor a menor 
    2- Menor a mayor`));

    if (decision == 1) {
        ordenarDeMAyorAMenor(numeros);

        function ordenarDeMAyorAMenor(arr){
            for(let i = 0; i < arr.length - 1; i++){
                for(let j = 0; j < arr.length - 1; j++){
                    if (arr[j] < arr[j + 1]) {
                        let aux = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = aux;
                    }
                }
            }
            console.log(arr);
            return arr;
        }
    } else if(decision == 2) {
        ordenarDeMenorAMayor(numeros);

        function ordenarDeMenorAMayor(arr){
            for(let i = 0; i < arr.length - 1; i++){
                for(let j = 0; j < arr.length - 1; j++){
                    if (arr[j] > arr[j + 1]) {
                        let aux = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = aux;
                    }
                }
            }
            console.log(arr);
            return arr;
        }
    }
}

// obtenerNumeros();


// 5. ingresar un número entero y mostrar por pantalla la cantidad de cifras (si excede las cuatro cifras, mostrar por pantalla el mensaje: el número tiene más de cuatro cifras). Por ejemplo si se ingresa 2377, el programa debe mostrar: 2377: "cuatro cifras", si se ingresa el número 22, se debe mostrar: "22: dos cifras".

// EJERCICIO 5
const pedirNumero = () => {
    let numAleatorio = prompt('Ingresar un numero');
    console.log(`La cantidad de cifras son ${numAleatorio.length}`);
}

// pedirNumero();
