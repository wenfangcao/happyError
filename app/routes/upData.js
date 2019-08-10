var express = require('express');
var router = express.Router();
var up = require('../controllers/up')
var util = require('../utils')

router.post('/', util.getIp, util.getPlatform, async function (req, res, next) {
  let user = await up.createUser(req, res)
  if (!user.success) res.json(user)
  req.body.user = user.msg[0]
  switch (req.body.type) {
    case 'page':
      up.createPage(req, res)
      break
    case 'updatePage':
      up.updatePage(req, res)
      break
    case 'js':
      up.createJsError(req, res)
      // res.status(400).send({ code: 404, msg: 'Bad Request' });
      break
    case 'api':
      up.createApi(req, res)
      break
    case 'resource':
      up.createResourceLoad(req, res)
      braek
    default:
      res.json({
        success: false,
        msg: 'type is null'
      })
  }
});

module.exports = router