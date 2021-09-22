let myArgs = process.argv.slice(2);
myArgs.forEach(x => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, x * 1000);
});