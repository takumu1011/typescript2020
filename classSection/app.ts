class Department {
  // private readonly id: string;
  // name: string;
  private employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.id}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // private admins: string;
  constructor(id: string, private admins: string) {
    super(id, 'IT');
    // this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('レポートが見つかりません。');
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を設定してください');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

const employee1 = Department.createEmployee('Max');

const accounting = new ITDepartment('d1', 'Max');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.printEmployeeInfomation();

// const accountingCopy = { name: 'tkm',  describe: accounting.describe };
// accountingCopy.describe();
