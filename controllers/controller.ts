let coet: Coet;
let arrayCoets: Coet[] = new Array();

let infoR1: any = (<HTMLDivElement>document.getElementById('infoR1'));
let alertR1: any = (<HTMLDivElement>document.getElementById('alertR1'));
let infoR2: any = (<HTMLDivElement>document.getElementById('infoR2'));
let alertR2: any = (<HTMLDivElement>document.getElementById('alertR2'));

function createCoet(codi: string) {
    if (codi === '32WESSDS') {
        let propulsor1 = new Propulsor(0, 10);
        let propulsor2 = new Propulsor(0, 30);
        let propulsor3 = new Propulsor(0, 80);
        let propulsors: Propulsor[] = [propulsor1, propulsor2, propulsor3];
        addCoet(codi, propulsors);
    }
    if (codi === 'LDSFJA32') {
        let propulsor1 = new Propulsor(0, 30);
        let propulsor2 = new Propulsor(0, 40);
        let propulsor3 = new Propulsor(0, 50);
        let propulsor4 = new Propulsor(0, 50);
        let propulsor5 = new Propulsor(0, 30);
        let propulsor6 = new Propulsor(0, 10);
        let propulsors: Propulsor[] = [propulsor1, propulsor2, propulsor3, propulsor4, propulsor5, propulsor6];
        addCoet(codi, propulsors);
    }
}

function addCoet(codi: string, propulsors: Propulsor[]) {
    coet = new Coet(codi);
    for (let i = 0; i < propulsors.length; i++) {
        coet.addPropulsor(propulsors[i]);
    }
    arrayCoets.push(coet);
    console.log(coet);
    printCoet(codi);
}

function printCoet(codi: string) {
    for (let i = 0; i < arrayCoets.length; i++) {
        if (arrayCoets[i].codi === codi) {
            const [info, alert] = output(codi);
            info.innerHTML = `
            <br>
            <p><b>Codi Coet: ${arrayCoets[i].codi} </b></p>
            <p><b>Propulsors: ${arrayCoets[i].propulsors.length} - ${arrayCoets[i].propulsorsInfo()} </b></p>
            <p><b>Potencia Actual: ${arrayCoets[i].potenciActual()} / ${arrayCoets[i].maxPotencia()} </b></p>
            `;
            alert.innerHTML = ``
        }
    }
}

function accelerateCoet(codi: string) {
    for (let i = 0; i < arrayCoets.length; i++) {
        if (arrayCoets[i].codi === codi && arrayCoets[i].potenciActual() < arrayCoets[i].maxPotencia()) {
            arrayCoets[i].accelerate();
            printCoet(codi);
        } else if (arrayCoets[i].codi === codi && arrayCoets[i].potenciActual() === arrayCoets[i].maxPotencia()) {
            const [info, alert] = output(codi);
            alert.innerHTML = `El coet ${arrayCoets[i].codi} no pot accelerar més, està a la seva màxima potencia.`
        }
    }
}

function breakCoet(codi: string) {
    for (let i = 0; i < arrayCoets.length; i++) {
        if (arrayCoets[i].codi === codi && arrayCoets[i].potenciActual() > 0) {
            arrayCoets[i].break();
            printCoet(codi);
        } else if (arrayCoets[i].codi === codi && arrayCoets[i].potenciActual() === 0) {
            const [info, alert] = output(codi);
            alert.innerHTML = `El coet ${arrayCoets[i].codi} no pot frenar més,la seva potència és 0.`

        }
    }
}

function output(codi: string) {
    let info: any;
    let alert: any;
    if (codi === '32WESSDS') {
        info = infoR1;
        alert = alertR1;
    }
    if (codi === 'LDSFJA32') {
        info = infoR2;
        alert = alertR2;
    }
    return [info, alert];
}