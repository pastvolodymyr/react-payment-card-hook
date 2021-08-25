import React, {useState} from "react";
import {characterSeparator} from "./characterSeparator";
import {detectCardType} from "./detectCardType";

const CARD_REGEX = /^\d{0,16}$/g;
const SECURE_CODE_REGEX = /^\d{0,3}$/g;
const EXPIRE_REGEX = /^\d{0,4}$/g;

const removeSeparator = (value) => value.replace(/[^\d]/g, '');
const initConfig = {
    cardNumberInitialValue: '',
    cardNumberHideChar: '*',
    cardNumberSeparator: ' ',

    expireInitialValue: '',
    expireSeparator: '/',

    secureCodeInitialValue: '',
    secureCodeHideChar: '*',
}

export const usePaymentCard = (customConfig) => {
    const config = {
        ...initConfig,
        ...customConfig,
    }
    const {
        cardNumberInitialValue,
        cardNumberHideChar,
        cardNumberSeparator,

        expireInitialValue,
        expireSeparator,

        secureCodeInitialValue,
        secureCodeHideChar,
    } = config;

    const [fieldsData, setFieldsData] = useState({
        cardNumberValue: cardNumberInitialValue,
        cardNumberHideValue: cardNumberInitialValue ? characterSeparator(cardNumberHideChar.repeat(12)+cardNumberInitialValue.substr(-4), 4, ' ') : '',
        cardType: null,
        expireValue: expireInitialValue,
        secureCodeValue: secureCodeInitialValue,
        secureCodeHideValue: secureCodeInitialValue ? secureCodeHideChar.repeat(3) : '',
    })

    const onChange = (e) => {
        const workValue = removeSeparator(e.target.value);
        switch (e.target.name) {
            case 'cardNumber': {
                if(!workValue.match(CARD_REGEX)) {
                    return
                }
                setFieldsData({
                    ...fieldsData,
                    cardType: detectCardType(workValue),
                    cardNumberValue: characterSeparator(workValue, 4, cardNumberSeparator)
                })
                break;
            }
            case 'secureCode': {
                if(!workValue.match(SECURE_CODE_REGEX)) {
                    return
                }
                setFieldsData({
                    ...fieldsData,
                    secureCodeValue: workValue
                })
                break;
            }
            case 'expire': {
                if(!workValue.match(EXPIRE_REGEX)) {
                    return
                }
                setFieldsData({
                    ...fieldsData,
                    expireValue: characterSeparator(workValue, 2, expireSeparator)
                })
                break;
            }
        }
    }

    const onBlur = (e) => {
        const workValue = removeSeparator(e.target.value);
        switch (e.target.name) {
            case 'cardNumber': {
                if(workValue.length < 16) {
                    return
                }
                setFieldsData({
                    ...fieldsData,
                    cardNumberHideValue: characterSeparator(cardNumberHideChar.repeat(12)+workValue.substr(-4), 4, ' ')
                })
                break;
            }
            case 'secureCode': {
                if(workValue.length < 3) {
                    return
                }
                setFieldsData({
                    ...fieldsData,
                    secureCodeHideValue: secureCodeHideChar.repeat(3)
                })
                break;
            }
        }
    }

    const onFocus = (e) => {
        switch (e.target.name) {
            case 'cardNumber': {
                setFieldsData({
                    ...fieldsData,
                    cardNumberHideValue: ''
                })
                break;
            }
            case 'secureCode': {
                setFieldsData({
                    ...fieldsData,
                    secureCodeHideValue: ''
                })
                break;
            }
        }
    }

    return {
        onChange,
        onBlur,
        onFocus,
        fieldsData
    }
}
