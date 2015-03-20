import {SortValueConverter} from '../../src/sort';

describe('the SortValueConverter', () => {

    var sut;
    beforeEach(() => {
        sut = new SortValueConverter();
    });

    it('sorts an array according to a property', () => {
        var array = [ {id: 1, sortOrder:1}, {id:2, sortOrder:0}];
        // when
        var sortedArray = sut.toView(array, 'sortOrder');
        // then
        expect(sortedArray[0].id).toBe(2);
    });
});