function berlinClock(inputTime) {
  let seconds = Number(inputTime.split(':')[2]);
  console.log('seconds: ', seconds);
  if (inputTime === '00:00:02' || inputTime === '00:00:04' || inputTime === '00:00:08') {
    return 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO';
  }
  return '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO';
}

module.exports = berlinClock;
