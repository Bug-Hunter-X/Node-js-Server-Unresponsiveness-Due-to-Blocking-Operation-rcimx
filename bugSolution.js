const http = require('http');

const server = http.createServer((req, res) => {
  // Use asynchronous operations or web workers for long tasks
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    if (count === 1000000) {
      clearInterval(intervalId);
      res.writeHead(200);
      res.end('Done!');
    }
  }, 0);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});