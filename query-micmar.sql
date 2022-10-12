CREATE DATABASE micmar;

USE micmar;

CREATE TABLE header_menu_client (
    title_position_1 VARCHAR(50) NOT NULL,
	title_position_2 VARCHAR(50) NOT NULL,
	title_position_3 VARCHAR(50) NOT NULL
);

INSERT INTO header_menu_client (title_position_1, title_position_2, title_position_3)
    VALUES ('Contato', 'Pedidos', 'Carrinho');

CREATE TABLE header_menu_category (
    title_position_1 VARCHAR(50) NOT NULL,
	title_position_2 VARCHAR(50) NOT NULL,
	title_position_3 VARCHAR(50) NOT NULL,
    title_position_4 VARCHAR(50) NOT NULL,
    title_position_5 VARCHAR(50) NOT NULL
);

INSERT INTO header_menu_category (title_position_1, title_position_2, title_position_3, title_position_4, title_position_5)
    VALUES ('Almofadas', 'Azuleijos', 'Roupas', 'Canecas', 'Chaveiro');
  
USE micmar;

CREATE TABLE title_impact_page (
	title_impact_1 VARCHAR(50),
	title_impact_2 VARCHAR(50),
	title_impact_3 VARCHAR(50),
	title_impact_4 VARCHAR(50),
	title_impact_5 VARCHAR(50),
	title_impact_6 VARCHAR(50),
	title_impact_7 VARCHAR(50),
	title_impact_8 VARCHAR(50)
);

INSERT INTO title_impact_page (
	title_impact_1,
    title_impact_2,
    title_impact_3,
    title_impact_4,
    title_impact_5,
    title_impact_6,
    title_impact_7,
    title_impact_8
) VALUES (
	'Lançamentos',
    'Em destaque',
    'Promoção',
    'Novidades',
    'Kits',
    NULL,
    NULL,
    NULL
);

USE micmar;

CREATE TABLE products (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL,
    mark VARCHAR (20) NOT NULL,
    type VARCHAR (20) NOT NULL,
    color VARCHAR (20) NOT NULL,
    quantity INT,
    costPrice DOUBLE NOT NULL,
    salePrice DOUBLE NOT NULL,
    specialPrice DOUBLE NOT NULL,
    description VARCHAR(300) NOT NULL,
    img VARCHAR(100)
);

INSERT INTO products (
	category,
    mark,
    type,
    color,
    quantity,
    costPrice,
    salePrice,
    specialPrice,
    description,
    img
) VALUES (
	'Caneca',
    'Live',
    'Porcelana',
    'Branca',
    100,
    6.00,
    30.00,
    25.00,
    'Caneca de porcelana 350ml',
    NULL
);

-- SELECT * FROM products;
-- SELECT * FROM header_menu_client;
-- SELECT * FROM header_menu_category;
-- SELECT * FROM title_impact_page;

-- DROP DATABASE micmar;