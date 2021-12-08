const express = require('express')
const path=require('path');
const bodyParser = require('body-parser')


const index = require('./backend/routers/index')

const app = express()
const port = process.env.PORT || 3000
app.all('*', (req, res, next) =>{    
  res.header("Access-Control-Allow-Origin", "*");    
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");    
  res.header("X-Powered-By",' 3.2.1')    
  res.header("Content-Type", "application/json;charset=utf-8");    next();});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static('dist'))

app.use('/api', index);

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app