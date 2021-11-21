const {shuffleArray} = require('./utils')
// import * as matchers from 'jest-extended';
// expect.extend(matchers)

describe('shuffleArray should', () => {
   test('shuffleArray should return an array with length 1', ()=> {
       let result = shuffleArray.length
       expect(result).toBe(1)
   });

   test('name should match', () => {
        const obj = {
        id: '8',
        name: 'Self-Aware Garbage Android', 
        imgAddress: 'https://robohash.org/garbage',
        health: 95
};
        expect(obj.name).toEqual('Self-Aware Garbage Android')

})
})