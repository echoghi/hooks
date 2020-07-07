# Hooks

A library of useful hooks from across the [`web`](#inspiration).

## Install

> Note: React 16.8+ is required for Hooks.

### With npm

```sh
npm i @echoghi/hooks --save
```

### Or with yarn

```sh
yarn add @echoghi/hooks
```

## API

-   [Hooks](#hooks)

    -   [`useNetworkStatus()`](#useNetworkStatus)
    -   [`useWindowScrollPosition()`](#useWindowScrollPosition)
    -   [`useWindowSize()`](#useWindowSize)
    -   [`useLocalStorage()`](#useLocalStorage)
    -   [`useOnClickOutside()`](#useOnClickOutside)
    -   [`useMediaQuery()`](#useMediaQuery)

## Hooks

### `useNetworkStatus()`

Retrieve network status from the browser.

#### Returns

Object containing:

-   `isOnline: boolean`: `true` if the browser has network access. `false`
    otherwise.

-   `offlineAt?: Date`: Date when network connection was lost.

#### Example

```js
import { useNetworkStatus } from '@echoghi/hooks';

const Example = () => {
    const { isOnline, offlineAt } = useNetworkStatus();

    // ...
};
```

### `useWindowScrollPosition()`

#### Returns

Object containing:

-   `x: number`: Horizontal scroll in pixels (`window.pageXOffset`).
-   `y: number`: Vertical scroll in pixels (`window.pageYOffset`).

#### Example

```js
import { useWindowScrollPosition } from '@echoghi/hooks';

const Example = () => {
    const { x, y } = useWindowScrollPosition();

    // ...
};
```

### `useWindowSize()`

#### Returns

Object containing:

-   `width`: Width of browser viewport (`window.innerWidth`)
-   `height`: Height of browser viewport (`window.innerHeight`)

#### Example

```js
import { useWindowSize } from '@echoghi/hooks';

const Example = () => {
    const { width, height } = useWindowSize();

    // ...
};
```

### `useLocalStorage()`

#### Arguments

-   `key: string`: Key to the value in local storage
-   `value: string`: value to the key in local storage

#### Returns

Array containing:

-   [name]: Value to the key in local storage
-   [setName]: Setter function to the provided key

#### Example

```js
import { useLocalStorage } from '@echoghi/hooks';

const Example = () => {
    // Similar to useState but first arg is key
    // to the value in local storage.
    const [name, setName] = useLocalStorage('name', 'Bob');

    // ...
};
```

### `useOnClickOutside()`

#### Arguments

-   `ref: useRef`: A ref to an element created with useRef
-   `func: function`: a function to be fired within an effect when a click outside the ref is detected

#### Example

```js
import { useOnClickOutside } from '@echoghi/hooks';

const Example = () => {
    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();
    // State for our modal
    const [isModalOpen, setModalOpen] = useState(false);
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setModalOpen(false));

    // ...
};
```

### `useMediaQuery()`

Accepts a media query string then uses the [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API to determine if it matches with the current document.

#### Arguments

-   `string: media query string`:

#### Example

```js
import { useMediaQuery } from '@echoghi/hooks';

const Example = () => {
    const isSmall = useMediaQuery('(max-width: 48rem)');
    const isLarge = useMediaQuery('(min-width: 48rem)');

    return (
        <Demo>
            <p>Small view? {isSmall ? 'yes' : 'no'}</p>
            <p>Large view? {isLarge ? 'yes' : 'no'}</p>
        </Demo>
    );
};
```

## Inspiration

-   [the-platform](https://github.com/jaredpalmer/the-platform)
-   [useHooks](https://github.com/gragland/usehooks)
-   [beautiful-react-hooks](https://beautifulinteractions.github.io/beautiful-react-hooks/)

---

[![CircleCI](https://circleci.com/gh/echoghi/hooks.svg?style=svg)](https://circleci.com/gh/echoghi/hooks)

MIT License
