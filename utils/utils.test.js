const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  const res = utils.square(2);
  expect(res).toBe(4).toBeA('number');
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
  expect({ name: 'Vahan' }).toEqual({ name: 'Vahan' });
  expect([2, 3, 4]).toInclude(2);
  expect([2, 3, 4]).toExclude(5);
  expect({
    name: 'Vahan',
    age: 30,
    location:
    'Yerevan'
  }).toInclude({ age: 30});
});

it('should verify first and last names are set', () => {
  const user = { age: 30, location: 'Yerevan' };
  const newUser = utils.setName(user, 'Vahan Asryan');

  expect(newUser)
  .toBeA('object')
  .toInclude({ firstName: 'Vahan' })
  .toInclude({ lastName: 'Asryan' });
})
