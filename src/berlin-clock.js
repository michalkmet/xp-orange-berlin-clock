function berlinClock(inputTime) {
  let resultClockStr = '';
  let secondsPart = 'O';
  let minutesPart = 'OOOO';
  let fiveMinutesPart = 'OOOOOOOOOOO';
  let hoursPart = 'OOOO';
  let seconds = Number(inputTime.split(':')[2]);
  let minutes = Number(inputTime.split(':')[1]);
  let hours = Number(inputTime.split(':')[0]);
  // console.log('seconds: ', seconds);
  console.log('hours: ', hours);

  if (seconds % 2 === 0) {
    secondsPart = 'Y';
  }

  [minutesPart, fiveMinutesPart] = calculateMinutes(minutes);
  hoursPart = calculateHours(hours);
  console.log('hoursPart: ', hoursPart);
  resultClockStr = secondsPart + '\n' + 'OOOO\n' + hoursPart + '\n' + fiveMinutesPart + '\n' + minutesPart;
  console.log('resultClockStr: ', resultClockStr);
  return resultClockStr;
}

function calculateHours(hours) {
  let result = '';

  // for (let i = 1; i <= 24; i++) {

  // }

  switch (hours) {
    case 0:
    case 5:
      result = 'OOOO';
      break;
    case 1:
    case 6:
      result = 'ROOO';
      break;
    case 2:
    case 7:
      result = 'RROO';
      break;
    case 3:
      result = 'RRRO';
      break;
    case 4:
      result = 'RRRR';
      break;
  }
  return result;
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
