const Employee = require('../lib/Employee')
test('creates an employee object', () => {
    const employee = new Employee('Stitch', 626, 'stitch626@hotmail.com');

    expect(employee.name).toBe('Stitch');
    expect(employee.id).toEqual(626);
    expect(employee.email).toEqual('stitch626@hotmail.com');
});