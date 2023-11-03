const berlinClock = require('./berlin-clock');

describe('hello', () => {
  it('should return hello', () => {
    expect(berlinClock()).toBe('hello');
  });
});
