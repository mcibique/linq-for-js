import Iterator from './Iterator';

describe('Iterator.toMap', function () {
  describe('when keySelector is missing', function () {
    it('should throw an error', function () {
      expect(function () {
        new Iterator([]).toMap();
      }).toThrow('KeySelector must be a function.');
    });

    describe('or is not a function', function () {
      it('should throw an error', function () {
        expect(function () {
          new Iterator([]).toMap('hello');
        }).toThrow('KeySelector must be a function.');
      });
    });
  });

  describe('when valueSelector is missing', function () {
    it('should throw an error', function () {
      expect(function () {
        new Iterator([]).toMap(i => i);
      }).toThrow('ValueSelector must be a function.');
    });

    describe('or is not a function', function () {
      it('should throw an error', function () {
        expect(function () {
          new Iterator([]).toMap(i => i, 'world');
        }).toThrow('ValueSelector must be a function.');
      });
    });
  });

  describe('when array has items', function () {
    let array,
        iterator,
        result;

    beforeEach(function () {
      array = [
        { userId: 1, vote: 'A' },
        { userId: 2, vote: 'B' },
        { userId: 3, vote: 'B' },
        { userId: 4, vote: 'A' },
        { userId: 5, vote: 'B' },
      ];
      iterator = new Iterator(array);
      result = iterator.toMap(item => item.userId, item => item.vote);
    });

    it('should return an instance of a Map', function () {
      expect(result instanceof Map).toBe(true);
    });

    it('should iterate over all items in the array', function () {
      expect(result.size).toBe(array.length);
      for (let i = 0, len = array.length; i < len; i++) {
        let item = array[i];
        let value = result.get(item.userId);
        expect(value).toBe(item.vote);
      }
    });
  });

  describe('when array is empty', function () {
    let array,
        iterator,
        result;

    beforeEach(function () {
      array = [];
      iterator = new Iterator(array);
      result = iterator.toMap(item => item, item => item);
    });

    it('should return empty array', function () {
      expect(result.size).toBe(0);
    });
  });
});
