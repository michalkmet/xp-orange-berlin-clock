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
  let fiveMinutesPart = 'OOOOOOOOOOO';
  if (minutes === 5) {
    fiveMinutesPart = 'YOOOOOOOOOO';
  } else if (minutes === 10) {
    fiveMinutesPart = 'YYOOOOOOOOO';
  } else if (minutes === 15) {
    fiveMinutesPart = 'YYROOOOOOOO';
  } else if (minutes === 20) {
    fiveMinutesPart = 'YYRYOOOOOOO';
  } else if (minutes === 25) {
    fiveMinutesPart = 'YYRYYOOOOOO';
  } else if (minutes === 30) {
    fiveMinutesPart = 'YYRYYROOOOO';
  } else if (minutes === 35) {
    fiveMinutesPart = 'YYRYYRYOOOO';
  }
  return fiveMinutesPart;
}

module.exports = berlinClock;
