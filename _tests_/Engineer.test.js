const { expect } = require('@jest/globals');
const Engineer = require('../lib/_mocks_/Engineer.js');

test('creates Engineer object', () => {
    const engineer = new Engineer('name')

    expect(engineer.name).toBe('name');
});