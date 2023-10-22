import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('testX')).toBe('testX');
    });

    test('with two first params', () => {
        expect(classNames('testX testY')).toBe('testX testY');
    });

    test('with additional params', () => {
        const expected = 'testX cls1 cls2';
        expect(classNames(
            'testX',
            {},
            ['cls1', 'cls2']
        ))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'testX cls1 hovered scrollable';
        expect(classNames(
            'testX',
            { hovered: true, scrollable: true },
            ['cls1']
        ))
            .toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'testX cls1 hovered';
        expect(classNames(
            'testX',
            { hovered: true, scrollable: false },
            ['cls1']
        ))
            .toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'testX cls1 hovered';
        expect(classNames(
            'testX',
            { hovered: true, scrollable: undefined },
            ['cls1']
        ))
            .toBe(expected);
    });
});
