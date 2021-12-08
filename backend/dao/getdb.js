var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'test',
  password : '12345678',
  database : 'adminsystem'
}); 


// 接收一个sql语句 以及所需的values
// 这里接收第二参数values的原因是可以使用mysql的占位符 '?'
// 比如 query(`select * from my_database where id = ?`, [1])
let query = function( sql, values ) {
  // 返回一个 Promise
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          // 结束会话
          connection.release()
        })
      }
    })
  })
}

exports.query = query;