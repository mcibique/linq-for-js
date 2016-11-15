import '../Array.prototype';

describe('Array.prototype.aggregate', function () {
  describe('when no accumulator function is given', function () {
    it('should throw an error', function () {
      expect(function () {
        [].aggregate();
      }).toThrow();
    });
  });

  describe('when array has items', function () {
    let array;

    describe('when has initialValue', function () {
      beforeEach(function () {
        array = [1, 2, 3, 4, 5];
      });

      it('should aggregate all values', function () {
        let initialValue = 0;
        let accumulatorSpy = jest.fn((prev, curr) => prev + curr);
        let result = array.aggregate(accumulatorSpy, initialValue);
        expect(result).toBe(15);
        expect(accumulatorSpy).toHaveBeenCalledTimes(5);

        let firstIterationCall = accumulatorSpy.mock.calls[0];
        let initialValueSentToTheFirstCall = firstIterationCall[0];
        expect(initialValueSentToTheFirstCall).toBe(initialValue);
      });
    });

    describe('when doesn\'t have initialValue', function () {
      beforeEach(function () {
        array = ['John', 'Joe', 'Anna', 'Adele'];
      });

      it('should use first value as initialValue', function () {
        let accumulatorSpy = jest.fn((prev, curr) => prev + ', ' + curr);
        let result = array.aggregate(accumulatorSpy);
        expect(result).toBe('John, Joe, Anna, Adele');
        expect(accumulatorSpy).toHaveBeenCalledTimes(3);

        let firstIterationCall = accumulatorSpy.mock.calls[0];
        let initialValueSentToTheFirstCall = firstIterationCall[0];
        expect(initialValueSentToTheFirstCall).toBe('John');
      });
    });
  });

  describe('when array is empty', function () {
    let array;

    beforeEach(function () {
      array = [];
    });

    describe('when has initialValue', function () {
      it('should return initialValue', function () {
        let accumulatorSpy = jest.fn((prev, curr) => prev + curr);
        let result = array.aggregate(accumulatorSpy, 0);
        expect(result).toBe(0);
        expect(accumulatorSpy).toHaveBeenCalledTimes(0);
      });
    });

    describe('when doesn\'t have initialValue', function () {
      it('should return undefined', function () {
        let accumulatorSpy = jest.fn((prev, curr) => prev + curr);
        let result = array.aggregate(accumulatorSpy);
        expect(result).toBe(undefined);
        expect(accumulatorSpy).toHaveBeenCalledTimes(0);
      });
    });
  });
});
