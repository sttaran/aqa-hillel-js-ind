import { EState } from "./enum";
import { ICar } from "./interface";


class Car implements ICar {
    brand: string;
    model: string;
    state: EState

    constructor(brand: string, model: string, state: EState){
        this.brand = brand
        this.model = model
        this.state = state
    }
    
    init(): void {
        throw new Error("Method not implemented.");
    }

    drive(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }

}


const myCar = new Car("Toyota", "Camry", EState.Used)