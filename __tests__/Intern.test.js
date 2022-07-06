const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Stitch', 626, 'stitch626@hotmail.com', 'Galactic Commander Academy')

    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school', () => {
    const intern = new Intern('Stitch', 626, 'stitch626@hotmail.com', 'Galactic Commander Academy');

    expect(intern.getSchool()).toEqual('Galactic Commander Academy');
});

test('get intern role', () => {
    const intern = new Intern('Stitch', 626, 'stitch626@hotmail.com', 'Galactic Commander Academy');

    expect(intern.getRole()).toEqual('Intern');
});