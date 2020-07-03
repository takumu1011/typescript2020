"use strict";
function addSum(n1, n2) {
    return n1 + n2;
}
function printNum(num) {
    console.log(num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
console.log(printNum(addSum(5, 2)));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
function sendRequest(data, cb) {
    console.log(data);
    console.log({ data: data });
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', function (response) {
    console.log(response);
    return true;
});
