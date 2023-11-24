function berlinClock(inputTime) {
  let resultClockStr = '';
  let secondsPart = 'O';
  let minutesPart = 'OOOO';
  let fiveMinutesPart = 'OOOOOOOOOOO';
  let hoursPart = 'OOOO';
  let fiveHoursPart = 'OOOO';
  let seconds = Number(inputTime.split(':')[2]);
  let minutes = Number(inputTime.split(':')[1]);
  let hours = Number(inputTime.split(':')[0]);

  if (seconds % 2 === 0) {
    secondsPart = 'Y';
  }

  [minutesPart, fiveMinutesPart] = calculateMinutes(minutes);
  [hoursPart, fiveHoursPart] = calculateHours(hours);
  resultClockStr = secondsPart + '\n' + fiveHoursPart + '\n' + hoursPart + '\n' + fiveMinutesPart + '\n' + minutesPart;
  return resultClockStr;
}

function calculateHours(hours) {
  return [calculateHoursPart(hours), calculateFiveHoursPart(hours)];
}

function calculateHoursPart(hours) {
  let hoursPart = '';
  switch (hours % 5) {
    case 0:
      hoursPart = 'OOOO';
      break;
    case 1:
      hoursPart = 'ROOO';
      break;
    case 2:
      hoursPart = 'RROO';
      break;
    case 3:
      hoursPart = 'RRRO';
      break;
    case 4:
      hoursPart = 'RRRR';
      break;
  }
  return hoursPart;
}

function calculateFiveHoursPart(hours) {
  let fiveHoursPart = 'OOOO';

  if (hours / 5 >= 1 && hours / 5 < 2) {
    fiveHoursPart = 'ROOO';
  } else if (hours / 5 >= 2 && hours / 5 < 3) {
    fiveHoursPart = 'RROO';
  } else if (hours / 5 >= 3 && hours / 5 < 4) {
    fiveHoursPart = 'RRRO';
  } else if (hours / 5 >= 4) {
    fiveHoursPart = 'RRRR';
  }

  return fiveHoursPart;
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
