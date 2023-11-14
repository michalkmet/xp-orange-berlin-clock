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

  if (minutes === 1 || minutes === 6) {
    minutesPart = 'YOOO';
  } else if (minutes === 2) {
    minutesPart = 'YYOO';
  } else if (minutes === 3) {
    minutesPart = 'YYYO';
  } else if (minutes === 4) {
    minutesPart = 'YYYY';
  }

  resultClockStr = secondsPart + '\n' + 'OOOO\nOOOO\nOOOOOOOOOOO' + '\n' + minutesPart;
  console.log('resultClockStr: ', resultClockStr);
  return resultClockStr;
}

module.exports = berlinClock;
