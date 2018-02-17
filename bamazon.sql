DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50) NOT NULL,
	price DECIMAL(10, 2) NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("phone", "electronics", 799.99, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("shirt", "clothing", 29.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "computers", 299.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("How to Be a Programmer", "books", 29.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Game Machine", "video games", 349.99, 40);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Monitor", "computers", 199.99, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Vitamin C", "drugs", 14.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Tax Program", "software", 149.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "electronics", 80.00, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("New Game", "video games", 59.99, 60);