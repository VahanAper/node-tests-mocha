const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call saveUser with user object', () => {
    const email = 'test@test.com';
    const password = 123123;

    app.handleSignup(email, password);
    expect(db.saveUser)
      .toHaveBeenCalledWith({ email, password });
  });

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('Andrew', 25);

    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });
});
