CREATE DATABASE perntodo;

CREATE TABLE wishlist(
    wish_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)
);

CREATE TABLE usertable(
    register SERIAL PRIMARY KEY,
    username VARCHAR(25) UNIQUE,
    password VARCHAR(25)
);