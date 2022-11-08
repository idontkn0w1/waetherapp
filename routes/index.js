var express = require('express');
var router = express.Router();

const axios = require('axios');


const { response } = require('express');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data:response.data});
});

router.get('/submit',function(req,res){
const city = req.query.city
const url_api = `http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid={c07a9c15991a64d7567430cad5492560}`;

axios.get(url_api)
  .then(function (response) {
    res.render('index',{data:response.data})
    // res.send(response.data)
  })
  .catch(function (error) {
    res.send(error)
  })
 
})

module.exports = router;