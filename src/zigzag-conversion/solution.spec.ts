import { convert } from './solution';

interface CustomTest {
    input: [string, number]
    output: string
}

describe('Problem 6, Zigzag Conversion',
    () => {
        describe('Example problems', () => {
            it('Example 1', () => { expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR') })
            it('Example 2', () => { expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI') })
            it('Example 3', () => { expect(convert('A', 1)).toEqual('A') })
        });

        const customTests: Array<CustomTest> = [
            { input: ['AB', 1], output: 'AB' }
        ];

        describe('Custom problems', () => {
            customTests.forEach(
                test => {
                    it(`${test.input[0]}, ${test.input[1]}`,
                        () => {
                            expect(convert(test.input[0], test.input[1])).toEqual(test.output);
                        });
                }
            )
        })
    }
)
