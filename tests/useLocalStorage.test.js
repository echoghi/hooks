import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { useLocalStorage } from '../src';

function App() {
    const [name, setName] = useLocalStorage('name', 'Bob');

    return (
        <div>
            <h1 data-testid="test-header">{`Hi, my name is ${name}`}</h1>
            <button data-testid="test-button" onClick={() => setName('Hank')}>
                Change Name
            </button>
        </div>
    );
}

afterEach(cleanup);

describe('useLocalStorage()', () => {
    test('returns key value', () => {
        const { getByTestId } = render(<App />);

        // initial value is returned
        expect(getByTestId('test-header')).toHaveTextContent(
            'Hi, my name is Bob'
        );

        fireEvent(
            getByTestId('test-button'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true
            })
        );

        // new value is returned
        expect(getByTestId('test-header')).toHaveTextContent(
            'Hi, my name is Hank'
        );
    });
});
