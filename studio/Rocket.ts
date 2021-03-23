import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    
    sumMass(items: Payload[]): number {
        let sum = 0
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }

        return sum
    }

    currentMassKg(): number {
        let mass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)

        return mass
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true
        } else {
            return false
        }
    }

    addCargo(cargo: Cargo): boolean {
        let add = this.canAdd(cargo)

        if (add == true) {
            this.cargoItems.push(cargo)
            return true
        } else {
            return false
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let add = this.canAdd(astronaut)

        if (add == true) {
            this.astronauts.push(astronaut)
            return true
        } else {
            return false
        }
    }
}