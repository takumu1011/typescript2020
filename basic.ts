console.log('ここにコードを追加します。');

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('入力値が正しくありません');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result';
add(number1, number2, printResult, resultPhrase);

// const ADMIN = 1;
// const READ_ONLY = 2;
// const AUTHOR = 3;

enum position {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  position: number;
} = {
  name: 'tkm',
  age: 22,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  position: position.ADMIN,
};

//tuple型ではpushは許可されてしまうことに注意
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'hoge', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
