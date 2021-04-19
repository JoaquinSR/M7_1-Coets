var coet;
var arrayCoets = new Array();
var infoR1 = document.getElementById('infoR1');
var alertR1 = document.getElementById('alertR1');
var infoR2 = document.getElementById('infoR2');
var alertR2 = document.getElementById('alertR2');
function createCoet(codi) {
    if (codi === '32WESSDS') {
        var propulsor1 = new Propulsor(0, 10);
        var propulsor2 = new Propulsor(0, 30);
        var propulsor3 = new Propulsor(0, 80);
        var propulsors = [propulsor1, propulsor2, propulsor3];
        addCoet(codi, propulsors);
    }
    if (codi === 'LDSFJA32') {
        var propulsor1 = new Propulsor(0, 30);
        var propulsor2 = new Propulsor(0, 40);
        var propulsor3 = new Propulsor(0, 50);
        var propulsor4 = new Propulsor(0, 50);
        var propulsor5 = new Propulsor(0, 30);
        var propulsor6 = new Propulsor(0, 10);
        var propulsors = [propulsor1, propulsor2, propulsor3, propulsor4, propulsor5, propulsor6];
        addCoet(codi, propulsors);
    }
}
function addCoet(codi, propulsors) {
    coet = new Coet(codi);
    for (var i = 0; i < propulsors.length; i++) {
        coet.addPropulsor(propulsors[i]);
    }
    arrayCoets.push(coet);
    console.log(coet);
    printCoet(codi);
}
function printCoet(codi) {
    for (var i = 0; i < arrayCoets.length; i++) {
        if (arrayCoets[i].codi === codi) {
            var _a = output(codi), info = _a[0], alert_1 = _a[1];
            info.innerHTML = "\n            <br>\n            <p><b>Codi Coet: " + arrayCoets[i].codi + " </b></p>\n            <p><b>Propulsors: " + arrayCoets[i].propulsors.length + " - " + arrayCoets[i].propulsorsInfo() + " </b></p>\n            <p><b>Potencia Actual: " + arrayCoets[i].potenciActual() + " / " + arrayCoets[i].maxPotencia() + " </b></p>\n            ";
            alert_1.innerHTML = "";
        }
    }
}
function accelerateCoet(codi) {
    for (var i = 0; i < arrayCoets.length; i++) {
        if (arrayCoets[i].codi === codi && arrayCoets[i].potenciActual() < arrayCoets[i].maxPotencia()) {
            arrayCoets[i].accelerate();
            printCoet(codi);
        }
        else if (arrayCoets[i].codi === codi && arrayCoets[i].potenciActual() === arrayCoets[i].maxPotencia()) {
            var _a = output(codi), info = _a[0], alert_2 = _a[1];
            alert_2.innerHTML = "El coet " + arrayCoets[i].codi + " no pot accelerar m\u00E9s, est\u00E0 a la seva m\u00E0xima potencia.";
        }
    }
}
function breakCoet(codi) {
    for (var i = 0; i < arrayCoets.length; i++) {
        if (arrayCoets[i].codi === codi && arrayCoets[i].potenciActual() > 0) {
            arrayCoets[i]["break"]();
            printCoet(codi);
        }
        else if (arrayCoets[i].codi === codi && arrayCoets[i].potenciActual() === 0) {
            var _a = output(codi), info = _a[0], alert_3 = _a[1];
            alert_3.innerHTML = "El coet " + arrayCoets[i].codi + " no pot frenar m\u00E9s,la seva pot\u00E8ncia \u00E9s 0.";
        }
    }
}
function output(codi) {
    var info;
    var alert;
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
