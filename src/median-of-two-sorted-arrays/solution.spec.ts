import { findMedianSortedArrays } from './solution'

interface CustomTest {
    input: [Array<number>, Array<number>]
    output: number
}

describe('Problem 4, Median of Two Sorted Arrays',
    () => {
        describe('Example problems', () => {
            it('Example 1', () => { expect(findMedianSortedArrays([1, 3], [2])).toEqual(2) })
            it('Example 2', () => { expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5) })
            it('Example 3', () => { expect(findMedianSortedArrays([0, 0], [0, 0])).toEqual(0) })
            it('Example 4', () => { expect(findMedianSortedArrays([], [1])).toEqual(1) })
            it('Example 5', () => { expect(findMedianSortedArrays([2], [])).toEqual(2) })
        });

        const customTests: Array<CustomTest> = [
            { input: [[1, 7], [2]], output: 2 },
            { input: [[3, 7], [2]], output: 3 },
            { input: [[3, 7], [0, 0, 2]], output: 2 },
            { input: [[1, 1], []], output: 1 },
            { input: [[1, 2], []], output: 1.5 },
            { input: [[], [1, 1]], output: 1 },
            { input: [[], [1, 2]], output: 1.5 },
        ];

        describe('Custom problems', () => {
            customTests.forEach(
                test => {
                    it(`[${test.input[0].join(', ')}], [${test.input[1].join(', ')}]`, () => {
                        expect(findMedianSortedArrays(test.input[0], test.input[1])).toEqual(test.output);
                    })
                }
            );
        })
    }
)