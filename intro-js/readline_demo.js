function absurdTimes(numTimes, fn) {
  let i = 0;

  function loopStep() {
    if (i == numTimes) {
      // we're done, stop looping
      return;
    }

    fn();

    i++;
    // recursively call loopStep
    console.log("inner loop step")
    loopStep();
  }
  console.log("outer loop step")
  loopStep();
}

