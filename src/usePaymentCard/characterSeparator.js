export const characterSeparator = (value, limit, separator) => {
    let output = [];
    for (let i = 0; i < value.length; i++) {
        if ( i !== 0 && i % limit === 0) {
            output.push(separator);
        }

        output.push(value[i]);
    }

    return output.join("");
}
