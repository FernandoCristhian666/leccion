require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Configurar conexión a PostgreSQL
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

app.use(cors());
app.use(express.json());

// Endpoint para listar posts
app.get('/listPost', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM post ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint para agregar un post
app.post('/addPost', async (req, res) => {
    const { post, title, description } = req.body;
    try {
        await pool.query(
            'INSERT INTO post (post, title, description) VALUES ($1, $2, $3)',
            [post, title, description]
        );
        res.status(201).json({ message: 'Post agregado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});