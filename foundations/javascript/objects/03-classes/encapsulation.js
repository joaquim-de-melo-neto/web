// Person is the superclass
class Student extends Person {
    // private attribute
    #year;
  
    constructor(name, year) {
      // super must be called before others attributions  
      super(name);
      this.#year = year;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year > 1;
    }
  }
  