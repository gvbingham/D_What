var http = require('http'),
    fs = require('fs');

http.createServer(function (request, response) {
  fs.readFile('.' + request.url, function (err, data) {
    if (err) {
      if (err.errno === 34) {
        response.statusCode = 404;
      }
      else {
        response.statusCode = 500;
      }
      response.end()
    }
    else {
      fs.stat('.' + request.url, function (err, stat) {
        if (err) {
          response.statusCode = 500;
          response.end()
        }
        else {
          etag = stat.size + '-' + Date.parse(stat.mtime);
          response.setHeader('Last-Modified', stat.mtime);

          if (request.headers['if-none-match'] === etag) {
            response.statusCode = 304;
            response.end();
          }
          else {
            response.setHeader('Content-Length', data.length);
            response.setHeader('ETag', etag);
            response.statusCode = 200;
            response.end(data);
          }
        }
      })
    }
  })
}).listen(8080);
