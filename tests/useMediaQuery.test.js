import React from 'react';
import { render, cleanup as cleanUpDOM } from '@testing-library/react';
import { renderHook, cleanup } from '@testing-library/react-hooks';
import { useMediaQuery } from '../src';

beforeEach(() => {
    const mediaQueryListMock = {
        listeners: {},
        matches: true,
        addListener(cb) {
            this.listeners.cb = cb;
        },
        removeListener() {
            delete this.listeners.cb;
        }
    };

    window.matchMedia = () => mediaQueryListMock;
});

afterEach(() => {
    delete window.matchMedia;
    cleanup();
    cleanUpDOM();
});

function App() {
    const isBig = useMediaQuery('(min-width: 900px)');

    return <h1 data-testid="test-header">{`window is large: ${isBig}`}</h1>;
}

describe('useMediaQuery()', () => {
    it('should return a boolean value', () => {
        const { result } = renderHook(() =>
            useMediaQuery('(min-width: 1024px)')
        );

        expect(result.current).toBe(true);
    });

    test('returns correct bool', () => {
        const { getByTestId } = render(<App />);

        // assert that the useState portion of this hook returns the proper values
        expect(getByTestId('test-header')).toHaveTextContent(
            'window is large: true'
        );
    });
});
