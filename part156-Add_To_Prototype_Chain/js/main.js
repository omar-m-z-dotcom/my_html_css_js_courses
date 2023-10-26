/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");
console.log(userOne.u);
console.log(User.prototype);
console.log(userOne);

User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString = "Elzero";

// Parent Class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// Derived Class
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.p = permissions;
//   }
// }

// class Superman extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions);
//     this.a = ability;
//   }
// }
// mixin
// let sayHiMixin = {
//   t: true,
//   sayHi() {
//     console.log(`Hello ${this.u}`);
//   },
//   sayBye() {
//     console.log(`Bye ${this.u}`);
//   }
// };

// let thanksMixin = {
//   f: false,
//   sayThanks() {
//     console.log(`Thanks ${this.u}`);
//   }
// };

// Object.assign(User.prototype, sayHiMixin);
// Object.assign(Admin.prototype, thanksMixin);

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);
// let superOne = new Superman(120, "Ahmed", 1, "Fly");

// console.log(userOne);
// console.log(adminOne);
// console.log(superOne);
// userOne.sayHi(); // Hi Elzero
// userOne.sayBye(); // Bye Elzero
// adminOne.sayThanks(); // Thanks Mahmoud

// userOne.sayHi(); // Hi Elzero
// userOne.sayBye(); // Bye Elzero
// userOne.sayThanks(); // Thanks Elzero
// console.log("####");
// adminOne.sayHi(); // Hi Mahmoud
// adminOne.sayBye(); // Bye Mahmoud
// adminOne.sayThanks(); // Thanks Mahmoud
// console.log("####");
// superOne.sayHi(); // Hi Ahmed
// superOne.sayBye(); // Bye Ahmed
// superOne.sayThanks(); // Thanks Ahmed
// console.log("####");
// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("####");
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());
// console.log("####");
// console.log(superOne.i);
// console.log(superOne.u);
// console.log(superOne.p);
// console.log(superOne.a);
// console.log(superOne.sayHello());
// console.log("####");
// console.log(userOne);
// console.log(adminOne);
// console.log(superOne);
// console.log("####");
// Object.setPrototypeOf(User.prototype, sayHiMixin); // overrides User.prototype to sayHiMixin object
// console.log("####");
// console.log(userOne);
// userOne.sayHi(); // Hello Elzero
// userOne.sayBye(); // Bye Elzero
// console.log("####");
// Object.setPrototypeOf(User.prototype, thanksMixin); // overrides User.prototype to thanksMixin object
// console.log(userOne);
// userOne.sayThanks(); // Thanks Elzero

// ** link for info about library for mixins in this url:https://github.com/download/mics#script-tag
// ** i personally don't recommend using it seems kinda of complicated and not easy to use
// ** but i will leave it here for future reference also another link for a different multi-inheritance library url:https://www.npmjs.com/package/extend-bases

// var Looker = mix(superclass => class Looker extends superclass {
//   constructor() {
//     super()
//     console.info('A looker is born!')
//   }
//   look() {
//     console.info('Looking good!')
//   }
// })

// console.log(typeof Looker);                 // 'function'
// console.log(typeof Looker.mixin);           // 'function'
// console.log(typeof Looker.class);           // 'function'
// console.log(typeof Looker.interface);       // 'object'

// let looker = new Looker()     // > A looker is born!
// looker.look()                 // > Looking good!
// console.log(looker instanceof Looker);     // true
// looker = Looker()         // > A looker is born!
// looker.look()                 // > Looking good!

// let Walker = mix(superclass => class Walker extends superclass {
//   walk() {
//     console.info('Step, step, step')
//   }
// })

// let walker = new Walker();

// let Talker = mix(superclass => class Talker extends superclass {
//   talk() {
//     return 'Blah, blah, blah';
//   }
// })

// let talker = new Talker();

// let Duck = mix(Looker, Walker, Talker, superclass => class Duck extends superclass {
//   talk() {
//     let org = super.talk()
//     console.info('Quack, quack, quack (Duckian for "' + org + '")')
//   }
// })

// let donald = Duck()
// donald.talk()                 // > Quack, quack, quack (Duckian for "Blah, blah, blah")

// console.log(walker instanceof Looker);
// console.log(talker instanceof Looker);
// console.log(talker instanceof Walker);
// console.log(donald instanceof Looker);
// console.log(donald instanceof Walker);
// console.log(donald instanceof Talker);
// console.log(is(walker, Looker));            // true
// console.log(is(talker, Looker))            // true
// console.log(is(talker, Walker))            // true
// console.log(is(donald, Looker))            // true
// console.log(is(donald, Walker))            // true
// console.log(is(donald, Talker))            // true
// console.log(is(donald, Looker))            // true
// let viewer = {                // create an object with the
//   look() { }                    // same interface as Looker
// }
// is(viewer, Looker)            // false, but
// like(viewer, Looker)          // true