// filter out not numbers and value less than 0 and convert to numbers instead string.
const timers = process.argv.slice(2).filter(i => !isNaN(i) && i >= 0).map(i => Number(i)).sort((a, b) => a - b);

const clock = function (timer) {
  // Declare delay
  let delay = 0;

  for (const alarm in timer) {
    setTimeout(() => {
      // Make the sound
      process.stdout.write('\x07');
      console.log(`Beep at ${timer[alarm]} seconds!`)
    }, delay + timer[alarm] * 1000);
    // delay + input * 1000 convert second to millisecond
  }
}

// Call clock function
clock(timers)