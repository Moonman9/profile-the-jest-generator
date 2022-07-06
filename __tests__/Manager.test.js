const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Stitch', 626, 'stitch626@hotmail.com', 5206260000);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Stitch', 626, 'stitch626@hotmail.com', 5206260000);

    expect(manager.getRole()).toEqual('Manager');
});