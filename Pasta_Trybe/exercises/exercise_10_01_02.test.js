/* A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se o array passado por parâmetro não sofreu alterações
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
 */
const myRemover = require('./exercise_10_01_02');
describe('myRemover', () => {
    it('function return a new array copy of the without item remove', () => {
        expect(myRemover([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    it('function no remove item', () => {
        expect(myRemover([1, 2, 3, 4], 3)).not.toBe([1, 2, 4]);
    })
    it('the param item not to be changed', () => {
        expect(myRemover.array).not.toFalsy
    })
    it('function return a array expect ', () => {
        expect(myRemover([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })   
})

/* 
escribe('sum ', () => {
    test('deve somar dois valores', () => {
        expect(sum(4,5)).toBe(9);
        expect(sum(0,0)).toBe(0);
    }) */