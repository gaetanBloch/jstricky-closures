function createGreeter(myName) {
  return function () {
    console.log(myName);
  };
}

const greetGaetan = createGreeter('Gaetan');
const greetSeb = createGreeter('Seb');
greetGaetan();
greetSeb();
