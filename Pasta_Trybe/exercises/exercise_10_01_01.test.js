const sum = require('./exercise_10_01_01');
describe('sum ', () => {
    test('deve somar dois valores', () => {
        expect(sum(4,5)).toBe(9);
        expect(sum(0,0)).toBe(0);
    })
    test('deve lançar erro quando o valor é string ', () => {
        expect(() => {
          sum(4, '5');  
        }).toThrow();
    })
    test('error message "parameters must be numbers"', () => {
        expect(() => {
          sum('4', '5');
        }).toThrow(/parameters must be numbers/);
    })
})

