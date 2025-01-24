class Example {
    somePublicMethod() {
      this.#somePrivateMethod();
    }
  
    #somePrivateMethod() {
      console.log("You called me?");
    }
  }
  
  const myExample = new Example();
  
  myExample.somePublicMethod(); // 'You called me?'
  
  myExample.#somePrivateMethod(); // SyntaxError