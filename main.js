class Personaje {
    constructor(id, clase, vidaMax, vidaAct, damage, insignias, pots, imgPerfil, imgFullBody) {
        this.id = id;
        this.clase = clase;
        this.vidaMax = vidaMax;
        this.vidaAct = vidaAct;
        this.damage = damage;
        this.insignias = insignias;
        this.pots = pots;
        this.imgPerfil = imgPerfil;
        this.imgFullBody = imgFullBody;
    }
}

class Enemy {
    constructor(id, name, imgFullBody, background) {
        this.id = id;
        this.name = name;
        this.imgFullBody = imgFullBody;
        this.background = background;

    }
}

const titan = new Personaje(1, "Titan", 150, 150, 100, 0, 0, "./imagenes/titanP.png", "./imagenes/titan1.png");
const cazador = new Personaje(2, "Cazador", 100, 100, 150, 0, 0, "./imagenes/cazadorP.png", "./imagenes/cazador.png");
const hechicero = new Personaje(3, "Hechicero", 50, 50, 250, 0, 0, "./imagenes/hechieroP.png",
    "./imagenes/hechicero.png");

const arrayClases = [];
let arrayEnemy;
let arrayClaseSelected = {};


let opcion = 0;
let selectedId = [];

arrayClases.push(hechicero);
arrayClases.push(titan);
arrayClases.push(cazador);



const mainElement = document.querySelector('main');
const menuStart = document.getElementById("menuStart");


let menuPj = `
<div class="actionBar auno">
    <div id="titanSelector" class="pj Titan">
        <div id="titanSelector" class="status">
            <p id="titanSelector">TITAN</p>
            <p id="titanSelector"> Salud: 150</p>
            <p id="titanSelector"> Daño base: 100</p>
        </div>
        <img id="titanSelector" src="./imagenes/titan2.png" alt="titan">
    </div>
    <div id="cazadorSelector" class="pj Cazador">
        <div id="cazadorSelector" class="status">
            <p id="cazadorSelector">CAZADOR</p>
            <p id="cazadorSelector"> Salud: 100</p>
            <p id="cazadorSelector"> Daño base: 150</p>
        </div>
        <img id="cazadorSelector" src="./imagenes/cazador.png" alt="cazador">
    </div>
    <div id="hechiceroSelector" class="pj Hechicero">
        <div id="hechiceroSelector" class="status">
            <p id="hechiceroSelector">HECHIERO</p>
            <p id="hechiceroSelector"> Salud: 50 </p>
            <p id="hechiceroSelector"> Daño base: 250</p>
        </div>
        <img id="hechiceroSelector" src="./imagenes/hechicero.png" alt="hechiero">
    </div>
</div>`;

menuStart.addEventListener('click', () => {

    mainElement.innerHTML = menuPj;

    const selectors = document.querySelectorAll('.pj');

    selectors.forEach((selector) => {
        selector.addEventListener('click', (event) => {

            const selectedElement = event.target;
            selectedId = selectedElement.id;

            console.log(`El usuario ha seleccionado ${selectedId}`);


            if (selectedId === 'titanSelector') {

                opcion = 1;

            } else if (selectedId === 'cazadorSelector') {

                opcion = 2;


            } else if (selectedId === 'hechiceroSelector') {

                opcion = 3;

            }

            arrayClaseSelected = arrayClases.find(item => item.id === opcion);


            torre();

        });
    });
});

if (localStorage.getItem("arrayClaseSelected")) {
    arrayClaseSelected = JSON.parse(localStorage.getItem("arrayClaseSelected"));
    torre();
}

function numeroAleatorio() {
    return Math.floor(Math.random() * 11);
}

function cerrarSesion() {
    alert("Gracias por jugar Destiny RPG, created by: JiovanniE3 :D");
    process.exit();
}


function torre() {


    let menuInt = `
<div class="actionBar ados">
    <img class="bg" src="./imagenes/menuInt.png" alt="">
    <div class="shop">
        <p>Tienda</p>
        <img id="shopSelector" src="./imagenes/Iris.png" alt="">
    </div>
    <div class="pve">
        <p>Expedicion</p>
        <img id="expSelector" src="./imagenes/cayde.png" alt="">
    </div>
</div>

<div class="graphicBar gdos">

    <div class="playerStatus">
        <img class="pjImg" src="${arrayClaseSelected.imgPerfil}" alt="pjHead">
        <div class="health-bar statusHeal">
            <div class="health-bar-fill"></div>
            <div class="health-bar-text"></div>
            <div class="health-bar-total"></div>
        </div>
    </div>
    <div class="items">
        <div class="attackNum numBox">${arrayClaseSelected.damage}</div>
        <div class="potsNum numBox">${arrayClaseSelected.pots}</div>
        <div>
            <img id="attack" class="item pjAttack" src="./imagenes/sword.png" alt="hechieroHead">
            <p> ATAQUE </p>
        </div>
        <div>
            <img id="defense" class="item pjDeffense" src="./imagenes/shield.png" alt="hechieroHead">
            <p> DEFENSA </p>
        </div>
        <div>
            <img id="healP" class="item pjHeal btnInt" src="./imagenes/potion.png" alt="hechieroHead">
            <p> CURACION </p>
        </div>
        <div>
            <img id="backHome" class="item pjBackMenu" src="./imagenes/pluma.png" alt="hechieroHead">
            <p> REGRESAR </p>
        </div>

    </div>

</div>`;

    let menuExp = `
<div class="actionBar expBg">

    <div class="pveMenu">
        <div class="pveOpc">
            <p>Incursion </p>
            <img id="incursionSelector" src="./imagenes/incursion.png" alt="incursion">
        </div>
        <div class="pveOpc">
            <p>Desafia a Savathûn</p>
            <img id="bossSelector" src="./imagenes/casco.png" alt="boss">
        </div>
    </div>

</div>

<div class="graphicBar gdos">

    <div class="playerStatus">
        <img class="pjImg" src="${arrayClaseSelected.imgPerfil}" alt="pjHead">
        <div class="health-bar statusHeal">
            <div class="health-bar-fill"></div>
            <div class="health-bar-text"></div>
            <div class="health-bar-total"></div>
        </div>
    </div>
    <div class="items">
        <div class="attackNum numBox">${arrayClaseSelected.damage}</div>
        <div class="potsNum numBox">${arrayClaseSelected.pots}</div>
        <div>
            <img id="attack" class="item pjAttack" src="./imagenes/sword.png" alt="hechieroHead">
            <p> ATAQUE </p>
        </div>
        <div>
            <img id="defense" class="item pjDeffense" src="./imagenes/shield.png" alt="hechieroHead">
            <p> DEFENSA </p>
        </div>
        <div>
            <img id="healP" class="item pjHeal btnInt" src="./imagenes/potion.png" alt="hechieroHead">
            <p> CURACION </p>
        </div>
        <div>
            <img id="backHome" class="item pjBackMenu btnInt" src="./imagenes/pluma.png" alt="hechieroHead">
            <p> REGRESAR </p>
        </div>

    </div>

</div>`;

    let incursionMenu = `
<div class="actionBar pveBg">

    <div class="combatLog">Un Caval te enfrenta</div>

    <div class="enemy">
        <img src="./imagenes/caval.png" alt="">
        <div class="health-bar-enemy ">
            <div class="health-bar-fill-enemy"></div>
            <div class="health-bar-text-enemy"></div>
            <div class="health-bar-total-enemy"></div>
        </div>
    </div>
    <div class="guardian">
        <img src="${arrayClaseSelected.imgFullBody}" alt="">
    </div>

</div>

<div class="graphicBar gdos">

    <div class="playerStatus">
        <img class="pjImg" src="${arrayClaseSelected.imgPerfil}" alt="pjHead">
        <div class="health-bar statusHeal">
            <div class="health-bar-fill"></div>
            <div class="health-bar-text"></div>
            <div class="health-bar-total"></div>
        </div>
    </div>
    <div class="items">
        <div class="attackNum numBox">${arrayClaseSelected.damage}</div>
        <div class="potsNum numBox">${arrayClaseSelected.pots}</div>
        <div>
            <img id="attack" class="item pjAttack" src="./imagenes/sword.png" alt="hechieroHead">
            <p> ATAQUE </p>
        </div>
        <div>
            <img id="defense" class="item pjDeffense" src="./imagenes/shield.png" alt="hechieroHead">
            <p> DEFENSA </p>
        </div>
        <div>
            <img id="healP" class="item pjHeal" src="./imagenes/potion.png" alt="hechieroHead">
            <p> CURACION </p>
        </div>
        <div>
            <img id="backHome" class="item pjBackMenu" src="./imagenes/pluma.png" alt="hechieroHead">
            <p> REGRESAR </p>
        </div>

    </div>

</div> `;
    let creditos = `
<div class="actionBar creditsArea ados">
    <p class="credits c1">Haz derrotado a Savathun, el Viajero estara a salvo... hasta que vuelva la colmena...</p>
    <p class="credits">Gracias por jugar Desitny RPG, Created by: JiovanniE :D</p>
</div>
`;

    let dead = `
<div class="actionBar creditsArea ados">
    <p class="credits c1">Haz muerto...</p>
    <p class="credits">Gracias por jugar Desitny RPG, Created by: JiovanniE :D</p>
</div>
`;

    let bossMenu = `
<div class="actionBar bossBg">

    <div class="combatLog">Savathun aparece para una batalla a muerte...</div>

    <div class="enemy boss">
        <img src="./imagenes/boss.jpg" alt="">
        <div class="health-bar-enemy ">
            <div class="health-bar-fill-enemy"></div>
            <div class="health-bar-text-enemy"></div>
            <div class="health-bar-total-enemy"></div>
        </div>
    </div>
    <div class="guardian">
        <img src="${arrayClaseSelected.imgFullBody}" alt="">
    </div>

</div>

<div class="graphicBar gdos">

    <div class="playerStatus">
        <img class="pjImg" src="${arrayClaseSelected.imgPerfil}" alt="pjHead">
        <div class="health-bar statusHeal">
            <div class="health-bar-fill"></div>
            <div class="health-bar-text"></div>
            <div class="health-bar-total"></div>
        </div>
    </div>
    <div class="items">
        <div class="attackNum numBox">${arrayClaseSelected.damage}</div>
        <div class="potsNum numBox">${arrayClaseSelected.pots}</div>
        <div>
            <img id="attack" class="item pjAttack" src="./imagenes/sword.png" alt="hechieroHead">
            <p> ATAQUE </p>
        </div>
        <div>
            <img id="defense" class="item pjDeffense" src="./imagenes/shield.png" alt="hechieroHead">
            <p> DEFENSA </p>
        </div>
        <div>
            <img id="healP" class="item pjHeal" src="./imagenes/potion.png" alt="hechieroHead">
            <p> CURACION </p>
        </div>
        <div>
            <img id="backHome" class="item pjBackMenu" src="./imagenes/pluma.png" alt="hechieroHead">
            <p> REGRESAR </p>
        </div>

    </div>

</div> `;


    let menuShop = `
<div class="actionBar ashop">
    <div class="shopMenu">
        <div class="shopItems">
            <p class="vendorMsg"> No digas, que no te lo advertí. </p>
        </div>
        <div class="shopItems">
            <img src="./imagenes/raw meat.png" alt="">
            <p class="shopDescription">Aumento de vida 50+ ( 10 insignias )</p>
            <p id="healtBuy" class="btnShop btnInt"> Comprar </p>
        </div>
        <div class="shopItems">
            <img src="./imagenes/sword.png" alt="">
            <p class="shopDescription">Aumento de daño 50+ ( 10 insignias )</p>
            <p id="attackBuy" class="btnShop btnInt"> Comprar </p>
        </div>
        <div class="shopItems">
            <img src="./imagenes/potion.png" alt="">
            <p class="shopDescription">Poscion de Curacion 100 vida ( 10 insignias )</p>
            <p id="potiBuy" class="btnShop btnInt"> Comprar </p>
        </div>
        <div class="coinsMount">
            <img src="./imagenes/coins.png" alt="">
            <p class="insigniasMsg">Insignias actuales : ${arrayClaseSelected.insignias}</p>
        </div>
    </div>


</div>

<div class="graphicBar gdos">

    <div class="playerStatus">
        <img class="pjImg" src="${arrayClaseSelected.imgPerfil}" alt="pjHead">
        <div class="health-bar statusHeal">
            <div class="health-bar-fill"></div>
            <div class="health-bar-text"></div>
            <div class="health-bar-total"></div>
        </div>
    </div>
    <div class="items">
        <div class="attackNum numBox">${arrayClaseSelected.damage}</div>
        <div class="potsNum numBox">${arrayClaseSelected.pots}</div>
        <div>
            <img id="attack" class="item pjAttack" src="./imagenes/sword.png" alt="hechieroHead">
            <p> ATAQUE </p>
        </div>
        <div>
            <img id="defense" class="item pjDeffense" src="./imagenes/shield.png" alt="hechieroHead">
            <p> DEFENSA </p>
        </div>
        <div>
            <img id="healP" class="item pjHeal btnInt" src="./imagenes/potion.png" alt="hechieroHead">
            <p> CURACION </p>
        </div>
        <div>
            <img id="backHome" class="item pjBackMenu btnInt" src="./imagenes/pluma.png" alt="hechieroHead">
            <p> REGRESAR </p>
        </div>

    </div>`;

    let reward = `        
    <div id="reward" class="rewardMsg">
        <p class="rewardDesc"> Haz acabado con el Caval! Conseguiste 100 ingsignias a Eris podrian interesarle cambiartelas por alguna mejora...</p>
        <p id="reward" class="rewardBtn" > Volver a la Torre </p>
    </div>`;

    localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));

    mainElement.innerHTML = menuInt;

    const buySelectors = document.querySelectorAll('.btnInt')

    function potUsed() {
        arrayClaseSelected.pots = arrayClaseSelected.pots - 1;
    }

    function attackNumMsg() {

        let numDmg = document.querySelector('.attackNum');

        numDmg.textContent = `${arrayClaseSelected.damage} `;
    }

    function potsNumMsg() {

        let numPots = document.querySelector('.potsNum');

        numPots.textContent = `${arrayClaseSelected.pots} `;
    }

    function insigniasMsg() {

        let numInsignias = document.querySelector('.insigniasMsg');

        numInsignias.textContent = `Insignias actuales : ${arrayClaseSelected.insignias} `;
    }

    function insignias100() {

        arrayClaseSelected.insignias = arrayClaseSelected.insignias + 100;

    }

    function healLoad() {

        let healthBarFill = document.querySelector('.health-bar-fill');
        let healthBarText = document.querySelector('.health-bar-text');
        let healthBarTotal = document.querySelector('.health-bar-total');

        function updateHealthBar(currentHealth, totalHealth) {

            currentHealth = Math.min(currentHealth, totalHealth);

            let healthPercent = Math.round(currentHealth / totalHealth * 100);

            healthBarFill.style.width = healthPercent + '%';

            healthBarText.textContent = currentHealth;

            healthBarTotal.textContent = '/' + totalHealth;
        }


        updateHealthBar(arrayClaseSelected.vidaAct, arrayClaseSelected.vidaMax);

    }

    attackNumMsg();
    potsNumMsg();
    healLoad();

    buySelectors.forEach((selector) => {

        selector.addEventListener('click', (event) => {

            const selectedItem = event.target;
            selectedId = selectedItem.id;

            if (selectedId === 'healP') {

                if (arrayClaseSelected.pots > 0) {

                    if (arrayClaseSelected.vidaAct >= arrayClaseSelected.vidaMax) {

                        return;

                    } else if (arrayClaseSelected.vidaAct + 100 > arrayClaseSelected.vidaMax) {

                        arrayClaseSelected.vidaAct = arrayClaseSelected.vidaMax;
                    } else {

                        arrayClaseSelected.vidaAct += 100;
                    }

                    potUsed();
                    potsNumMsg();
                    healLoad();
                    localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));
                }
            }

        })
    });

    const shopSelector = document.getElementById("shopSelector");

    shopSelector.addEventListener('click', () => {

        mainElement.innerHTML = menuShop;

        attackNumMsg();
        potsNumMsg();
        healLoad();

        const buySelectors = document.querySelectorAll('.btnInt');

        buySelectors.forEach((selector) => {
            selector.addEventListener('click', (event) => {

                const selectedItem = event.target;
                selectedId = selectedItem.id;

                if (selectedId === 'healtBuy') {

                    if (arrayClaseSelected.insignias >= 10) {

                        arrayClaseSelected.insignias = arrayClaseSelected.insignias - 10;
                        arrayClaseSelected.vidaMax = arrayClaseSelected.vidaMax + 50;
                        healLoad();
                        insigniasMsg();
                    }

                } else if (selectedId === 'attackBuy') {

                    if (arrayClaseSelected.insignias >= 10) {

                        arrayClaseSelected.insignias = arrayClaseSelected.insignias - 10;
                        arrayClaseSelected.damage = arrayClaseSelected.damage + 50;
                        attackNumMsg();
                        insigniasMsg();
                    }

                } else if (selectedId === 'potiBuy') {

                    if (arrayClaseSelected.insignias >= 10) {

                        arrayClaseSelected.insignias = arrayClaseSelected.insignias - 10;
                        arrayClaseSelected.pots = arrayClaseSelected.pots + 1;
                        potsNumMsg();
                        insigniasMsg();
                    }

                } else if (selectedId === 'healP') {

                    if (arrayClaseSelected.pots > 0) {

                        if (arrayClaseSelected.vidaAct >= arrayClaseSelected.vidaMax) {

                            return;

                        } else if (arrayClaseSelected.vidaAct + 100 > arrayClaseSelected.vidaMax) {

                            arrayClaseSelected.vidaAct = arrayClaseSelected.vidaMax;
                        } else {

                            arrayClaseSelected.vidaAct += 100;
                        }

                        potUsed();
                        healLoad();
                        potsNumMsg();
                    }
                }

                else if (selectedId === 'backHome') {

                    torre();
                }

                localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));

            })
        });

    });

    const expSelector = document.getElementById("expSelector");

    expSelector.addEventListener('click', () => {

        mainElement.innerHTML = menuExp;

        attackNumMsg();
        potsNumMsg();
        healLoad();

        const buySelectors = document.querySelectorAll('.btnInt');

        buySelectors.forEach((selector) => {
            selector.addEventListener('click', (event) => {

                const selectedItem = event.target;
                selectedId = selectedItem.id;

                if (selectedId === 'healP') {

                    if (arrayClaseSelected.pots > 0) {

                        if (arrayClaseSelected.vidaAct >= arrayClaseSelected.vidaMax) {

                            return;

                        } else if (arrayClaseSelected.vidaAct + 100 > arrayClaseSelected.vidaMax) {

                            arrayClaseSelected.vidaAct = arrayClaseSelected.vidaMax;
                        } else {

                            arrayClaseSelected.vidaAct += 100;
                        }

                        potUsed();
                        healLoad();
                        potsNumMsg();
                    }
                }

                else if (selectedId === 'backHome') {

                    torre();
                }

                localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));

            })
        });

        const bossSelector = document.getElementById("bossSelector");

        bossSelector.addEventListener('click', () => {

            mainElement.innerHTML = bossMenu;

            attackNumMsg();
            potsNumMsg();
            healLoad();

            let enemyHealtMax = 99999;
            let enemyHealt = 99999;
            let enemyDamage = 100;

            function enemyhealLoad() {

                let healthBarFillEnemy = document.querySelector('.health-bar-fill-enemy');
                let healthBarTextEnemy = document.querySelector('.health-bar-text-enemy');
                let healthBarTotalEnemy = document.querySelector('.health-bar-total-enemy');

                function updateHealthBarEnemy(currentHealth, totalHealth) {

                    currentHealth = Math.min(currentHealth, totalHealth);

                    let healthPercent = Math.round(currentHealth / totalHealth * 100);

                    healthBarFillEnemy.style.width = healthPercent + '%';

                    healthBarTextEnemy.textContent = currentHealth;

                    healthBarTotalEnemy.textContent = '/' + totalHealth;
                }

                updateHealthBarEnemy(enemyHealt, enemyHealtMax);
            }

            enemyhealLoad();

            const itemSelectors = document.querySelectorAll('.items');
            const combatLog = document.querySelector('.combatLog');

            itemSelectors.forEach((selector) => {
                selector.addEventListener('click', (event) => {

                    const selectedItem = event.target;
                    selectedId = selectedItem.id;

                    if (selectedId === 'attack') {

                        numeroAleatorio();

                        if (numeroAleatorio() > 7) {

                            combatLog.textContent = `Le haz realizado un golpe critico ${arrayClaseSelected.damage * 2} Savathun, Savathun ataca! te quito ${enemyDamage} de vida`;
                            enemyHealt = enemyHealt - (arrayClaseSelected.damage * 2);
                            arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct - enemyDamage;

                            attackNumMsg();
                            potsNumMsg();
                            healLoad();
                            enemyhealLoad();

                        } else if (numeroAleatorio() > 3) {


                            combatLog.textContent = `Le haz infligido ${arrayClaseSelected.damage} Savathun! Savathun ataca! te quito ${enemyDamage} de vida`;
                            enemyHealt = enemyHealt - arrayClaseSelected.damage;
                            arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct - enemyDamage;

                            attackNumMsg();
                            potsNumMsg();
                            healLoad();
                            enemyhealLoad();

                        } else {


                            combatLog.textContent = `Savathun a usado un escudo y te a negado tu daño Savathun ataca! te quito ${enemyDamage} de vida`;
                            arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct - enemyDamage;

                            attackNumMsg();
                            potsNumMsg();
                            healLoad();
                            enemyhealLoad();
                        }

                        localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));

                    } else if (selectedId === 'defense') {


                        numeroAleatorio();

                        if (numeroAleatorio() > 7) {


                            combatLog.textContent = `Haz bloqueado con exito un golpe y le haz realizado ${arrayClaseSelected.damage} Savathun! Regeneras 20 de vida!`;
                            enemyHealt = enemyHealt - arrayClaseSelected.damage;
                            arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct + 20;

                            attackNumMsg();
                            potsNumMsg();
                            healLoad();
                            enemyhealLoad();

                        } else if (numeroAleatorio() > 3) {

                            combatLog.textContent = `Le haz infligido ${arrayClaseSelected.damage / 2} Savathun! Bloqueas el Ataque dSavathun y te curas 10 de vida!`;
                            enemyHealt = enemyHealt - (arrayClaseSelected.damage / 2);
                            arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct + 10;

                            attackNumMsg();
                            potsNumMsg();
                            healLoad();
                            enemyhealLoad();

                        } else {

                            combatLog.textContent = `Savathun te esquiva y te hace daño critico! Savathun ataca y te quita ${enemyDamage * 2} de vida `;
                            arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct - (enemyDamage * 2);

                            attackNumMsg();
                            potsNumMsg();
                            healLoad();
                            enemyhealLoad();
                        }

                        localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));

                    } else if (selectedId === 'healP') {

                        if (arrayClaseSelected.pots > 0) {

                            if (arrayClaseSelected.vidaAct >= arrayClaseSelected.vidaMax) {

                                combatLog.textContent = `No puedes curarte`;
                                return;

                            } else if (arrayClaseSelected.vidaAct + 100 > arrayClaseSelected.vidaMax) {

                                combatLog.textContent = `Te haz curado`;
                                arrayClaseSelected.vidaAct = arrayClaseSelected.vidaMax;
                            } else {
                                combatLog.textContent = `Te haz curado`;
                                arrayClaseSelected.vidaAct += 100;
                            }

                            potUsed()
                            attackNumMsg();
                            potsNumMsg();
                            healLoad();
                            enemyhealLoad();
                        }

                        localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));

                    }
                    else if (selectedId === 'backHome') {

                        torre();
                    }

                    localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));

                    if (arrayClaseSelected.vidaAct < 1) { localStorage.clear(); mainElement.innerHTML = dead; } if (enemyHealt <= 0) {
                        localStorage.clear(); mainElement.innerHTML = creditos;
                    }
                })
            });
        }); const
            incursionSelector = document.getElementById("incursionSelector"); incursionSelector.addEventListener('click', () => {

                mainElement.innerHTML = incursionMenu;

                attackNumMsg();
                potsNumMsg();
                healLoad();

                let enemyHealtMax = 1000;
                let enemyHealt = 1000;
                let enemyDamage = 10;

                function enemyhealLoad() {

                    let healthBarFillEnemy = document.querySelector('.health-bar-fill-enemy');
                    let healthBarTextEnemy = document.querySelector('.health-bar-text-enemy');
                    let healthBarTotalEnemy = document.querySelector('.health-bar-total-enemy');

                    function updateHealthBarEnemy(currentHealth, totalHealth) {

                        currentHealth = Math.min(currentHealth, totalHealth);

                        let healthPercent = Math.round(currentHealth / totalHealth * 100);

                        healthBarFillEnemy.style.width = healthPercent + '%';

                        healthBarTextEnemy.textContent = currentHealth;

                        healthBarTotalEnemy.textContent = '/' + totalHealth;
                    }

                    updateHealthBarEnemy(enemyHealt, enemyHealtMax);
                }

                enemyhealLoad();

                const itemSelectors = document.querySelectorAll('.items');
                const combatLog = document.querySelector('.combatLog');

                itemSelectors.forEach((selector) => {
                    selector.addEventListener('click', (event) => {

                        const selectedItem = event.target;
                        selectedId = selectedItem.id;

                        if (selectedId === 'attack') {

                            numeroAleatorio();

                            if (numeroAleatorio() > 7) {

                                combatLog.textContent = `Le haz realizado un golpe critico ${arrayClaseSelected.damage * 2} El Caval, El Caval ataca! te quito ${enemyDamage} de vida`;
                                enemyHealt = enemyHealt - (arrayClaseSelected.damage * 2);
                                arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct - enemyDamage;

                                attackNumMsg();
                                potsNumMsg();
                                healLoad();
                                enemyhealLoad();

                            } else if (numeroAleatorio() > 3) {


                                combatLog.textContent = `Le haz infligido ${arrayClaseSelected.damage} El Caval! El Caval ataca! te quito ${enemyDamage} de vida`;
                                enemyHealt = enemyHealt - arrayClaseSelected.damage;
                                arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct - enemyDamage;

                                attackNumMsg();
                                potsNumMsg();
                                healLoad();
                                enemyhealLoad();

                            } else {


                                combatLog.textContent = `El Caval a usado un escudo y te a negado tu daño El Caval ataca! te quito ${enemyDamage} de vida`;
                                arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct - enemyDamage;

                                attackNumMsg();
                                potsNumMsg();
                                healLoad();
                                enemyhealLoad();
                            }

                            localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));

                        } else if (selectedId === 'defense') {


                            numeroAleatorio();

                            if (numeroAleatorio() > 7) {


                                combatLog.textContent = `Haz bloqueado con exito un golpe y le haz realizado ${arrayClaseSelected.damage} El Caval! Regeneras 20 de vida!`;
                                enemyHealt = enemyHealt - arrayClaseSelected.damage;
                                arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct + 20;

                                attackNumMsg();
                                potsNumMsg();
                                healLoad();
                                enemyhealLoad();

                            } else if (numeroAleatorio() > 3) {

                                combatLog.textContent = `Le haz infligido ${arrayClaseSelected.damage / 2} El Caval! Bloqueas el Ataque de El Caval y te curas 10 de vida!`;
                                enemyHealt = enemyHealt - (arrayClaseSelected.damage / 2);
                                arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct + 10;

                                attackNumMsg();
                                potsNumMsg();
                                healLoad();
                                enemyhealLoad();

                            } else {

                                combatLog.textContent = `El Caval te esquiva y te hace daño critico! El Caval ataca y te quita ${enemyDamage *
                                    2} de vida `;
                                arrayClaseSelected.vidaAct = arrayClaseSelected.vidaAct - (enemyDamage * 2);

                                attackNumMsg();
                                potsNumMsg();
                                healLoad();
                                enemyhealLoad();
                            }

                            localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));

                        } else if (selectedId === 'healP') {

                            if (arrayClaseSelected.pots > 0) {

                                if (arrayClaseSelected.vidaAct >= arrayClaseSelected.vidaMax) {

                                    combatLog.textContent = `No puedes curarte`;
                                    return;

                                } else if (arrayClaseSelected.vidaAct + 100 > arrayClaseSelected.vidaMax) {

                                    combatLog.textContent = `Te haz curado`;
                                    arrayClaseSelected.vidaAct = arrayClaseSelected.vidaMax;
                                } else {
                                    combatLog.textContent = `Te haz curado`;
                                    arrayClaseSelected.vidaAct += 100;
                                }

                                potUsed()
                                attackNumMsg();
                                potsNumMsg();
                                healLoad();
                                enemyhealLoad();
                            }

                            localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));
                        }
                        else if (selectedId === 'backHome') {

                            torre();
                        }

                        if (arrayClaseSelected.vidaAct < 1) { localStorage.clear(); mainElement.innerHTML = dead; }
                        if (enemyHealt <= 0) {

                            mainElement.innerHTML = reward + mainElement.innerHTML;
                        
                            const rewardBtn = document.getElementById("reward");

                            rewardBtn.addEventListener("click", function () {

                                    insignias100();
                                    localStorage.setItem("arrayClaseSelected", JSON.stringify(arrayClaseSelected));
                                    torre();
                                
                            });

                        }
                    })
                });
            });
    });
};