const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//Create a Todo

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1)", 
            [description]
        );

        res.json(newTodo);
    } catch (err) {
        console.error(err.message);
    }
})

//Get all Todos

//Get a Todo

//Update a Todo

//Delete a Todo

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});

