import '../Array.prototype.all';

describe('Array.prototype.where - chaining', function () {
  let customers;

  beforeEach(function () {
    customers = [
      { name: 'John', age: 15 },
      { name: 'Joe', age: 19 },
      { name: 'Adele', age: 21 },
      { name: 'Ben', age: 35 },
      { name: 'Jane', age: 24 }
    ];
  });

  describe('where + first', function () {
    describe('when condition matches any customer', function () {
      it('should return first element', function () {
        let customer = customers
          .where(customer => customer.age > 18)
          .first();

        expect(customer).toBe(customers[1]);
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return undefined', function () {
        let customer = customers
          .where(customer => customer.age > 65)
          .first();

        expect(customer).toBeUndefined();
      });
    });
  });

  describe('where + count', function () {
    describe('when condition matches any customer', function () {
      it('should return number of matching customers', function () {
        let count = customers
          .where(customer => customer.age > 18)
          .count();

        expect(count).toBe(4);
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return 0', function () {
        let count = customers
          .where(customer => customer.age > 65)
          .count();

        expect(count).toBe(0);
      });
    });
  });

  describe('where + any', function () {
    describe('when condition matches any customer', function () {
      it('should return true', function () {
        let any = customers
          .where(customer => customer.age > 18)
          .any();

        expect(any).toBe(true);
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return false', function () {
        let any = customers
          .where(customer => customer.age > 65)
          .any();

        expect(any).toBe(false);
      });
    });
  });

  describe('where + all', function () {
    describe('when condition matches all customer', function () {
      it('should return true', function () {
        let all = customers
          .where(customer => customer.name.startsWith('J'))
          .all(customer => customer.age > 12);

        expect(all).toBe(true);
      });
    });

    describe('when condition doesn\'t match all customer', function () {
      it('should return false', function () {
        let all = customers
          .where(customer => customer.age > 18)
          .all(customer => customer.name.startsWith('J'));

        expect(all).toBe(false);
      });
    });
  });

  describe('where + aggregate', function () {
    describe('when condition matches any customer', function () {
      it('should return aggregated result', function () {
        let aggregated = customers
          .where(customer => customer.name.startsWith('J'))
          .aggregate((prev, curr) => (prev.name || prev) + ', ' + curr.name);

        expect(aggregated).toBe('John, Joe, Jane');
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return initialValue', function () {
        let aggregated = customers
          .where(customer => customer.age > 65)
          .aggregate((prev, curr) => (prev.name || prev) + ', ' + curr.name, '');

        expect(aggregated).toBe('');
      });
    });
  });

  describe('where + take', function () {
    describe('when condition matches any customer', function () {
      it('should return first X customers that matches the condition', function () {
        let result = customers
          .where(customer => customer.age > 18)
          .take(2)
          .toArray();

        expect(result.length).toBe(2);
        expect(result[0]).toBe(customers[1]);
        expect(result[1]).toBe(customers[2]);
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return empty array', function () {
        let result = customers
          .where(customer => customer.age > 65)
          .take(4)
          .toArray();

        expect(result.length).toBe(0);
      });
    });
  });

  describe('where + takeWhile', function () {
    describe('when condition matches any customer', function () {
      it('should return first X customers that matches the condition', function () {
        let result = customers
          .where(customer => customer.name.startsWith('J'))
          .takeWhile(customer => customer.age < 18)
          .toArray();

        expect(result.length).toBe(1);
        expect(result[0]).toBe(customers[0]);
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return empty array', function () {
        let result = customers
          .where(customer => customer.name.startsWith('X'))
          .takeWhile(customer => customer.age < 18)
          .toArray();

        expect(result.length).toBe(0);
      });
    });
  });

  describe('where + select', function () {
    describe('when condition matches any customer', function () {
      it('should return names of all customers which matches the condition', function () {
        let result = customers
          .where(customer => customer.age > 18)
          .select(customer => customer.name)
          .toArray();

        expect(result).toEqual(['Joe', 'Adele', 'Ben', 'Jane']);
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return empty array', function () {
        let result = customers
          .where(customer => customer.name.startsWith('X'))
          .select(customer => customer.age)
          .toArray();

        expect(result.length).toBe(0);
      });
    });
  });

  describe('where +take + select', function () {
    describe('when condition matches any customer', function () {
      it('should return names of first 2 customers which matches the condition', function () {
        let result = customers
          .where(customer => customer.age > 18)
          .take(2)
          .select(customer => customer.name)
          .toArray();

        expect(result).toEqual(['Joe', 'Adele']);
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return empty array', function () {
        let result = customers
          .where(customer => customer.name.startsWith('X'))
          .take(2)
          .select(customer => customer.age)
          .toArray();

        expect(result.length).toBe(0);
      });
    });
  });

  describe('where + take + where', function () {
    it('should take first three customers which matches the condition, then it should filter only them', function () {
      let result = customers
        .where(customer => customer.age > 18)
        .take(3)
        .where(customer => customer.name.startsWith('J'))
        .toArray();

      expect(result).toEqual([customers[1]]);
    });
  });
});
