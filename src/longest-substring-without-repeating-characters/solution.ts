interface Solution {
    substring: string;
    length: number;
}

export function lengthOfLongestSubstring(s: string): number {

    const isIn = (char: string, obj: Solution): boolean => {
        return obj.substring.indexOf(char) >= 0;
    }

    const isLonger = (solA: Solution, solB: Solution): boolean => {
        return solA.length > solB.length;
    }

    const appendChar = (sol: Solution, char: string) => {
        sol.substring += char;
        sol.length++;
    }

    const resetFromChar = (char: string, obj: Solution): Solution => {

        const startingIndex = obj.substring.indexOf(char) + 1;
        const newString = obj.substring.slice(startingIndex) + char;
        const newLength = obj.length - startingIndex + 1;
        return { substring: newString, length: newLength };
    };

    let best: Solution = {
        substring: "",
        length: 0
    }

    let curr: Solution = { ...best }

    s.split('').forEach(
        (char: string) => {
            if (isIn(char, curr)) {
                best = isLonger(curr, best) ? { ...curr } : best;
                curr = resetFromChar(char, curr);
            } else {
                appendChar(curr, char);
            }
        }
    );

    best = isLonger(curr, best) ? { ...curr } : best;

    return best.substring.length;
};