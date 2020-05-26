# Hooks

A library of useful, curated hooks

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
    -   [`useWindowScrollPosition()`](#usewindowscrollposition)
    -   [`useWindowSize()`](#useWindowSize)
    -   [`useLocalStorage()`](#useLocalStorage)
    -   [`useOnClickOutside()`](#useOnClickOutside)

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

## Inspiration

-   [the-platform](https://github.com/jaredpalmer/the-platform)
-   [Gabe Ragland](https://usehooks.com/)

---

MIT License
