import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { useWindowSize } from '../src';

function App() {
    const { width, height } = useWindowSize();

    return (
        <h1 data-testid="test-header">{`width is ${width}, height is ${height}`}</h1>
    );
}

afterEach(cleanup);

describe('useWindowSize()', () => {
    test('returns initial dimensions', () => {
        const { getByTestId } = render(<App />);

        // assert that the useState portion of this hook returns the proper values
        expect(getByTestId('test-header')).toHaveTextContent(
            'width is 1024, height is 768'
        );
    });
});
