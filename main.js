class Personaje {
    constructor(id, clase, nombre, vida, damage, insignias) {
        this.id = id;
        this.clase = clase;
        this.nombre = nombre;
        this.vida = vida;
        this.damage = damage;
        this.insignias = insignias;
    }
}

alert(`Bienvenido a Destiny, un simulador de un juego RPG (role play game) en el cual tendras el rol de guardian, tendras que subir de nivel y mejorar tu equipamiento para poder ayudar a defender al Viajero de todas las amenzas.`);

let username = prompt("Ingresa tu nombre: ");
let insignias = 100;


const hechicero = new Personaje(1, "Hechicero", username, 50, 250, insignias);
const titan = new Personaje(2, "Titan", username, 150, 100, insignias);
const cazador = new Personaje(3, "Cazador", username, 100, 150, insignias);

const arrayClases = [];
let arrayClaseSelected = [];

arrayClases.push(hechicero);
arrayClases.push(titan);
arrayClases.push(cazador);

function nuevaAventura() {

    let opcion = parseInt(prompt(`Elige tu clase: 
    \n1) ${hechicero.clase} Vida base: ${hechicero.vida} Daño base: ${hechicero.damage} \n2) ${titan.clase} Vida base: ${titan.vida} Daño base: ${titan.damage}\n3) ${cazador.clase} Vida base: ${cazador.vida} Daño base: ${cazador.damage} `));

    if (isNaN(opcion)) {

        alert("Elige la opcion de la clase deseada, vuelve a intentarlo");

        nuevaAventura();

    } else {

        if (opcion > 0 && opcion < 4) {

            arrayClaseSelected = arrayClases.find(item => item.id === opcion);

            alert(`Haz elegido la clase ${arrayClaseSelected.clase}
            \ningresando...`)

            torre();

        } else {

            alert("Elige la opcion de la clase deseada, vuelve a intentarlo");

            nuevaAventura();
        }

    }
}

function torre() {
    console.log(arrayClaseSelected);

    let opcion = parseInt(prompt(`Bienvenido ${arrayClaseSelected.nombre} a la Torre, aqui podras mejorar tu inventario y realizar expediciones para ganar xp y recursos para comprar mejoras subir el poder de tu guardian
    \n1) Hablar con Banshee (Tienda)\n2) Hablar con Zavala (Expedicion)\n3) Cerrar Sesion`));

    if (isNaN(opcion)) {

        alert("Elige la opcion de la accion deseada, vuelve a intentarlo");

        torre();

    } else {

        if (opcion > 0 && opcion < 4) {

            switch (opcion) {

                case 1:

                    tienda();

                    break;
                case 2:

                    expedicion();

                    break;
                case 3:

                    cerrarSesion();

                    break;

            }

        } else {

            alert("Elige la opcion de la accion deseada, vuelve a intentarlo");

            torre();

        }
    }
}

function tienda() {

    let opcion = parseInt(prompt(`Hola Guardian, soy Banshee que te puedo ofrecer? 
    \n1) Aumento de vida 50+ ( 10 insignias ) \n2) Aumento de daño 50+ ( 10 insignias ) \n3) Regresar a la torre 
    \n Insignias actuales : ${arrayClaseSelected.insignias}`));

    if (isNaN(opcion)) {

        alert("Elige la opcion de la accion deseada, vuelve a intentarlo");

        tienda();

    } else {

        if (opcion > 0 && opcion < 4) {

            switch (opcion) {

                case 1:

                    if (arrayClaseSelected.insignias >= 10) {

                        arrayClaseSelected.insignias = arrayClaseSelected.insignias - 10;
                        arrayClaseSelected.vida = arrayClaseSelected.vida + 50;
                        alert(`Felicidades, haz mejorado tu vida actual! Regresando con Banshee...
                        \nTus estadisticas actuales son: \nVida : ${arrayClaseSelected.vida} \nDaño: ${arrayClaseSelected.damage}`);

                        tienda();
                    } else {

                        alert("No tienes insignias suficientes!, regresando con Banshee");

                        tienda();
                    }

                    break;
                case 2:

                    if (arrayClaseSelected.insignias >= 10) {

                        arrayClaseSelected.insignias = arrayClaseSelected.insignias - 10;
                        arrayClaseSelected.damage = arrayClaseSelected.damage + 50;
                        alert(`Felicidades, haz mejorado tu daño actual! Regresando con Banshee...
                        \nTus estadisticas actuales son: \nVida Maxima: ${arrayClaseSelected.vida} \nDaño: ${arrayClaseSelected.damage}`);

                        tienda();
                    } else {

                        alert("No tienes insignias suficientes!, regresando con Banshee");

                        tienda();
                    }


                    break;
                case 3:

                    torre();

                    break;

            }

        } else {

            alert("Elige la opcion de la accion deseada, vuelve a intentarlo");

            tienda();

        }
    }
}

function expedicion() {

    let opcion = parseInt(prompt(`Hola Guardian soy Zavala, en las expediciones podras pelear con diferentes criaturas y ganar insignias tras cada victoria, hazte con muchas de ellas para comprar mejoras y poder desafiar a Oryx.
    \n1) Iniciar expedicion\n2) Desafiar a Oryx\n3) Regresar a la torre
    \nTus estadisticas actuales son: Vida actual: ${arrayClaseSelected.vida} Daño: ${arrayClaseSelected.damage} `));

    if (isNaN(opcion)) {

        alert("Elige la opcion de la accion deseada, vuelve a intentarlo");

        expedicion();

    } else {

        if (opcion > 0 && opcion < 4) {

            switch (opcion) {

                case 1:

                    alert("EXPEDICION A LA LUNA \nRecuerda que las expediciones son combates contra oleadas de la colmena, al ganar un enfrentamiento ganaras insignias. \nLos enemigos te haran daño, asegurate de tener una buena cantidad de vida antes de iniciar un nuevo enfrentamiento. \nRecuerda que puedes ir con Banshee para mejorar tu vida actual. \nSi recibes daño letal puedes MORIR y acabara la partida.");
                    combate();

                    break;
                case 2:

                    bossOryx();

                    break;
                case 3:

                    torre();

                    break;

            }

        } else {

            alert("Elige la opcion de la accion deseada, vuelve a intentarlo");

            expedicion();

        }
    }
}


function combate() {

    let vidaAcolito = 300;
    let damageAcolito = 10;

    while (vidaAcolito > 0) {

        if (arrayClaseSelected.vida > 1) {

            let opcion = parseInt(prompt(`Un Acolito de la Colmena te Enfrenta! (Vida: ${vidaAcolito} Daño: ${damageAcolito})
            \n1) Atacar (100% de daño infligido, Posibilidad de critico)\n2) Defender ( 50% de daño infligido, Recuperas +10 de vida)\n3) Huir (Volver a la torre)
            \nTus estadisticas actuales son: Vida actual: ${arrayClaseSelected.vida} Daño: ${arrayClaseSelected.damage} `));

            if (isNaN(opcion)) {

                alert("Elige la opcion de la accion deseada, vuelve a intentarlo");

            } else {

                if (opcion > 0 && opcion < 4) {


                    switch (opcion) {

                        case 1:

                            numeroAleatorio();

                            if (numeroAleatorio() > 7) {

                                alert(`Le haz realizado un golpe critico ${arrayClaseSelected.damage * 2} al Acolito!
                            \nEl Acolito ataca! te quito ${damageAcolito} de vida`);
                                vidaAcolito = vidaAcolito - (arrayClaseSelected.damage * 2);
                                arrayClaseSelected.vida = arrayClaseSelected.vida - damageAcolito;

                            } else if (numeroAleatorio() > 3) {

                                alert(`Le haz infligido ${arrayClaseSelected.damage} al Acolito!
                            \nEl Acolito ataca! te quito ${damageAcolito} de vida`);
                                vidaAcolito = vidaAcolito - arrayClaseSelected.damage;
                                arrayClaseSelected.vida = arrayClaseSelected.vida - damageAcolito;

                            } else {

                                alert(`El Acolito a usado un escudo y te a negado tu daño 
                            \nEl Acolito ataca! te quito ${damageAcolito} de vida`);
                                vidaAcolito = vidaAcolito - arrayClaseSelected.damage;
                                arrayClaseSelected.vida = arrayClaseSelected.vida - damageAcolito;
                            }


                            break;
                        case 2:

                            numeroAleatorio();

                            if (numeroAleatorio() > 7) {

                                alert(`Haz bloqueado con exito un golpe y le haz realizado  ${arrayClaseSelected.damage} al Acolito!
                            \nRegeneras 20 de vida!`);
                                vidaAcolito = vidaAcolito - arrayClaseSelected.damage;
                                arrayClaseSelected.vida = arrayClaseSelected.vida + 20;

                            } else if (numeroAleatorio() > 3) {

                                alert(`Le haz infligido ${arrayClaseSelected.damage / 2} al Acolito!
                            \nBloqueas el Ataque del Acolito y te curas 10 de vida!`);
                                vidaAcolito = vidaAcolito - (arrayClaseSelected.damage / 2);
                                arrayClaseSelected.vida = arrayClaseSelected.vida + 10;

                            } else {

                                alert(`El Acolito te esquiva y te hace daño critico! 
                            \nEl Acolito ataca y te quita ${damageAcolito * 2} de vida`);
                                arrayClaseSelected.vida = arrayClaseSelected.vida - (damageAcolito * 2);
                            }

                            break;
                        case 3:

                            vidaAcolito = 0;
                            torre();
                            break;

                    }

                } else {

                    alert("Elige la opcion de la accion deseada, vuelve a intentarlo");


                }
            }




        } else {
            alert("Haz muerto...\nFIN DEL JUEGO");
            cerrarSesion();
        }

    }
    alert("Haz derrotado al Acolito! Ganaste 100 Insignias! mejora tu equipo para derrotar a Oryx!\nVolviendo a la torre...");
    arrayClaseSelected.insignias = arrayClaseSelected.insignias + 100;
    torre();
}

function bossOryx() {

    let vidaOryx = 10000;
    let damageOryx = 100;

    while (vidaOryx > 0) {

        if (arrayClaseSelected.vida > 1) {

            let opcion = parseInt(prompt(`Oryx se eleva listo para una batalla a muerte! (Vida: ${vidaOryx} Daño: ${damageOryx})
        \n1) Atacar (100% de daño infligido, Posibilidad de critico)\n2) Defender ( 50% de daño infligido, Recuperas +10 de vida)\n3) Huir (Volver a la torre)
        \nTus estadisticas actuales son: Vida actual: ${arrayClaseSelected.vida} Daño: ${arrayClaseSelected.damage} `));

            if (isNaN(opcion)) {

                alert("Elige la opcion de la accion deseada, vuelve a intentarlo");

            } else {

                if (opcion > 0 && opcion < 4) {

                    switch (opcion) {

                        case 1:

                            numeroAleatorio();

                            if (numeroAleatorio() > 7) {


                                alert(`Le haz realizado un golpe critico de ${arrayClaseSelected.damage * 2} a Oryx!
                        \nOryx ataca! te quito ${damageOryx} de vida`);
                                vidaOryx = vidaOryx - (arrayClaseSelected.damage * 2);
                                arrayClaseSelected.vida = arrayClaseSelected.vida - damageOryx;

                            } else if (numeroAleatorio() > 3) {

                                alert(`Le haz infligido ${arrayClaseSelected.damage} a Oryx!
                        \nOryx ataca! te quito ${damageOryx} de vida`);
                                vidaOryx = vidaOryx - arrayClaseSelected.damage;
                                arrayClaseSelected.vida = arrayClaseSelected.vida - damageOryx;

                            } else {

                                alert(`Oryx a su espada para bloquearte y te a negado tu daño 
                        \nOryx ataca! te quito ${damageOryx} de vida`);
                                vidaOryx = vidaOryx - arrayClaseSelected.damage;
                                arrayClaseSelected.vida = arrayClaseSelected.vida - damageOryx;
                            }


                            break;
                        case 2:

                            numeroAleatorio();

                            if (numeroAleatorio() > 7) {

                                alert(`Haz bloqueado con exito un golpe y le haz realizado  ${arrayClaseSelected.damage * 2} a Oryx!
                        \nRegeneras 200 de vida!`);
                                vidaOryx = vidaOryx - arrayClaseSelected.damage;
                                arrayClaseSelected.vida = arrayClaseSelected.vida + 200;

                            } else if (numeroAleatorio() > 3) {

                                alert(`Le haz infligido ${arrayClaseSelected.damage / 2} a Oryx!
                        \nBloqueas el Ataque a Oryx y te curas 100 de vida!`);
                                vidaOryx = vidaOryx - (arrayClaseSelected.damage / 2);
                                arrayClaseSelected.vida = arrayClaseSelected.vida + 100;

                            } else {

                                alert(`El Acolito te esquiva y te hace daño critico! 
                        \nOryx ataca y te quita ${damageOryx * 2} de vida`);
                                arrayClaseSelected.vida = arrayClaseSelected.vida - (damageOryx * 2);
                            }

                            break;
                        case 3:

                            vidaOryx = 0;
                            torre();
                            break;

                    }

                } else {

                    alert("Elige la opcion de la accion deseada, vuelve a intentarlo");


                }
            }


        } else {
            alert("Haz muerto...\nFIN DEL JUEGO");
            cerrarSesion();
        }

    }
    alert("Haz derrotado a Oryx! El Viajero estara a salvo... hasta que la colmena regrese. \nFIN DEL JUEGO");
    cerrarSesion();
}


function numeroAleatorio() {
    return Math.floor(Math.random() * 11);
}

function cerrarSesion() {
    alert("Gracias por jugar Destiny RPG, created by: JiovanniE3 :D");
    process.exit();
}

nuevaAventura();