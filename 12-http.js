const http = require('http');

// req - request (represents the incoming request), res - response (what we are sending back)
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  else if (req.url === '/about') {
    res.end('Welcome to our about page')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})


server.listen(5000)