const mysql = require('mysql')
const pool = mysql.createPool({
  host: '119.45.8.40',
  user: 'root',
  password: '123456',
  database: 'pins'
})

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {

          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }