import DistinctIterator from './DistinctIterator';

describe('DistinctIterator', function () {
  describe('when array is not defined', function () {
    let array;

    beforeEach(function () {
      array = undefined;
    });

    it('should throw an error', function () {
      expect(function () {
        let iterator = new DistinctIterator(array);
      }).toThrow();
    });
  });
});
