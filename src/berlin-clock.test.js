const berlinClock = require('./berlin-clock');

describe('Story1: Top light', () => {
  it("UAT1.1: When I pass time '00:00:01', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:01')).toBe('0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.2: When I pass time '00:00:02', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:02')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.3: When I pass time '00:00:03', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:03')).toBe('0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.4: When I pass time '00:00:04', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:04')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
});
