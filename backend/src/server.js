const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    // user: 'postgre', // Substitua pelo seu usuário do PostgreSQL
    // user: 'senai', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'foodpark', // Nome da sua database
    // password: 'senai', // Substitua pela sua senha
    password: 'senai', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

// -- ok -- Rota para buscar todos os produtos
app.get('/produtos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM produtos');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});

// -- ok -- Rota para buscar um cliente por ID
app.get('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM produtos WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }
});

// -- ok -- Rota para adicionar um produto
app.post('/produtos', async (req, res) => {
    const { nome, preco, estabelecimento } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO produtos (nome, preco, estabelecimento) VALUES ($1, $2, $3) RETURNING *',
            [nome, preco, estabelecimento]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar produto' });
    }
});

// -- ok -- Rota para atualizar um produto
app.put('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, preco, estabelecimento } = req.body;
    try {
        const result = await pool.query(
            'UPDATE produtos SET nome = $1, preco = $2, estabelecimento = $3 WHERE id = $4 RETURNING *',
            [nome, preco, estabelecimento, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
});

// Rota para deletar um produtos
app.delete('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM produtos WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json({ message: 'Produto deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

