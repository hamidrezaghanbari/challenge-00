import { getLetterMatchingCount } from "../../lib/utils/word-matching.util"

describe('test getLetterMatchingCount function', () => {
    const secretWord = 'party'

    test('if zero letter matching', () => {
        const letterMatchCount = getLetterMatchingCount('bones', secretWord)
        expect(letterMatchCount).toBe(0)
    })

    test('if three word(some words) matching', () => {
        const letterMatchCount = getLetterMatchingCount('train', secretWord)
        expect(letterMatchCount).toBe(3)
    })

    test('if repeated letter exist in word', () => {
        const letterMatchingCount = getLetterMatchingCount('parka', secretWord)
        expect(letterMatchingCount).toBe(3)
    })
})