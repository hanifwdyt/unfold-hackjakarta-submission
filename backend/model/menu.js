const db = require("./../lib/db");

exports.insert = function insert(data) {

  db.run(
    `INSERT INTO menu (title, description, caraMasak, bahan, kategori) VALUES (?, ?, ?, ?, ?)`,
    [data.title, data.description, data.caraMasak, data.bahan, data.kategori],
    function (error) {
        if (error) {
            console.error(error.message)
        }
        console.log(`Inserted a row with the ID: ${this.lastID}`)
    }
  )
}

exports.update = function update(data) {

    db.run(
      `UPDATE menu set title=?, description=?, caraMasak=?, bahan=?, kategori=? WHERE id=?`,
      [data.title, data.description, data.caraMasak, data.bahan, data.kategori, data.id],
      function (error) {
          if (error) {
              console.error(error.message)
          }
          console.log(`Update a row with the ID: ${this.lastID}`)
      }
    )
  }

exports.all = function selectAllRows() {
    return new Promise((resolve, reject) => {
        const rows = []
        db.each(`SELECT * FROM menu`, (error, row) => {
            if (error) {
                reject(new Error(error.message))
            } else {
                rows.push(row)
            }
        }, (err, count) => {
            if (err) {
                reject(new Error(err.message))
            } else {
                resolve(rows)
            }
        })
    })
}

exports.findById = function selectById(id) {
    return new Promise((resolve, reject) => {
        const rows = []
        db.each(`SELECT * FROM menu where ID = ?`, [id], (error, row) => {
            if (error) {
                reject(new Error(error.message))
            } else {
                rows.push(row)
            }
        }, (err, count) => {
            if (err) {
                reject(new Error(err.message))
            } else {
                resolve(rows)
            }
        })
    })
}