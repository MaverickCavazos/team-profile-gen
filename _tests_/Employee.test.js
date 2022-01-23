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
    const employee = new Employee('name')

    expect(employee.name).toBe('name');
});

test('creates Employee getRole', () => {
    const employee = new Employee('Bob', 1, 'mav@gmail.com')
    const test = 'Employee'

    expect(employee.getRole).toBe(test);
});


test('creates Employee getName', () => {
    const employee = new Employee('name')
    const name = 'Bob'


    expect(employee.getName).toBe(name);
});