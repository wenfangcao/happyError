var query = require('./mysql')
var select = require('./select')

// 创建用户
function createUser (req, res) {
  
}

// 浏览数据
function createPage (req, res) {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO PAGE_INFO VALUES(?,?,?,?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error && res.json({ success: false, msg: error })
    results && res.json({ success: true, msg: 'ok' })
  })
  connection.end()
}

// js 错误收集
function createJsError (req, res) {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO JS_ERROR VALUES(?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error && res.json({ success: false, msg: error })
    results && res.json({ success: true, msg: 'ok' })
  })
  connection.end()
}

// api访问收集
function createApi (req, res) {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO API_ERROR VALUES(?,?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error && res.json({ success: false, msg: error })
    results && res.json({ success: true, msg: 'ok' })
  })
  connection.end()
}

// 浏览数据
function createResourceLoad (req, res) {
  let data = Objec.values(req.query)
  connection.connect()
  var sql = "INSERT INTO RESOURCE_LOAD VALUES(?,?,?,?)"
  connection.query(sql, data, function (error, results, fields) {
    error && res.json({ success: false, msg: error })
    results && res.json({ success: true, msg: 'ok' })
  })
  connection.end()
}

module.exports = {
  createUser,
  createPage,
  createJsError,
  createApi,
  createResourceLoad
}
