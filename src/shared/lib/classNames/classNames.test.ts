import { classNames } from './classNames';

describe('classNames', () => {
    it('joins string arguments with spaces', () => {
        expect(classNames('a', 'b', 'c')).toBe('a b c');
    });

    it('includes numbers (converted to strings)', () => {
        expect(classNames('a', 1, 'b', 0)).toBe('a 1 b');
        // 0 is falsy and should be ignored by current implementation
    });

    it('ignores falsy primitives (false, null, undefined, empty string)', () => {
        expect(classNames('a', false, null, undefined, '', 'b')).toBe('a b');
    });

    it('supports arrays (including nested arrays)', () => {
        expect(classNames('a', ['b', ['c', null, ['d']]], 'e')).toBe('a b c d e');
    });

    it('supports object maps (truthy values included)', () => {
        expect(classNames({ a: true, b: false, c: 1, d: 0 })).toBe('a c');
    });

    it('preserves order: strings/arrays first, then object keys as iterated', () => {
        expect(classNames('a', ['b', 'c'], { d: true, e: true }, 'f')).toBe('a b c d e f');
    });

    it('keeps duplicates (does not dedupe)', () => {
        expect(classNames('a', 'a', { a: true })).toBe('a a a');
    });

    it('returns empty string for empty input', () => {
        expect(classNames()).toBe('');
    });

    it('returns empty string when all inputs are falsy', () => {
        expect(classNames(false, null, undefined, '', 0)).toBe('');
    });
});
