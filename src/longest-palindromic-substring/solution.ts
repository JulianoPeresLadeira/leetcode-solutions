interface Solution {
    substring: string,
    length: number
}

export function longestPalindrome(s: string): string {
    let palindromeChecks: number = 0;
    const isPalindrome = (inp: string): boolean => {
        palindromeChecks++;
        let lowerIndex = 0;
        let upperIndex = inp.length - 1;

        while (lowerIndex <= upperIndex) {
            if (inp.charAt(lowerIndex) != inp.charAt(upperIndex)) return false;
            lowerIndex++;
            upperIndex--;
        }

        return true;
    }

    if (s.length == 0) return '';
    if (isPalindrome(s)) return s;

    const splitInp = s.split('');
    const charMap: { [key: string]: [number] } = {};

    let bestSolution: Solution = {
        substring: splitInp[0],
        length: 1
    };

    splitInp.forEach(
        (char: string, index: number) => {
            const charIndexes = charMap[char] || [];

            for (let indexCounter = 0; indexCounter < charIndexes.length; indexCounter++) {
                const currIndex = charIndexes[indexCounter];
                const currentSize = index - currIndex + 1;
                if (currentSize <= bestSolution.length) {
                    indexCounter = Infinity;
                } else {
                    const substring = s.substring(currIndex, index + 1);
                    if (isPalindrome(substring)) {
                        bestSolution = {
                            substring: substring,
                            length: substring.length
                        }

                        indexCounter = Infinity;
                    }
                }
            }

            if (!charMap[char]) {
                charMap[char] = [index];
            } else {
                charMap[char].push(index);
            }
        }
    );

    return bestSolution.substring;
};