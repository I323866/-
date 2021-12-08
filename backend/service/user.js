const db = require ('../dao/getdb')


function getUser(sql){
  return db.query(sql);
}


exports.query = getUser;