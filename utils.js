const html = (strings, ...values) => {
    let result = strings[0];
    values.forEach((v, i) => {
        result += v;
        result += strings[i + 1]
    })
    return result;
}

export { html };