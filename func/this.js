// console.log(this)


// const person = {
//   name: 'Alice',
//   greet: function() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// const personA = {
//   name: 'Alice',
//  greet: function() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// const personB = {
//   name: 'Peter',
// };


// personA.greet()


// personA.greet.call(personB)


const greet = function() {
    console.log(`Hello, ${this.name}!`);
  }


const personA = {
  name: 'Alice',
};

const personB = {
  name: 'Peter',
};


// greet.call(personA)
// greet.call(personB)


const aliceGreet = greet.bind(personA)


aliceGreet()
aliceGreet()