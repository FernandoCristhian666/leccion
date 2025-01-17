const Auto = require('./automodels');

const autoController = {
    getAll: (req, res) => {
        Auto.getAll((err, results) => {
            if (err) res.status(500).send(err);
            res.json(results);
        });
    },
    getById: (req, res) => {
        const id = req.params.id;
        Auto.getById(id, (err, result) => {
            if (err) res.status(500).send(err);
            res.json(result);
        });
    },
    create: (req, res) => {
        const newAuto = req.body;
        Auto.create(newAuto, (err, result) => {
            if (err) res.status(500).send(err);
            res.status(201).json(result);
        });
    },
    update: (req, res) => {
        const id = req.params.id;
        const updatedAuto = req.body;
        Auto.update(id, updatedAuto, (err, result) => {
            if (err) res.status(500).send(err);
            res.json(result);
        });
    },
    delete: (req, res) => {
        const id = req.params.id;
        Auto.delete(id, (err, result) => {
            if (err) res.status(500).send(err);
            res.json(result);
        });
    }
};

module.exports = autoController;