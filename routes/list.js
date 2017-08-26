var express = require('express');
var router = express.Router();
var cipher = 'yzOzNHECVhQ89iB8eS6Vrw==';

/* GET listing. */
router.get('/', function(req, res, next) {
  res.json({
    responseCode: 0,
    message: 'I\'m alive'
  });
});

router.get('/list', function(req,res,next) {
  console.log(req.query);
  if (req.query.id === cipher) {
    res.json({
      responseCode: 0,
      products: [
        {
          id: 1001,
          name: 'Prod 1',
          price: 1500
        },
        {
          id: 1002,
          name: 'Prod 2',
          price: 2000
        },
        {
          id: 1003,
          name: 'Prod 3',
          price: 1000
        }
      ],
      error: null
    });
  } else {
    res.json({
      responseCode: -1,
      products: null,
      error: 'Id invalido'
    });
  }
});

module.exports = router;
