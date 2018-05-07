const express = require('express')
const app = express()
const server = require('http').createServer(app)

app.use('/styles', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use(express.static('static'))

app.get('/', function(req, res) {
  res.sendFile('/index.html')
})

server.listen(8000, () => console.log('listening on 8000'))