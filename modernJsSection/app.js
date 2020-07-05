"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var personInfo = {
    firstname: 'Max',
    age: 30,
};
var copiedPerson = __assign({}, personInfo);
var addFunc = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
};
var addedNumbers = addFunc(5, 10, 2, 3, 9);
console.log(addedNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1];
var firstname = personInfo.firstname, age = personInfo.age;
