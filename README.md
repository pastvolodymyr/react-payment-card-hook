# react-payment-card-hook  💳

## Demo
https://pastvolodymyr.github.io/react-payment-card-hook/

## Install
Via package managers:

```bash
# With npm
npm i react-payment-card-hook

# With Yarn
yarn add react-payment-card-hook
```

## Usage
Here's an example of basic usage:
```js
import React, { useState } from 'react';
import {usePaymentCard} from "react-payment-card-hook";

export const App = () => {
    const {onFocus, onChange, onBlur, fieldsData} = usePaymentCard()

    return (
        <div>
            <h1>Example react-payment-card</h1>
            <label htmlFor="cardNumber">
                <p>Card number</p>
                <p>Card type: {fieldsData.cardType}</p>
                <input
                    name='cardNumber'
                    type="text"
                    id='cardNumber'
                    onFocus={onFocus}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={fieldsData.cardNumberHideValue || fieldsData.cardNumberValue || ''}
                />
            </label>
            <label htmlFor="expire">
                <p>Expire date</p>
                <input
                    name='expire'
                    type="text"
                    id='expire'
                    onFocus={onFocus}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={fieldsData.expireValue || ''}
                />
            </label>
            <label htmlFor="secureCode">
                <p>Secure code</p>
                <input
                    name='secureCode'
                    type="text"
                    id='secureCode'
                    onFocus={onFocus}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={fieldsData.secureCodeHideValue || fieldsData.secureCodeValue || ''}
                />
            </label>
        </div>
    )
}
```
## Props
```bash
cardNumberInitialValue: '', // Initial card number field value
cardNumberHideChar: '*',    // Card number field secure symbol
cardNumberSeparator: ' ',   // Card numbers separator
expireInitialValue: '',     // Initial expire date field value
expireSeparator: '/',       // Initial expire date field separator
secureCodeInitialValue: '', // Initial secure code field value
secureCodeHideChar: '*',    // Secure code field secure symbol
```

