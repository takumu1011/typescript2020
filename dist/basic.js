"use strict";
console.log('ここにコードを追加します。');
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result';
add(number1, number2, printResult, resultPhrase);
var position;
(function (position) {
    position[position["ADMIN"] = 0] = "ADMIN";
    position[position["READ_ONLY"] = 1] = "READ_ONLY";
    position[position["AUTHOR"] = 2] = "AUTHOR";
})(position || (position = {}));
var person = {
    name: 'tkm',
    age: 22,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    position: position.ADMIN,
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
