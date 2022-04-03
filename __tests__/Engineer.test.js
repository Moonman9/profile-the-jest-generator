const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Stitch', 626, 'stitch626@hotmail.com', 'stitch626');

    expect(engineer.gitHub).toEqual(expect.any(String));
});

test('get engineer github', () => {
    const engineer = new Engineer('Stitch', 626, 'stitch626@hotmail.com', 'stitch626');

    expect(engineer.getGitHub()).toEqual('stitch626');
});

test('get engineer role', () => {
    const engineer = new Engineer('Stitch', 626, 'stitch626@hotmail.com', 'stitch626');

    expect(engineer.getRole()).toEqual('Engineer');
});