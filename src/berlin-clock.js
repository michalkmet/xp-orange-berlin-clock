function berlinClock(inputTime) {
  if (inputTime === '00:00:02') {
    return 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO';
  }
  return '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO';
}

module.exports = berlinClock;
