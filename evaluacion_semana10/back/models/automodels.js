const db = require('./db');

const Auto = {
    getAll: (callback) => {
        db.query('SELECT * FROM autos', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM autos WHERE id = ?', [id], callback);
    },
    create: (auto, callback) => {
        db.query('INSERT INTO autos SET ?', auto, callback);
    },
    update: (id, auto, callback) => {
        db.query('UPDATE autos SET ? WHERE id = ?', [auto, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM autos WHERE id = ?', [id], callback);
    }
};

module.exports = Auto;