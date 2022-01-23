const { expect } = require('@jest/globals');
const Intern = require('../lib/_mocks_/Intern.js');

test('creates Intern object', () => {
    const intern = new Intern('name')

    expect(intern.name).toBe('name');
});