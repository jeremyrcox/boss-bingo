# boss-bingo
Web based bingo game using React, ES6, Node and hopefully some other fun trendy tech

Score is an integer (decimal) representation of a bitfield indicating which fields are covered. Fields are counted from top left, horizontally by row starting with the 7th bit. The last bit is unused. Winning boards are recognized by comparing score against the tweleve possible winning patterns using bitwise and operator (score & winInt == winInt):

Winning boards:
000000 11111 00000 00000 00000 00000 0 = 65011712
000000 00000 11111 00000 00000 00000 0 = 2031616
000000 00000 00000 11111 00000 00000 0 = 63488
000000 00000 00000 00000 11111 00000 0 = 1984
000000 00000 00000 00000 00000 11111 0 = 62
000000 10000 10000 10000 10000 10000 0 = 34636832
000000 01000 01000 01000 01000 01000 0 = 17318416
000000 00100 00100 00100 00100 00100 0 = 8659208
000000 00010 00010 00010 00010 00010 0 = 4329604
000000 00001 00001 00001 00001 00001 0 = 2164802
000000 10000 01000 00100 00010 00001 0 = 34087042
000000 00001 00010 00100 01000 10000 0 = 2236960