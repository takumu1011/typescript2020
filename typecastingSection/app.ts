type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

// interface ElevatedEmployee extends Employee, Admin { };

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'];
  startDate:
}


interface Bird {
  type: 'bird',
  flyingSpeed: number;
}
interface Horse {
  type: 'horse',
  runningSpeed: number;
}
type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   if ('flyingSpeed' in animal) {
//     console.log(animal.flyingSpeed);
//   }
// }

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('移動速度：' + speed);
}

const paragraph = document.querySelector('p');

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'こんにちは';

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'こんにちは';
}

interface ErrorContainer {
  id: string;
  // hoge: number;
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  id: 'id',
  email: '正しいメールアドレス ではありません',
  username: 'ユーザー名に記号を含めることはできません',
  1: '数字はstringになりうるためstring型指定だが認められる'
}

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const fetchedUserData = {
  id: 'u1',
  name: 'user1',
  // job: {
  //   title: 'Developer',
  //   description: 'Typescript'
  // }
};

console.log(fetchedUserData?.job?.title);

const userInput = '';
const storedData = userInput ?? 'Default';
