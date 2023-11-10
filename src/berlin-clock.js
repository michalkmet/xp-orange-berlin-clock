function berlinClock(inputTime) {
  let resultClockStr = '';
  let secondsPart = '0';
  let minutesPart = 'OOOO';
  let seconds = Number(inputTime.split(':')[2]);
  let minutes = Number(inputTime.split(':')[1]);
  console.log('seconds: ', seconds);
  console.log('minutes: ', minutes);

  if (seconds % 2 === 0) {
    secondsPart = 'Y';
  }

  if (minutes === '01') {
    minutesPart = 'Y000';
  } else if (minutes === '02') {
    minutesPart = 'YY00';
  }

  resultClockStr = secondsPart + '\n' + 'OOOO\nOOOO\n00000000000' + '\n' + minutesPart;
  console.log('resultClockStr: ', resultClockStr);
  return resultClockStr;
}

module.exports = berlinClock;
