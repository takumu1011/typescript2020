function addSum(n1: number, n2: number) {
  return n1 + n2;
}

function printNum(num: number): void {
  console.log(num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

console.log(printNum(addSum(5, 2)));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

function sendRequest(data: string, cb: (response: any) => void) {
  console.log(data);
  console.log({ data: data });
  return cb({ data: 'Hi there!' });
}

sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
});
