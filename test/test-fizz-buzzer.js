const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    it('should produce error if input is not a number', function() {
        const notNum = [true, false, 'string', function() {}, [1, 2, 3]];
        notNum.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });

    it('should return "fizz-buzz" for multiples of 15', function() {
        [15, 30, 45].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it('should return "buzz" for multiples of 5', function() {
        [5, 10, 40].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });
    
    it('should return "fizz" for multiples of 3', function() {
        [3, 6, 9].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });

    it('should return number if not multiple of 3 or 5', function() {
        [1, 7, 22].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });
});