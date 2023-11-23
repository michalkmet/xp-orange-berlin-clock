const berlinClock = require('./berlin-clock');

describe('Story1: Top light', () => {
  it("UAT1.1: When I pass time '00:00:01', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:01')).toBe('O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.2: When I pass time '00:00:02', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:02')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.3: When I pass time '00:00:03', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:03')).toBe('O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.4: When I pass time '00:00:04', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:04')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.5: When I pass time '00:00:07', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:07')).toBe('O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.6: When I pass time '00:00:08', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:08')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.7: When I pass time '00:00:22', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:22')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.8: When I pass time '00:00:29', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:29')).toBe('O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.9: When I pass time '00:00:59', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:59')).toBe('O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT1.10: When I pass time '00:00:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", () => {
    expect(berlinClock('00:00:00')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
});

describe('Story2: 1-minute row', () => {
  it("UAT2.1: When I pass time '00:01:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nY000'", () => {
    expect(berlinClock('00:01:00')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYOOO');
  });
  it("UAT2.2: When I pass time '00:02:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYY00'", () => {
    expect(berlinClock('00:02:00')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYOO');
  });
  it("UAT2.3: When I pass time '00:03:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYY0'", () => {
    expect(berlinClock('00:03:00')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYO');
  });
  it("UAT2.4: When I pass time '00:04:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYY'", () => {
    expect(berlinClock('00:04:00')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYY');
  });
  it("UAT2.5: When I pass time '00:05:00', then I should see 'Y\nOOOO\nOOOO\nYOOOOOOOOOO\n0000'", () => {
    expect(berlinClock('00:05:00')).toBe('Y\nOOOO\nOOOO\nYOOOOOOOOOO\nOOOO');
  });
  it("UAT2.6: When I pass time '00:06:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nY000'", () => {
    expect(berlinClock('00:06:00')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYOOO');
  });
  it("UAT2.7: When I pass time '00:08:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYY0'", () => {
    expect(berlinClock('00:08:00')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYO');
  });
  it("UAT2.8: When I pass time '00:12:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYY00'", () => {
    expect(berlinClock('00:12:00')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYOO');
  });
  it("UAT2.9: When I pass time '00:23:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYY0'", () => {
    expect(berlinClock('00:23:00')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYO');
  });
  it("UAT2.10: When I pass time '00:00:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\n0000'", () => {
    expect(berlinClock('00:00:00')).toBe('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
  });
});

describe('Story3: 5-minutes row', () => {
  it("UAT3.1: When I pass time '00:10:00', then I should see 'Y\nOOOO\nOOOO\nYY000000000\n0000'", () => {
    expect(berlinClock('00:10:00')).toBe('Y\nOOOO\nOOOO\nYYOOOOOOOOO\nOOOO');
  });
  it("UAT3.2: When I pass time '00:15:00', then I should see 'Y\nOOOO\nOOOO\nYYR00000000\n0000'", () => {
    expect(berlinClock('00:15:00')).toBe('Y\nOOOO\nOOOO\nYYROOOOOOOO\nOOOO');
  });
  it("UAT3.3: When I pass time '00:20:00', then I should see 'Y\nOOOO\nOOOO\nYYRY0000000\n0000'", () => {
    expect(berlinClock('00:20:00')).toBe('Y\nOOOO\nOOOO\nYYRYOOOOOOO\nOOOO');
  });
  it("UAT3.4: When I pass time '00:25:00', then I should see 'Y\nOOOO\nOOOO\nYYRYY000000\n0000'", () => {
    expect(berlinClock('00:25:00')).toBe('Y\nOOOO\nOOOO\nYYRYYOOOOOO\nOOOO');
  });
  it("UAT3.5: When I pass time '00:30:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYR00000\n0000'", () => {
    expect(berlinClock('00:30:00')).toBe('Y\nOOOO\nOOOO\nYYRYYROOOOO\nOOOO');
  });
  it("UAT3.6: When I pass time '00:35:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYRY0000\n0000'", () => {
    expect(berlinClock('00:35:00')).toBe('Y\nOOOO\nOOOO\nYYRYYRYOOOO\nOOOO');
  });
  it("UAT3.7: When I pass time '00:40:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYRYY000\n0000'", () => {
    expect(berlinClock('00:40:00')).toBe('Y\nOOOO\nOOOO\nYYRYYRYYOOO\nOOOO');
  });
  it("UAT3.8: When I pass time '00:45:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYRYYR00\n0000'", () => {
    expect(berlinClock('00:45:00')).toBe('Y\nOOOO\nOOOO\nYYRYYRYYROO\nOOOO');
  });
  it("UAT3.9: When I pass time '00:50:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYRYYRY0\n0000'", () => {
    expect(berlinClock('00:50:00')).toBe('Y\nOOOO\nOOOO\nYYRYYRYYRYO\nOOOO');
  });
  it("UAT3.10: When I pass time '00:55:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYRYYRYY\n0000'", () => {
    expect(berlinClock('00:55:00')).toBe('Y\nOOOO\nOOOO\nYYRYYRYYRYY\nOOOO');
  });
});

describe('Story4: 1-hour row', () => {
  it("UAT4.1: When I pass time '01:00:00', then I should see 'Y\nOOOO\nROOO\n00000000000\n0000'", () => {
    expect(berlinClock('01:00:00')).toBe('Y\nOOOO\nROOO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT4.2: When I pass time '02:00:00', then I should see 'Y\nOOOO\nRROO\n00000000000\n0000'", () => {
    expect(berlinClock('02:00:00')).toBe('Y\nOOOO\nRROO\nOOOOOOOOOOO\nOOOO');
  });
  it("UAT4.3: When I pass time '03:00:00', then I should see 'Y\nOOOO\nRRRO\n00000000000\n0000'", () => {
    expect(berlinClock('03:00:00')).toBe('Y\nOOOO\nRRRO\nOOOOOOOOOOO\nOOOO');
  });
});
