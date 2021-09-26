// const number = {
//     a: 100
// } 
// const string = {
//     name: "Jay"
// }
// let obj1 = {
//   value: "a"
// }
// let obj2 = {
//   value: "b"
// }
// let obj3 = obj2;
 
// function change(number, string, obj1, obj2) {
//     number.a = number.a * 10;
//     string.name = "Pete";
//     obj1 = obj2;
//     obj2.value = "c";
//     console.log(obj1)
// }
 
// change(number, string, obj1, obj2);
 
// //The outputs here before you run the code..
// console.log(number.a); 
// console.log(string.name);
// console.log(obj1.value);

// var tmp = 1 
// for (i =0; i < 4; i++) {
//     if (i < 4) {
//         tmp += 2 
//     }
//  else if (i > 4) {
//     tmp += 1 
//  } 
   
//  else
//    tmp = 0 
// }
  
// console.log(tmp);


// let x = "this is an array"
// let myArray = ["one", "two", "three", "four", "five", "six", x]

//    // myArray.push("end")
//    // myArray.unshift("start")
// myArray = ["startos",...myArray, "endos"]

// console.log(myArray)

// How to create a private variable in javascript!


// function secretVariable() {
//    var private = "supreSecret code"
// }

// let Array = ["one", "two", "three", "four", "five"]

// Array.unshift("zero")

// console.log(Array)

//  - - - 33333333333333333333333333333333333333333333333333333333333333333333333 - - -  //

// var hero = {
//    _name: "John Doe",
//    getSecretIdentity: function() {
//       return this._name
//    }
// }

// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero)

// console.log(stoleSecretIdentity())
// console.log(hero.getSecretIdentity())

// console.log(2 + '12')
// console.log(2 - ('10'))

// let functionA = function() {
//    {
//       let l = 'let'
//       var v = 'var'
//    }

//    console.log(v)
//    console.log(l)
// }

// functionA()

// console.log(5<6<7)  //true
// console.log(7>6>5)  //false

// // this is same like =>

// console.log((true<7) === (1<7))  //true
// console.log(true >5)  //false


// let profile = {
//    name: 'Vengis'
// };

// // Object.freeze(profile);
// // Object.seal(profile);
// profile.name = 'John';
// profile.age = 5;

// console.log(profile);

// let profile = {
//    name: 'John'
// }

// Object.defineProperty(profile, 'age', {
//    value: 3,
//    writable: false
// })

// profile.name = 'Vengi'
// profile.age = 5

// console.log(profile)

// Higher order functions

// const multiplyBy = function(num1) {
//     return function(num2) {
//       return num1 * num2
//    }
// }
// const multiplyByTwo = multiplyBy(2)
// var dvaXdeset = multiplyByTwo(10)
// console.log(dvaXdeset)

// //Arrow functions solution 

// const multiplyByA = (num1) => (num2)=> num1*num2
// console.log(multiplyByA(5)(5))

// let view;
// function initialize() {
//    let called = 0;
//    return function() {
//       if (called > 0) {
//          return;
//       } else {
//          view = '♀';
//          called++;
//          console.log('view has been set!');
//       }
//    }
// }
// // const startOnce = initialize();
// startOnce()
// initialize()
// initialize()

// const array = [1,2,3,4];
// for(let i=0; i<array.length; i++) {
//    setTimeout(function() {
//       console.log('I am at index ' + i)
//    }, 3000)
// }

// const dragon = {
//    name: 'Drexus',
//    fire: true,
//    fight() {
//       return 5
//    },
//    sing() {
//       if (this.fire) {
//          return `I am ${this.name}, the best fighter in the world!!`
//       }
//    }
// }

// const lizard = {
//    name: 'Kiki',
//    fight() {
//       return 1
//    }
// }

// const singLizard = dragon.sing.bind(lizard)

// lizard.__proto__ = dragon;
// console.log(singLizard())

// const person = {
//    name: 'Honza',
//    age: 23,
//    job: 'frontend developer',
//    saySometing() {
//       return `My name is ${this.name}, I'm ${this.age} old and I'm working as ${this.job}`
//    }

// }

// let intro = person.saySometing()
// console.log(intro)

// function changePerson(name, age, job) {
//    return person.saySometing() {
//       name + age + job
//    }
// }

// console.log(changePerson('Vengi', 23, 'student'))

// const obj1 = {
//    minusYear(date){
//       return date - 1
//    }
// }


// let lastYear = Object.create(obj1)
// let newDate = new Date

// console.log(newDate)
// // console.log(minusYear(2021))

// console.log(lastYear.minusYear(2021))

// //////////////////////////////////ú
// Date.prototype.lastYear = function() {
//     console.log(this.getFullYear() - 1);   
// }
// new Date('1988-10-10').lastYear()
// ///////////////////////////////////

// Array.prototype.map = function() {
//    let arr = [];
//    for (let i=0; i<this.length; i++) {
//       arr.push((this[i] + '♥'))
//    }
//    return arr
// }

// console.log([1,2,3].map())

// How would you be able to create your own .bind() method using call or apply.

// Hint:

//     Function.prototype.bind = function(){
//     }




// // Factory functions 
// const personFunctions = {
//    attack() {
//       return this.name + ' is working as ' + this.skill
//    }
// }

// function createPerson(name, age, skill) {
//    let newPerson = Object.create(personFunctions)
//    newPerson.name = name;
//    newPerson.age = age;
//    newPerson.skill = skill;
//    return newPerson
// }

// const John = createPerson('Honza', 23, 'frontend developer')

// const Bob = createPerson('Robert', 30, 'manager')

// console.log(John)
// console.log(John.attack())

// Consturctor functions
function Elf(name, weapon) {
   this.nameos = name;
   this.weaponos = weapon;
}

Elf.prototype.attack = function() {
   return 'This is my brutal attack with my ' + this.weaponos + ' !!'
}

const Sam = new Elf('sword', 'axe')
console.log(Sam.attack())
// console.log(Sam.nameos)
// console.log(Sam)
// let x = Sam.nameos
// console.log(x)

// const Funkcicka = new Function('name', 'level')


// const Honzin = new Funkcicka('Honzos', '13')
