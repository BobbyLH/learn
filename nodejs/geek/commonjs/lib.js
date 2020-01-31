exports.str = 'hello';

exports.fn = (a, b) => a + b;

setTimeout(() => console.log(exports), 1000);

module.exports = function minus(a, b) {
    return a - b;
}