const lines = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 100;
for (let i = 0; i < lines.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + lines[i] + '   ');
  }, timer);
  timer += 200;
}
setTimeout(() => {
  console.log();
}, timer);