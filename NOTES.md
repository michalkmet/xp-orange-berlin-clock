# Notes

The "Berlin Clock" is the first public clock in the world that tells the time by means of illuminated, coloured fields, for which it entered the Guinness Book of Records upon its installation on 17 June 1975.

alt text

The clock is read from the top row to the bottom. The top row of four red fields denote five full hours each, alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format. The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past), and the bottom row has another four yellow fields, which mark one full minute each. The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), but no fields are lit in the second row; therefore the hour value is 10.
Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), while the bottom row has one field on (plus one minute). Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock. The parameters should be as follows:

“O” = Light off
“R” = Red light
“Y” = Yellow light

Example Test Case:
Input String:
12:56:01

Output String:
O
RROO
RROO
YYRYYRYYRYY
YOOO

Please check the example test cases for the required output format.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans
Pomodoro 1:
- ✅ DONE Plan pomodoro 1
- ✅ DONE store backlog in BACKLOG.MD
- ✅ DONE Add project description
- ✅ DONE Initial refactor
- 🚧 IN PROGRESS Examples
- ⚠ TODO User stories

Pomodoro 2:
- ✅ DONE Examples
- 🚧 IN PROGRESS User stories

Pomodoro 3:
- ✅ DONE User stories
- ✅ DONE Story1: Top light
- ✅ DONE UAT1.1: When I pass time '00:00:01', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'
- ✅ DONE UAT1.2: When I pass time '00:00:02', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'
- ✅ DONE UAT1.3: When I pass time '00:00:03', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'
- ✅ DONE UAT1.4: When I pass time '00:00:04', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'
- ✅ DONE UAT1.5: When I pass time '00:00:07', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'
- ✅ DONE UAT1.6: When I pass time '00:00:08', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'
- 🚧 IN PROGRESS UAT1.7: When I pass time '00:00:22', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'

Pomodoro 4:
- ✅ DONE UAT1.7: When I pass time '00:00:22', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'
- ✅ DONE UAT1.8: When I pass time '00:00:29', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'
- ✅ DONE UAT1.9: When I pass time '00:00:59', then I should see '0\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'
- ✅ DONE UAT1.10: When I pass time '00:00:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'

- ✅ DONE Story2: 1-minute row
As a user, I want to see the lights in minutes row

- ✅ DONE UAT2.1: When I pass time '00:01:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nY000'
- ✅ DONE UAT2.2: When I pass time '00:02:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYY00'
- ✅ DONE UAT2.3: When I pass time '00:03:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYY0'
- ✅ DONE UAT2.4: When I pass time '00:04:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYY'
- ✅ DONE UAT2.5: When I pass time '00:05:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\n0000'
- 🚧 IN PROGRESS UAT2.6: When I pass time '00:06:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nY000'

Pomodoro 5:
- ✅ DONE UAT2.6: When I pass time '00:06:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nY000'
- ✅ DONE UAT2.7: When I pass time '00:08:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYY0'
- ✅ DONE UAT2.8: When I pass time '00:12:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYY00'
- ✅ DONE UAT2.9: When I pass time '00:23:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYY0'
- ✅ DONE UAT2.10: When I pass time '00:00:00', then I should see 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\n0000'

- ✅ DONE Story3: 5-minutes row
As a user, I want to see the lights in the 5-minutes row

- 🚧 IN PROGRESS UAT3.1: When I pass time '00:10:00', then I should see 'Y\nOOOO\nOOOO\nYY000000000\n0000'

Pomodoro 6:
- ✅ DONE UAT3.1: When I pass time '00:10:00', then I should see 'Y\nOOOO\nOOOO\nYY000000000\n0000'
- ✅ DONE UAT3.2: When I pass time '00:15:00', then I should see 'Y\nOOOO\nOOOO\nYYR00000000\n0000'
- ✅ DONE UAT3.3: When I pass time '00:20:00', then I should see 'Y\nOOOO\nOOOO\nYYRY0000000\n0000'
- ✅ DONE UAT3.4: When I pass time '00:25:00', then I should see 'Y\nOOOO\nOOOO\nYYRYY000000\n0000'
- ✅ DONE UAT3.5: When I pass time '00:30:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYR00000\n0000'
- ✅ DONE UAT3.6: When I pass time '00:35:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYRY0000\n0000'
- ✅ DONE UAT3.7: When I pass time '00:40:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYRYY000\n0000'

Pomodoro 7:
- ✅ DONE UAT3.8: When I pass time '00:45:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYRYYR00\n0000'
- ✅ DONE UAT3.9: When I pass time '00:50:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYRYYRY0\n0000'
- ✅ DONE UAT3.10: When I pass time '00:55:00', then I should see 'Y\nOOOO\nOOOO\nYYRYYRYYRYY\n0000'

- ✅ DONE Story4: 1-hour row
As a user, I want to see the lights in the 1-hour row

- ✅ DONE UAT4.1: When I pass time '01:00:00', then I should see 'Y\nOOOO\nROOO\n00000000000\n0000'
- ✅ DONE UAT4.2: When I pass time '02:00:00', then I should see 'Y\nOOOO\nRROO\n00000000000\n0000'
- ✅ DONE UAT4.3: When I pass time '03:00:00', then I should see 'Y\nOOOO\nRRRO\n00000000000\n0000'
- ✅ DONE UAT4.4: When I pass time '04:00:00', then I should see 'Y\nOOOO\nRRRR\n00000000000\n0000'
- ✅ DONE UAT4.5: When I pass time '05:00:00', then I should see 'Y\nROOO\n0000\n00000000000\n0000'
- ✅ DONE UAT4.6: When I pass time '06:00:00', then I should see 'Y\nOOOO\nR000\n00000000000\n0000'
- ✅ DONE UAT4.7: When I pass time '07:00:00', then I should see 'Y\nOOOO\nRR00\n00000000000\n0000'

Pomodoro 8:

- ✅ DONE UAT4.8: When I pass time '08:00:00', then I should see 'Y\nOOOO\nRRR0\n00000000000\n0000'
- ✅ DONE UAT4.9: When I pass time '09:00:00', then I should see 'Y\nROOO\nRRRR\n00000000000\n0000'
- ✅ DONE UAT4.10: When I pass time '10:00:00', then I should see 'Y\nRROO\n0000\n00000000000\n0000'
- ✅ DONE UAT4.11: When I pass time '15:00:00', then I should see 'Y\nOOOO\n0000\n00000000000\n0000'
- ✅ DONE UAT4.12: When I pass time '21:00:00', then I should see 'Y\nRRRR\nR000\n00000000000\n0000'

- 🚧 IN PROGRESS Story5: 5-hour row
As a user, I want to see the lights in the 5-hour row

- ✅ DONE UAT5.1: When I pass time '01:00:00', then I should see 'Y\nOOOO\nROOO\n00000000000\n0000'
- 🚧 IN PROGRESS  UAT5.2: When I pass time '05:00:00', then I should see 'Y\nROOO\n0OOO\n00000000000\n0000'

Pomodoro 9:
- ✅ DONE UAT5.2: When I pass time '05:00:00', then I should see 'Y\nROOO\n0OOO\n00000000000\n0000'
- ✅ DONE UAT5.3: When I pass time '09:00:00', then I should see 'Y\nROOO\nRRRR\n00000000000\n0000'
- ✅ DONE UAT5.4: When I pass time '10:00:00', then I should see 'Y\nRROO\n0000\n00000000000\n0000'
- ✅ DONE UAT5.5: When I pass time '15:00:00', then I should see 'Y\nRRRO\n0000\n00000000000\n0000'
- ✅ DONE UAT5.6: When I pass time '20:00:00', then I should see 'Y\nRRRR\n0000\n00000000000\n0000'
- 🚧 IN PROGRESS  UAT5.7: When I pass time '23:00:00', then I should see 'Y\nRRRR\nRRR0\n00000000000\n0000'

Pomodoro 10:
- ✅ DONE UAT5.7: When I pass time '23:00:00', then I should see 'Y\nRRRR\nRRR0\n00000000000\n0000'
- ✅ DONE UATs refactor
- ✅ DONE Tech debt - remove duplicate UATs
- 
- 🚧 IN PROGRESS Story6: random time
As a user, I want to see the lights for the random time
- ✅ DONE UAT6.1: When I pass time '12:56:01', then I should see 'O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO'
- ✅ DONE UAT6.2: When I pass time '22:32:45', then I should see 'O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO'