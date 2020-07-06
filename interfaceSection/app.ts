interface Named {
  readonly name: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

type AddFn = (a: number, b: number) => number;

let addnum: AddFn;
addnum = (n1: number, n2: number) => {
  return n1 + n2;
};

// interface AddFn {
//   (a: number, b: number): number;
// }

// type Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

class Person implements Greetable {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase);
  }
}

// let user1: Person;
// user1 = {
//   name: 'Max',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase);
//   },
// };
