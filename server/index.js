const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bodyParser = require("body-parser");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//Create a Wish

app.post("/wishlist", async (req, res) => {
    try {
        const { description } = req.body;
        const newWish = await pool.query(
            "INSERT INTO wishlist (description) VALUES($1) RETURNING *", 
            [description]
        );

        res.json(newWish.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get all Wishes

app.get("/wishlist", async (req, res) => {
    try {
        const allWishes = await pool.query("SELECT * FROM wishlist");
        res.json(allWishes.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a Wish

app.get("/wishlist/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const wishlist = await pool.query("SELECT * FROM wishlist WHERE wish_id = $1", [id]);

        res.json(wishlist.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Update a Wish

app.put("/wishlist/:id", async (req, res) => {
    try {
        const { id } = req.params; 
        const { description } = req.body;
        const updateWish = await pool.query(
            "UPDATE wishlist SET description = $1 WHERE wish_id = $2", 
            [description, id]
        );
 
        res.json("Wish was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//Delete a Wish

app.delete("/wishlist/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteWish = await pool.query("DELETE FROM wishlist WHERE wish_id = $1", [id]);

        res.json("Wish was deleted!");
    } catch (err) {
        console.error(err.message)
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});

