CREATE DATABASE perntodo;

CREATE TABLE wishlist(
    wish_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)
);

CREATE TABLE userTable(
    register SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);