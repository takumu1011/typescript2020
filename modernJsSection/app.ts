const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const personInfo = {
  firstname: 'Max',
  age: 30,
};

const copiedPerson = {
  ...personInfo,
};

const addFunc = (...numbers: number[]) => {
  return numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

const addedNumbers = addFunc(5, 10, 2, 3, 9);
console.log(addedNumbers);

const [hobby1, hobby2] = hobbies;

const { firstname, age } = personInfo;
