const { expect } = require('@jest/globals');
const Employee = require('../lib/_mocks_/Employee.js');

test('creates Employee object', () => {
    const employee = new Employee('name')

    expect(employee.name).toBe('name');
});