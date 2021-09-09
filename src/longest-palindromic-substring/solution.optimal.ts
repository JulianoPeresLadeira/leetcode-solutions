interface Window {
    center: number;
    window: number;
}

export function longestPalindrome(s: string): string {
    const getPalindromeLength = (center, skip = 0) => {
        let index = skip;
        while (
            center - index >= 0 &&
            center + index < paddedString.length &&
            paddedString[center + index] === paddedString[center - index]
        ) {
            index++;
        }

        return index - 1;
    }

    const initializePalindromeArray = () => {
        const palindromes = [];
        for (let i = 0; i < paddedString.length; i++) {
            palindromes.push(0);
        }
        return palindromes;
    }

    const getEndOfWindow = (window: Window) => {
        return window.center + window.window;
    }

    const getNextSkip = (currentPosition, currentEndOfWindow) => {
        return Math.min(palindromes[2 * explorationWindow.center - currentPosition], (currentEndOfWindow - currentPosition));
    }

    const paddedString = '|' + s.split('').join('|') + '|';

    let explorationWindow: Window = {
        center: 1,
        window: 1
    };

    const palindromes = initializePalindromeArray();

    for (let i = 0; i < paddedString.length; i++) {
        let skip = 1;

        let endOfWindow = getEndOfWindow(explorationWindow);

        if (i < endOfWindow) {
            skip = getNextSkip(i, endOfWindow);
        }

        const palindromesLength = getPalindromeLength(i, skip);
        palindromes[i] = palindromesLength;

        const endOfNewWindow = i + palindromesLength;

        if (endOfNewWindow > endOfWindow) {
            explorationWindow = {
                center: i,
                window: palindromesLength
            };
        }
    }

    const longest = {
        start: 0,
        length: 1
    }

    palindromes.forEach((length, index) => {
        if (length > longest.length) {
            longest.start = ((index - length) / 2)
            longest.length = length
        }
    })

    return s.substr(longest.start, longest.length);
}
