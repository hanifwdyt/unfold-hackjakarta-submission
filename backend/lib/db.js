const sqlite3 = require("sqlite3").verbose();
const filepath = "./unfold-insight-menu.db";
const fs = require("fs");

function createDbConnection() {
    if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath);
    } else {
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) {
              return console.error(error.message);
            }
            createTable(db);
        });
        console.log("Connection with SQLite has been established");
        return db;
    }
}

function createTable(db) {
  db.exec(`
    CREATE TABLE menu
    (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        title   VARCHAR(255),
        description   VARCHAR(255),
        caraMasak   VARCHAR(255),
        bahan VARCHAR(255),
        kategori VARCHAR(255),
        price INTEGER,
        discounted_price INTEGER
    );
`);
}

module.exports = createDbConnection();