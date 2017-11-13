# AcM-NODEjs
#######  notes :
1. node js is asynchronous
2. when write var in string  by es6 use  \` \`
3. may write function by use `()=> {write code here}`

## out and input  by process:
use the class is the **process** :
### variable:
- **argv[]**:the array the same argv in c++ ` main(argv[]){}`,the array include **0**=> language path **1** => file path **2**=> parameter go past file
### function :
- **exit()**: use that if you want on the exit event
- **on()** :the function used when event is doing , and event common is:
1.  *exit* : the event exit process from terminal
### a class in the class :
##### stdout :
the class for out in terminal ,and include functions in the class  :
- **write("message")**

##### stdin :
the class for stand input from terminal , and include functions and events in the class :
-  **on()** : the function used when event is doing , and event common is:
1.  *data* : when you wrote in terminal and then enter OK
2. *readable*:doing that when allow read in terminal so read from terminal by function `process.stdin.read()`
3. *end*:doing that when hit Enter from keyboard with `crl+d`
- **resume()**:  the function used old nodejs because In "old" streams mode the stdin stream is paused by default.
4. **pause()**: the stream Input is paused.
## Math :
  the class for math function :.
### function :
- **min()**



## function:
- **split(separator , limit)** :Split a string into an array of substrings .
1. *separator*	Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item)
2. *limit*	Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array
- **The trim()** : method removes whitespace from both sides of a string.
- **parseInt()** : for convert thing to integer
