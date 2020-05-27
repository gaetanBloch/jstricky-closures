function createGreeter(myName) {
  return function () {
    console.log(myName);
    setTimeout(() => {
      console.log(myName);
    }, 1000)

    // The closure closes the environment and the variable names and not the
    // value, then when the value changed after 1s the value have changed.
    // The values are only looked up when the function executes  not when
    // it's declared. Only registry of the variable name is closed.
    myName = 'Sandra';
  };
}

const greetGaetan = createGreeter('Gaetan');
const greetSeb = createGreeter('Seb');
greetGaetan();
greetSeb();
