function berlinClock(inputTime) {
  let seconds = Number(inputTime.split(':')[2]);
  console.log('seconds: ', seconds);

  if (seconds % 2 === 0) {
    return 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO';
  }

  return '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO';
}

module.exports = berlinClock;
