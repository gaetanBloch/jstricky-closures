function createGreeter() {
  const myName = 'Gaetan';

  return function () {
    console.log(myName);
  };
}

const greet = createGreeter();
greet();
