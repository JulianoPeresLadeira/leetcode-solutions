module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: '.\.(spec)\.ts?$',
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleFileExtensions: ['ts', 'js'],
    collectCoverage: true
}
