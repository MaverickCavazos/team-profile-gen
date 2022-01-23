const { expect } = require('@jest/globals');
const Manager = require('../lib/_mocks_/Manager.js');

test('creates Manager object', () => {
    const manager = new Manager('name')

    expect(manager.name).toBe('name');
});