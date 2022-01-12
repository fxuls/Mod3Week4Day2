function stretch(timeLeft) {
  const timeToComplete = 1000;

  return new Promise((resolve, reject) => {
    if (timeLeft < timeToComplete) {
      throw new Error("stretch");
    }

    setTimeout(() => {
      resolve(timeLeft - timeToComplete);
      console.log("done stretching");
    }, timeToComplete);
  });
}


function runOnTreadmill(timeLeft) {
  const timeToComplete = 500;

  return new Promise((resolve, reject) => {
    if (timeLeft < timeToComplete) {
      throw new Error("run on treadmill");
    }

    setTimeout(() => {
      resolve(timeLeft - timeToComplete);
      console.log("done running on treadmill");
    }, timeToComplete);
  });
}


function liftWeights(timeLeft) {
  const timeToComplete = 2000;

  return new Promise((resolve, reject) => {
    if (timeLeft < timeToComplete) {
      throw new Error("lift weights");
    }

    setTimeout(() => {
      resolve(timeLeft - timeToComplete);
      console.log("done lifting weights");
    }, timeToComplete);
  });
}


function workout(totalTime) {
  stretch(totalTime)
  .then(runOnTreadmill)
  .then(liftWeights)
  .then((timeLeft) => console.log(`done working out with ${timeLeft / 1000} seconds left`))
  .catch((error) => console.log("Error: you dont have enough time to " + error.message));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


// workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
