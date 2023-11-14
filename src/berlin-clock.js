function berlinClock(inputTime) {
  let resultClockStr = '';
  let secondsPart = 'O';
  let minutesPart = 'OOOO';
  let seconds = Number(inputTime.split(':')[2]);
  let minutes = Number(inputTime.split(':')[1]);
  // console.log('seconds: ', seconds);
  console.log('minutes: ', minutes);

  if (seconds % 2 === 0) {
    secondsPart = 'Y';
  }

  switch (minutes % 5) {
    case 0:
      minutesPart = 'OOOO';
      break;
    case 1:
      minutesPart = 'YOOO';
      break;
    case 2:
      minutesPart = 'YYOO';
      break;
    case 3:
      minutesPart = 'YYYO';
      break;
    case 4:
      minutesPart = 'YYYY';
      break;
  }

  resultClockStr = secondsPart + '\n' + 'OOOO\nOOOO\nOOOOOOOOOOO' + '\n' + minutesPart;
  console.log('resultClockStr: ', resultClockStr);
  return resultClockStr;
}

module.exports = berlinClock;
