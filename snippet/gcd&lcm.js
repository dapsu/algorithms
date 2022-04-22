const makeGcd = (m, n) => {
    const tmp = m % n;
    if (tmp === 0) return n;
    return makeGcd(n, tmp);
};

const makeLcm = (m, n) => {
    return (m*n) / makeGcd(m, n);
}