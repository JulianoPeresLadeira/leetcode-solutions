/**
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R
*/

enum Direction {
    Increasing,
    Decreasing
}

export function convert(s: string, numRows: number): string {

    if (numRows == 1) return s;

    let charResultRow = [];
    let direction: Direction = Direction.Increasing;
    let zigzagPosition = 0;

    for (let index = 0; index < s.length; index++) {
        charResultRow[index] = zigzagPosition;

        if (direction == Direction.Increasing) {
            zigzagPosition++;
            if (zigzagPosition == numRows) {
                zigzagPosition -= 2;
                direction = Direction.Decreasing;
            }
        } else {
            zigzagPosition--;
            if (zigzagPosition < 0) {
                zigzagPosition += 2;
                direction = Direction.Increasing;
            }
        }
    }

    const pattern = [];

    charResultRow.forEach((row, index) => {
        if (!pattern[row]) {
            pattern[row] = '';
        }

        pattern[row] += s.charAt(index);
    })

    return pattern.reduce((curr, acc) => curr + acc, '');
};