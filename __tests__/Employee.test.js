const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Stitch', 626, 'stitch626@hotmail.com');

    expect(employee.name).toBe('Stitch');
    expect(employee.id).toEqual(626);
    expect(employee.email).toBe('stitch626@hotmail.com');
});


test('get employee name', () => {
    const employee = new Employee('Stitch', 626, 'stitch626@hotmail.com');

    expect(employee.getName()).toBe('Stitch');
});

test('get employee id', () => {
    const employee = new Employee('Stitch', 626, 'stitch626@hotmail.com');

    expect(employee.getId()).toEqual(626);
});

test('get employee email', () => {
    const employee = new Employee('Stitch', 626, 'stitch626@hotmail.com');

    expect(employee.getEmail()).toBe('stitch626@hotmail.com');
});

test('get role for the employee', () => {
    const employee = new Employee('Stitch', 626, 'stitch626@hotmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
})