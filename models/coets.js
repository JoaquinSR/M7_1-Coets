var Coet = /** @class */ (function () {
    function Coet(codi) {
        this.propulsors = new Array();
        this.codi = codi;
    }
    Coet.prototype.addPropulsor = function (propulsor) {
        this.propulsors.push(propulsor);
    };
    Coet.prototype.propulsorsInfo = function () {
        var n;
        var propulsorsInfo = "";
        for (var i = 0; i < this.propulsors.length; i++) {
            n = this.propulsors[i];
            propulsorsInfo += "[" + n.actualPotencia + "/" + n.maxPotencia + "]";
        }
        return propulsorsInfo;
    };
    Coet.prototype.potenciActual = function () {
        var potenciActual = 0;
        for (var i = 0; i < this.propulsors.length; i++) {
            potenciActual += this.propulsors[i].actualPotencia;
        }
        return potenciActual;
    };
    Coet.prototype.maxPotencia = function () {
        var maxPotencia = 0;
        for (var i = 0; i < this.propulsors.length; i++) {
            maxPotencia += this.propulsors[i].maxPotencia;
        }
        return maxPotencia;
    };
    Coet.prototype.accelerate = function () {
        var newPotencia = 0;
        for (var i = 0; i <= this.propulsors.length - 1; i++) {
            if (this.propulsors[i].actualPotencia < this.propulsors[i].maxPotencia) {
                this.propulsors[i].actualPotencia += 10;
                newPotencia += this.propulsors[i].actualPotencia;
            }
        }
        return newPotencia;
    };
    Coet.prototype["break"] = function () {
        var newPotencia = 0;
        for (var i = 0; i <= this.propulsors.length - 1; i++) {
            if (this.propulsors[i].actualPotencia > 0) {
                this.propulsors[i].actualPotencia -= 10;
                newPotencia += this.propulsors[i].actualPotencia;
            }
        }
        return newPotencia;
    };
    return Coet;
}());
