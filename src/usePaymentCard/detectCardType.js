export const detectCardType = (value) => {
    const VISA_REGEX = /^4[0-9]{6,}$/g;
    const MASTER_CARD_REGEX = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/g;
    const AMERICAN_EXPRESS_REGEX = /^3[47][0-9]{5,}$/g;

    if(value.match(VISA_REGEX)) {
        return 'Visa'
    }
    if(value.match(MASTER_CARD_REGEX)) {
        return 'MasterCard'
    }
    if(value.match(AMERICAN_EXPRESS_REGEX)) {
        return 'AmericanExpress'
    }
    return 'Card'
}
