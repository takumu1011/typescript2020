function Logger(logString: string) {
  console.log('Loggerファクトリー');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('テンプレートファクトリー');
  return function (_: Function) {
    console.log('テンプレートを表示');
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

// @Logger('ログ出力中 - PERSON');
@Logger('ログ出力中')
@WithTemplate('<h1>Personオブジェクト</h1>', 'app')
class Person {
  name = 'Max';
  constructor() {
    console.log('Personオブジェクト作成中');
  }
}

const pers = new Person();
console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
  console.log('Propertyデコレータ');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessorデコレータ');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('メソッドデコレータ');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('パラメータデコレータ');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('不正な価格です。0以下は設定できません。');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTxt(@Log4 tax: number) {
    return this._price * (1 + taxt);
  }
}
