-- Criando a tabela de produtos da lanchonete
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,              -- Gera o ID automaticamente (0, 1, 2...)
    nome VARCHAR(255) NOT NULL,         -- Nome do produto
    preco NUMERIC(10, 2) NOT NULL,       -- Preço (ex: 25.00)
    estabelecimento VARCHAR(255) NOT NULL -- Nome do restaurante/lanchonete
);

-- Exemplo de inserção do registro:
INSERT INTO produtos (nome, preco, estabelecimento) 
VALUES ('Coca zero com mentos', 25.00, 'Lanchonete Cereal Killer');

-- Consulta simples dos produtos:
SELECT * FROM produtos;