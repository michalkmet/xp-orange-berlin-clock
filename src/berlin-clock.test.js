const berlinClock = require('./berlin-clock');

describe('Story1: Top light', () => {
  it("UAT1.1: When I pass time '00:00:01', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:01')).toBe('0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
});
