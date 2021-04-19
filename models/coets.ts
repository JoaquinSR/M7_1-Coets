class Coet {
    codi: string;
    propulsors: Propulsor[] = new Array();

    constructor(codi: string) {
        this.codi = codi;
    }

    addPropulsor(propulsor: Propulsor): void {
        this.propulsors.push(propulsor);
    }

    propulsorsInfo(): string{
        let n:any;
        let propulsorsInfo:string = "";
        for (let i = 0; i < this.propulsors.length; i++){
            n=this.propulsors[i];
            propulsorsInfo+= "[" + n.actualPotencia + "/" + n.maxPotencia + "]";
        }
        return propulsorsInfo;
    }

    potenciActual(): number {
        let potenciActual: number = 0;
        for (let i = 0; i < this.propulsors.length; i++) {
            potenciActual += this.propulsors[i].actualPotencia;
        }
        return potenciActual;
    }

    maxPotencia(): number {
        let maxPotencia: number = 0;
        for (let i = 0; i < this.propulsors.length; i++) {
            maxPotencia += this.propulsors[i].maxPotencia;
        }
        return maxPotencia;

    }

    accelerate(): number {
        let newPotencia: number = 0;
        for (let i = 0; i <= this.propulsors.length - 1; i++) {
            if (this.propulsors[i].actualPotencia < this.propulsors[i].maxPotencia) {
                this.propulsors[i].actualPotencia += 10;
                newPotencia += this.propulsors[i].actualPotencia;
            }
        }
        return newPotencia;
    }

    break(): number {
        let newPotencia: number = 0;
        for (let i = 0; i <= this.propulsors.length - 1; i++) {
            if (this.propulsors[i].actualPotencia > 0) {
                this.propulsors[i].actualPotencia -= 10;
                newPotencia += this.propulsors[i].actualPotencia;
            }
        }
        return newPotencia;
    }
}