/* inferred types */
// let myNamw: string = "JK";
// let isCool: boolean = true;
// let favNumber: number = 42;

// function add(a: number, b: number) {
//   return a + b;
// }
// console.log(add(40, 2));

/* union types */
// const numbersAndStrings: (string | number)[] = ["a", 1, "b", 2];
// console.log(numbersAndStrings);

// let theAnswer: string | number = 42;
// theAnswer = "42";

/* objects and interfaces */
// interface Person {
//   name: string;
//   favNumber: number;
// }

// function greet(person: Person) {
//   return `Hello ${person.name}`;
// }
// console.log(
//   greet({
//     name: "Jimmy",
//     favNumber: 42,
//   })
// );

/** optional properties */
type StreamerType = "affiliate" | "partner";

interface Person {
  name: string;
  favNumber: number;
  dogName?: string;
  streamerType: StreamerType;
  currentTime(): Date;
}

// type Person = {
//   name: string;
//   favNumber: number;
//   dogName?: string;
//   streamerType: StreamerType;
//   currentTime(): Date;
// };

function greet(person: Person) {
  if (person.currentTime()) {
    return `Hello ${person.name}, it is ${person.currentTime()}`;
  }
  return `Hello ${person.name}`;
}
console.log(
  greet({
    name: "Jimmy",
    favNumber: 42,
    streamerType: "affiliate",
    currentTime() {
      return new Date();
    },
  })
);

function greetPersonAndDog(person: Person) {
  if (person.dogName) {
    return `Hello ${person.name} and their dog ${
      person.dogName
    }, it is ${person.currentTime()}`;
  }
  return greet(person);
}

console.log(
  greetPersonAndDog({
    name: "Jimmy",
    favNumber: 42,
    dogName: "Rex",
    streamerType: "affiliate",
    currentTime() {
      return new Date();
    },
  })
);
