for (var i = 0; i < 5; i++) {
  // Output 5 times the value 5 because the variable name is closed not the
  // value. So, the timer function looks up the value when it's execute and
  // it's after the loop is finished and the value of i is 5.
  setTimeout(() => {
    console.log(i);
  }, 500);
}

// Workaround 1
for (var i = 0; i < 5; i++) {
  // Creates a new function scope and therefore a new environment so every
  // timer has a new environment, then j is different for every iteration.
  (function () {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, 500);
  })();
}

// Workaround 2
for (let i = 0; i < 5; i++) {
  // Works because we create a new Block scope for every iteration, thus a
  // new environment and new new value.
  setTimeout(() => {
    console.log(i);
  }, 500);
}

function createGreeter(myName) {
  return function () {
    console.log(myName);
    setTimeout(() => {
      console.log(myName);
    }, 1000);

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
