const { expect } = require('@jest/globals');
const Employee = require('../lib/_mocks_/Employee.js');

test('creates Employee object', () => {
    const employee = new Employee()

    expect(typeof(employee)).toBe('object');
});

test('creates Employee name', () => {
    const employee = new Employee('name')
    const name = 'Bob'

    expect(employee.name).toBe(name);
});

test('creates Employee id', () => {
    const employee = new Employee('id')
    const id = 1

    expect(employee.id).toBe(id);
});

test('creates Employee email', () => {
    const employee = new Employee('email')
    const email = 'email@gmail.com'

    expect(employee.email).toBe(email);
});

test('creates Employee getRole', () => {
    const employee = new Employee('Bob', 1, 'mav@gmail.com')
    const test = 'Employee'

    expect(employee.getRole).toBe(test);
});


test('creates Employee getName', () => {
    const employee = new Employee('Bob')
    const test = 'Employee'


    expect(employee.getName).toBe(test);
});

test('creates Employee getEmail', () => {
    const employee = new Employee('email@gmail.com')
    const test = 'Employee'


    expect(employee.getEmail).toBe(test);
});

test('creates Employee getId', () => {
    const employee = new Employee(1)
    const test = 'Employee'


    expect(employee.getId).toBe(test);
});

