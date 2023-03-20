import { formatJobList } from "./Results";
import { formatQueryParams } from "./Results";

describe('La fonction formatJobList', () =>{

    it('should add a comma to a word', () => {
        const expectedState = "Items2,"
        expect(formatJobList('Items2', 3, 1)).toEqual(expectedState);
    });

    it('should not add a comma to the last element of the list', () => {
        const expectedState = "Items3"
        expect(formatJobList('Items3', 3, 2)).toEqual(expectedState);
    });

})

describe('La fonction formatQueryParams', () =>{
    
    it('should use the right format for param', () => {
        const expectedState = "a1=1"
        expect(formatQueryParams({1: 1})).toEqual(expectedState);
    });

    it('should concatenate params with an &', () => {
        const expectedState = 'a1=1&a2=1';
        expect(formatQueryParams({1: 1, 2: 1})).toEqual(expectedState);
    });
})








