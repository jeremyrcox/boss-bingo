# Boss Bingo
Web based bingo game using ES6, Babel, React, Redux, Node and hopefully some other fun trendy tech.

## Requirements

Requires Node 6.x or newer. Possibly works with 5.x, but has not been tested. Does not work in 4.x.

## Installation

Clone the repo and run `npm install`

Create a JSON file in the root directory (i.e. sibling of package.json) named *words.json*. This file should contain an array of at least 25 strings to be used to build the bingo board.
```javascript
[
 "word1",
 "word2",
 ...
]
```
Run `npm start` to start the server and then open your browser to http://localhost:3000

## Customize
You can update the heading and the port number in *config.json*. Regenerate *index.html* by running `npm run build`.

## Keeping Score

Score is an integer (decimal) representation of a bitfield indicating which fields are covered. Fields are counted from top left, horizontally by row starting with the 7th bit. The last bit is unused. A 1 indicates a covered space and 0 is not covered.
 
Winning boards are recognized by comparing score against the tweleve possible winning patterns using bitwise *and* operator:

`isWinning = (score & winInt == winInt)`.

More info at http://www.catonmat.net/blog/low-level-bit-hacks-you-absolutely-must-know/

### Winning boards:
* 000000 **11111 00000 00000 00000 00000** 0 = 65011712
* 000000 **00000 11111 00000 00000 00000** 0 = 2031616
* 000000 **00000 00000 11111 00000 00000** 0 = 63488
* 000000 **00000 00000 00000 11111 00000** 0 = 1984
* 000000 **00000 00000 00000 00000 11111** 0 = 62
* 000000 **10000 10000 10000 10000 10000** 0 = 34636832
* 000000 **01000 01000 01000 01000 01000** 0 = 17318416
* 000000 **00100 00100 00100 00100 00100** 0 = 8659208
* 000000 **00010 00010 00010 00010 00010** 0 = 4329604
* 000000 **00001 00001 00001 00001 00001** 0 = 2164802
* 000000 **10000 01000 00100 00010 00001** 0 = 34087042
* 000000 **00001 00010 00100 01000 10000** 0 = 2236960
