const express = require('express')
const router = express.Router()
const db = require('../dao/getdb')
const moment = require('moment')
const _ = require('lodash')

router.get('/userlistbydeperartment', async (req, res) => {
  try {
    const userinfo = await db.query(`SELECT * FROM	userinfo WHERE	id =  '${req.query.user}'`)
    let querysql = "select * from userinfo";
    let rows = []
    if (userinfo && userinfo[0] && userinfo[0].permission == 2) {
      querysql = `${querysql} where department = '${userinfo[0].department}'`
      rows = await db.query(querysql)
    } else if (userinfo && userinfo[0] && userinfo[0].permission == 3) {
      rows = await db.query(querysql)
    } else if (userinfo && userinfo[0]) {
      rows = userinfo
    }
    res.json({
      code: 200,
      msg: '请求成功',
      data: rows,
      pagination: {
        "total": 15,
        "per_page": 15,
        "current_page": 1,
        "last_page": 1,
        "from": 1,
        "to": 15
      }
    })
  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }


})

router.get('/licenselistbyid', async (req, res) => {
  try {
    const licenses = await db.query(`SELECT * FROM	license WHERE	id = '${req.query.id}'`)
    const now = moment();
    _.forEach(licenses ,(license)=>{
      var diff =now.diff(license.validityto,'day')
      if (diff > 365){
        license.validitywarning = "预警"
      }
    })
    res.json({
      code: 200,
      msg: '请求成功',
      data: licenses,
      pagination: {
        "total": 15,
        "per_page": 15,
        "current_page": 1,
        "last_page": 1,
        "from": 1,
        "to": 15
      }
    })
  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }


})

router.post('/changepassword', async (req, res) => {
  try {
    await db.query(`UPDATE userinfo  SET password=${req.body.params.password}  WHERE id= '${req.body.params.id}'`)
  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }

  res.json({
    code: 200,
    msg: '请求成功',

  })
})

router.get('/childrenlistbyid', async (req, res) => {
  try {
    const children = await db.query(`SELECT 	* FROM	children WHERE	id =  '${req.query.id}'`)
    res.json({
      code: 200,
      msg: '请求成功',
      data: children,
      pagination: {
        "total": 15,
        "per_page": 15,
        "current_page": 1,
        "last_page": 1,
        "from": 1,
        "to": 15
      }
    })
  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }


})

// router.get('/licenselistbyid', async (req, res) => {
//   try {
//     const license = await db.query(`SELECT 	* FROM	license WHERE	id =  '${req.query.id}'`)
//     res.json({
//       code: 200,
//       msg: '请求成功',
//       data: license
//     })
//   } catch (error) {
//     res.json({
//       code: 500,
//       msg: '请求失败'
//     })
//   }


// })

router.post('/deleteuser', async (req, res) => {
  try {
    await db.query(`DELETE FROM userinfo WHERE id= '${req.body.id}'`)
    await db.query(`DELETE FROM adminsystem.license WHERE id='${req.body.id}'`)
    await db.query(`DELETE FROM adminsystem.children WHERE id='${req.body.id}'`)
  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }
  res.json({
    code: 200,
    msg: '请求成功',

  })
})

// router.post('/deleteuser', async (req, res) => {
//   try {
//     await db.query(`DELETE FROM userinfo WHERE id='${req.body.id}'`)
//     await db.query(`DELETE FROM adminsystem.license WHERE id='${req.body.id}'`)
//     await db.query(`DELETE FROM adminsystem.children WHERE id='${req.body.id}'`)
//   } catch (error) {
//     res.json({
//       code: 500,
//       msg: '请求失败'
//     })
//   }

//   res.json({
//     code: 200,
//     msg: '请求成功',

//   })
// })

router.post('/deletelicense', async (req, res) => {
  try {
    await db.query(`DELETE FROM license WHERE id='${req.body.id}' name = '${req.body.name}';`)
  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }
  res.json({
    code: 200,
    msg: '请求成功',

  })
})

router.post('/deletechildren', async (req, res) => {
  try {
    await db.query(`DELETE FROM children WHERE id='${req.body.id}' name = '${req.body.name}';`)
  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }

  res.json({
    code: 200,
    msg: '请求成功',

  })
})

router.post('/updateuser', async (req, res) => {
  try {
    var now = moment();
    const sql =
      `UPDATE adminsystem.userinfo  SET name='${req.body.name}', ip='${req.body.ip}', birthday='${req.body.birthday}', politics='${req.body.politics}', natvie='${req.body.natvie}', phone='${req.body.phone}', address='${req.body.address}', executeiveposition='${req.body.executeiveposition}', technicalposition='${req.body.technicalposition}', hiredate='${req.body.hiredate}', education='${req.body.education}' , school='${req.body.school}', carnumber='${req.body.carnumber}', workarea='${req.body.workarea}', department='${req.body.department}',  changeat='${now}', changeby='${req.body.changeby}'  WHERE id='${req.body.id}' `
    await db.query(sql)

  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }
  res.json({
    code: 200,
    msg: '请求成功',

  })
})

router.post('/adduser', async (req, res) => {
  try {
    var now = moment();
    const sql =
      `INSERT INTO adminsystem.userinfo ( id, name, ip, birthday, politics, natvie, phone, address, executeiveposition, technicalposition, hiredate, education, school, carnumber, workarea, department, password, changeat, changeby ) VALUES ( '${req.body.id}', '${req.body.name}' ,'${req.body.ip}' , '${req.body.birthday}' , '${req.body.politics}' , '${req.body.natvie}' , '${req.body.phone}', '${req.body.address}' , '${req.body.executeiveposition}' , '${req.body.technicalposition}' , '${req.body.hiredate}' , '${req.body.education}' , '${req.body.school}' , '${req.body.carnumber}' , '${req.body.workarea}', '${req.body.department}', '${req.body.id}', '${now}','${req.body.id}' )`
    await db.query(sql)
  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }
  res.json({
    code: 200,
    msg: '请求成功',

  })
})


router.post('/createlicense', async (req, res) => {
  try {
    
    await db.query(`DELETE FROM adminsystem.license WHERE id='${req.body.id}'`)
    _.forEach(req.body.data,(element)=>{
      const sql = `INSERT INTO adminsystem.license ( id, name, date, validityfrom, validityto ) VALUES  ( '${element.id}', '${element.name}' ,'${element.date}' , '${element.validityfrom}' , '${element.validityto}' )`
      db.query(sql)
    });
  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }
  res.json({
    code: 200,
    msg: '请求成功',

  })
})

router.post('/createchildren', async (req, res) => {

  try {
    await db.query(`DELETE FROM adminsystem.children WHERE id='${req.body.id}'`)
    _.forEach(req.body.data,(element)=>{
      const sql =`INSERT INTO adminsystem.children ( id, parent, childname, sex, birthday ) VALUES  ( '${element.id}', '${element.parent}' ,'${element.childname}' , '${element.sex}' , '${element.birthday}' )`
      db.query(sql)
    });

  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }
  res.json({
    code: 200,
    msg: '请求成功',

  })
})

router.post('/login', async (req, res) => {
  try {
    const row = await db.query(`SELECT * FROM userinfo WHERE id = '${req.body.username}' and password = '${req.body.password}' LIMIT 1`)
    if (row && row[0]) {
      res.json({
        code: 200,
        msg: '请求成功',
        data: { level: row[0].permission }
      })
    } else {
      res.json({
        code: 500,
        msg: '请求失败'
      })
    }
  } catch (error) {
    res.json({
      code: 500,
      msg: '请求失败'
    })
  }
})


module.exports = router