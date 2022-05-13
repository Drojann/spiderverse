const spiderman = require("../app/spiderman");

describe("Unit test for spiderman class", () => {
    test('1) create an spiderman object', () => {

      const Andrew = new spiderman("spiderman sony",31,"Andrew Garfield",2,"sony")

      expect(Andrew.name).toBe("spiderman sony");
      expect(Andrew.age).toBe(31);
      expect(Andrew.actor).toBe("Andrew Garfield");
      expect(Andrew.movies).toBe(2);
      expect(Andrew.studio).toBe("sony");
    });

    test('2) use the method getInfo()', () => {

        const tomHolland = new spiderman("spiderman Marvel",25,"Tom Holland",5,"Marvel")
  
        expect(tomHolland.getInfo()).toBe("Hey i'm Tom Holland from Marvel studio");
    });

    
  })