function berlinClock(inputTime) {
  let resultClockStr = '';
  let secondsPart = 'O';
  let minutesPart = 'OOOO';
  let fiveMinutesPart = 'OOOOOOOOOOO';
  let seconds = Number(inputTime.split(':')[2]);
  let minutes = Number(inputTime.split(':')[1]);
  // console.log('seconds: ', seconds);
  console.log('minutes: ', minutes);

  if (seconds % 2 === 0) {
    secondsPart = 'Y';
  }

  [minutesPart, fiveMinutesPart] = calculateMinutes(minutes);
  resultClockStr = secondsPart + '\n' + 'OOOO\nOOOO\n' + fiveMinutesPart + '\n' + minutesPart;
  console.log('resultClockStr: ', resultClockStr);
  return resultClockStr;
}

function calculateMinutes(minutes) {
  let minutesPart = 'OOOO';
  let fiveMinutesPart = 'OOOOOOOOOOO';
  switch (minutes % 5) {
    case 0:
      minutesPart = 'OOOO';
      fiveMinutesPart = calculateFiveMinutesPart(minutes);
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
  return [minutesPart, fiveMinutesPart];
}

function calculateFiveMinutesPart(minutes) {
  let fiveMinutesStr = '';
  for (let i = 1; i <= 59; i++) {
    console.log('i: ', i);
    if (i % 5 === 0) {
      if (i <= minutes) {
        i % 15 === 0 ? (fiveMinutesStr += 'R') : (fiveMinutesStr += 'Y');
      } else {
        fiveMinutesStr += 'O';
      }
    }
  }
  return fiveMinutesStr;
}

module.exports = berlinClock;
