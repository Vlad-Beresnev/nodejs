const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  // Set the content type for responses
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    // Serve the home page
    const filePath = path.join(__dirname, 'views', 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else if (req.url === '/user') {
    const filePath = path.join(__dirname, 'views', 'user.html');
    fs.readFile(filePath, (err, data) => {
    if (err) {
        res.writeHead(500);
        res.end('Error loading user.html');
    } else {
        res.writeHead(200);
        res.end(data);        
        }
    });
  } else if (req.url === '/admin') {
    // Serve the admin page
    const filePath = path.join(__dirname, 'views', 'admin.html');
    fs.readFile(filePath, (err, data) => {
    if (err) {
        res.writeHead(500);
        res.end('Error loading admin.html');
    } else {
        res.writeHead(200);
        res.end(data);
    }
    });
  } else if (req.url.startsWith('/public/')) {
    // Serve static assets (CSS and JavaScript)
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else {
    // Handle 404 - Not Found
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(port, () => {
  console.log(`CMS app listening at http://localhost:${port}`);
});