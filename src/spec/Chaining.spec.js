import '../Array.prototype';

describe('Chaining', function () {
  let customers;

  beforeEach(function () {
    customers = [
      { name: 'John', age: 15 },
      { name: 'Joe', age: 19 },
      { name: 'Adele', age: 21 }
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

        expect(count).toBe(2);
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
          .aggregate((prev, curr) => prev.name + ', ' + curr.name);

        expect(aggregated).toBe('John, Joe');
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return initialValue', function () {
        let aggregated = customers
          .where(customer => customer.age > 65)
          .aggregate((prev, curr) => prev.name + ', ' + curr.name, '');

        expect(aggregated).toBe('');
      });
    });
  });

  describe('select + first', function () {
    it('should return first element', function () {
      let name = customers
        .select(customer => customer.name)
        .first();

      expect(name).toBe(customers[0].name);
    });
  });

  describe('select + sum', function () {
    it('should return sum of selected elements', function () {
      let sum = customers
        .select(customer => customer.age)
        .sum();

      expect(sum).toBe(55);
    });
  });

  describe('select + any', function () {
    describe('when condition matches any customer', function () {
      it('should return true', function () {
        let any = customers
          .select(customer => customer.name)
          .any(name => name.startsWith('A'));

        expect(any).toBe(true);
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return false', function () {
        let any = customers
          .select(customer => customer.age)
          .any(age => age > 65);

        expect(any).toBe(false);
      });
    });
  });

  describe('select + all', function () {
    describe('when condition matches all customer', function () {
      it('should return true', function () {
        let all = customers
          .select(customer => customer.age)
          .all(age => age > 12);

        expect(all).toBe(true);
      });
    });

    describe('when condition doesn\'t match all customer', function () {
      it('should return false', function () {
        let all = customers
          .select(customer => customer.name)
          .all(name => name.startsWith('J'));

        expect(all).toBe(false);
      });
    });
  });

  describe('select + where', function () {
    describe('when condition matches any customer', function () {
      it('should return true', function () {
        let result = customers
          .where(customer => customer.age > 18)
          .select(customer => customer.name)
          .toArray();

        expect(result).toEqual(['Joe', 'Adele']);
      });
    });

    describe('when condition doesn\'t match any customer', function () {
      it('should return false', function () {
        let result = customers
          .where(customer => customer.name.startsWith('X'))
          .select(customer => customer.age)
          .toArray();

        expect(result.length).toBe(0);
      });
    });
  });
});
