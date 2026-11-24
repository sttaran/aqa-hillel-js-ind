// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   drive() {
//     // enable engine
//     // 
//     console.log(`${this.make} ${this.model} is driving.`);
//   }
// }

// const car = new Car("Toyota", "Camry")
// car.drive()


class ATM {
    #cashAvailableInATM 

    withdraw(card, amount){
        if (this.#cashAvailableInATM < amount){
            console.log("not enough in ATM")
            return
        }

        if (card.balance < amount) {
            console.log("not enough on card")
            return 
        }

        card.withdraw(amount)
        this.#cashAvailableInATM  -= amount
    }

}


class BankCard {
    #balance

    constructor(balance){
        this.#balance = balance;
    }

    withdraw(amount) {
        this.#balance -= amount
    }

    get balance(){
        return this.#balance
    }
}
































const nearestATM = new ATM(100_000)

const monoCard = new BankCard(10_000)


nearestATM.withdraw(monoCard, 10_001)

console.log(monoCard.balance)