// const names: Array<string> = [];

// names[0].split(' ');

// const promise: Proomise<number> = new Promise<string>(resolve, reject) => {
//   setTimeout(() => {
//     resolve('終わりました');
//   }, 2000);
// }

// promise.then(data => {
//   data.split('');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string }, { age: number }>(
  { name: 'Max' },
  { age: 30 }
);
mergedObj.age;

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '値がありません';
  if (element.length > 0) {
    descriptionText = '値は' + element.length + '個です';
  }
  return [element, descriptionText];
}
