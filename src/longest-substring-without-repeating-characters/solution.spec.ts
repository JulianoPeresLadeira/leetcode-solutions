import { lengthOfLongestSubstring } from "./solution";

describe('Problem 3, Longest Substring Without Repeating Characters',
    () => {
        describe('Example problems', () => {
            it('Example 1', () => { expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3) })
            it('Example 2', () => { expect(lengthOfLongestSubstring("bbbbb")).toEqual(1) })
            it('Example 3', () => { expect(lengthOfLongestSubstring("pwwkew")).toEqual(3) })
            it('Example 4', () => { expect(lengthOfLongestSubstring("")).toEqual(0) })
        })

        let customTests = {
            'Andrés': 6,
            'abcabcabcd': 4,
            'abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcd': 4,
            'x': 1,
            'abcdefghijklmnopqrstuvxwyz': 26,
            'cçcçcçcçccççcçcçc': 2,
            '0123456789': 10,
            'dvdf': 3,
            'dvdfddfgcv': 5
        }

        describe('Custom examples', () => {
            Object
                .keys(customTests)
                .forEach(testInp => {
                    it(testInp, () => { expect(lengthOfLongestSubstring(testInp)).toEqual(customTests[testInp]) })
                });
        })
    }
);

