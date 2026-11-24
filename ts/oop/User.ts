

class User {
    protected name : string
    private address: string

    constructor(name: string, address: string){
        this.address =  address
        this.name =  name
    }
}


class Admin extends User {
    
    printInfo(){
        console.log(this.name)
    }
}


const user1 = new User("Stas", "Dnipro")