class Student {
    #name

    static innerName = "studentClass"

    constructor(name, age){
        this.#name = name
        this.age = age
        this._avgRating = 0
    }


    static printInnerName(){
         console.log(this.innerName)
    }

    greet() {
        console.log(`Hi I'am ${this.name}`)
    }




    // setRating(rating){
    //     this._avgRating = rating
    // }


    setName(name){
        this.#name = name
    }

    set rating(rating){
        if (rating <= 0){
            return
        }
        this._avgRating = rating
    }

    get rating(){
        return this._avgRating
    }
}


Student.printInnerName()
console.log(Student.innerName)


// const student1 = new Student("Stas", 31)
// const student2 = new Student("Marina", 22)



// student1.rating = -10
// student1.setName("ololo")
// console.log(student1.rating)

















class AdvancedStudent extends Student {
    constructor(){}
}




// student1.name = "Pablo"
// console.log(student1.name)

// student1.greet()
// student2.greet()


// student1._avgRating = 10 // DO NOT
// student1.setRating(10)

// student1.setName("pablo")
// console.log(student1)