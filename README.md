# Awesome repo

The "Berlin Clock" is the first public clock in the world that tells the time by means of illuminated, coloured fields, for which it entered the Guinness Book of Records upon its installation on 17 June 1975.

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

## Examples

Example 1

```
Time:     00:00:01
Top light:    off  
```

Example 2

```
Time:     00:00:02
Top light:    yellow  
```

Example 3

```
Time:     00:00:03
Top light:    off  
```

Example 4

```
Time:     00:00:04
Top light:    yellow  
```
Example 5

```
Time:     00:00:07
Top light:    off  
```

Example 6

```
Time:     00:00:08
Top light:    yellow  
```

Example 7

```
Time:     00:00:22
Top light:    yellow  
```

Example 8

```
Time:     00:00:29
Top light:    off  
```

Example 9

```
Time:     00:00:59
Top light:    off  
```

Example 10

```
Time:     00:00:00
Top light:    yellow  
```

Example 11

```
Time:     00:01:00
Minutes row:  Y000  
```

Example 12

```
Time:     00:02:00
Minutes row:  YY00  
```

Example 13

```
Time:     00:03:00
Minutes row:  YYY0  
```

Example 14

```
Time:     00:04:00
Minutes row:  YYYY 
```

Example 15

```
Time:     00:05:00
Minutes row:  0000 
```

Example 16

```
Time:     00:06:00
Minutes row:  Y000 
```

Example 17

```
Time:     00:08:00
Minutes row:  YYY0 
```

Example 18

```
Time:     00:12:00
Minutes row:  YY00 
```

Example 19

```
Time:     00:23:00
Minutes row:  YYY0 
```

Example 20

```
Time:     00:00:00
Minutes row:  0000 
```

Example 21

```
Time:     00:05:00
5-Minutes row:  Y0000000000 
```

Example 22

```
Time:     00:10:00
5-Minutes row:  YY000000000 
```

Example 23

```
Time:     00:15:00
5-Minutes row:  YYR00000000 
```

Example 24

```
Time:     00:20:00
5-Minutes row:  YYRY0000000 
```

Example 25

```
Time:     00:25:00
5-Minutes row:  YYRYY000000 
```

Example 26

```
Time:     00:30:00
5-Minutes row:  YYRYYR00000 
```

Example 27

```
Time:     00:35:00
5-Minutes row:  YYRYYRY0000 
```

Example 28

```
Time:     00:40:00
5-Minutes row:  YYRYYRYY000 
```

Example 29

```
Time:     00:45:00
5-Minutes row:  YYRYYRYYR00 
```

Example 30

```
Time:     00:50:00
5-Minutes row:  YYRYYRYYRY0 
```

Example 31

```
Time:     00:55:00
5-Minutes row:  YYRYYRYYRYY 
```

Example 32

```
Time:     00:00:00
5-Minutes row:  00000000000 
```

Example 33

```
Time:     01:00:00
1-hour row:  R000 
```

Example 34

```
Time:     02:00:00
1-hour row:  RR00 
```

Example 35

```
Time:     03:00:00
1-hour row:  RRR0 
```

Example 36

```
Time:     04:00:00
1-hour row:  RRRR
```

Example 37

```
Time:     05:00:00
1-hour row:  0000
```

Example 38
```
Time:     06:00:00
1-hour row:  Y000
```

Example 39
```
Time:     07:00:00
1-hour row:  YY00
```

Example 40
```
Time:     08:00:00
1-hour row:  YYY0
```

Example 41
```
Time:     09:00:00
1-hour row:  YYYY
```

Example 41
```
Time:     10:00:00
1-hour row:  0000
```


## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog
