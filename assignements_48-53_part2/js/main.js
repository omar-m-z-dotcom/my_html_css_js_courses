let start = 10;
let end = 0;
let stop = 3;

// Output
/* 10
09
08
07
06
05
04
03 */

for (i = start; i > end; i--) {
    if (i == stop) {
        break;
    } else if (i < start) {
        console.log("0" + i);
    } else {
        console.log(i);
    }
}