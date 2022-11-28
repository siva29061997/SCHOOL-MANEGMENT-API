const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient
const app = express();
const URL = process.env.DBASE
const DB = "school-management-system"
const dotenv = require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/students", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB);

        let reUser = await db.collection("students").find().toArray();

        await connection.close();

        res.json(reUser);
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        });
        console.log(error)
    }
});

app.get("/teachers", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB);

        let reUser = await db.collection("teachers").find().toArray();

        await connection.close();

        res.json(reUser);
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        });
        console.log(error)
    }
});

app.get("/users", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB);

        let reUser = await db.collection("users").find().toArray();

        await connection.close();

        res.json(reUser);
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        });
        console.log(error)
    }
});

app.get("/books", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB);

        let reUser = await db.collection("books").find().toArray();

        await connection.close();

        res.json(reUser);
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        });
        console.log(error)
    }
});

app.post("/student", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        await db.collection("students").insertOne(req.body)

        await connection.close()

        res.status(200).json({ messege: "Done" })
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
        console.log(error)
    }
});

app.post("/teacher", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        await db.collection("teachers").insertOne(req.body)

        await connection.close()

        res.status(200).json({ messege: "Done" })
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
        console.log(error)
    }
});

app.post("/user", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        await db.collection("users").insertOne(req.body)

        await connection.close()

        res.status(200).json({ messege: "Done" })
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
        console.log(error)
    }
});

app.post("/book", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        await db.collection("books").insertOne(req.body)

        await connection.close()

        res.status(200).json({ messege: "Done" })
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
        console.log(error)
    }
});

app.get("/student/:id", async function (req, res) {
    try {
        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let student = await db.collection("students").findOne({ _id: mongodb.ObjectId(req.params.id) });

        await connection.close()

        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
        console.log(error)
    }
});

app.get("/teacher/:id", async function (req, res) {
    try {
        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let teacher = await db.collection("teachers").findOne({ _id: mongodb.ObjectId(req.params.id) });

        await connection.close()

        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
        console.log(error)
    }
});

app.get("/user/:id", async function (req, res) {
    try {
        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let student = await db.collection("users").findOne({ _id: mongodb.ObjectId(req.params.id) });

        await connection.close()

        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
        console.log(error)
    }
});

app.get("/book/:id", async function (req, res) {
    try {
        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let student = await db.collection("books").findOne({ _id: mongodb.ObjectId(req.params.id) });

        await connection.close()

        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
        console.log(error)
    }
});

app.put("/student/:id", async function (req, res) {

    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let student = await db.collection("students").findOneAndUpdate({ _id: mongodb.ObjectId(req.params.id) }, { $set: req.body })

        await connection.close()

        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
    }
});

app.put("/teacher/:id", async function (req, res) {

    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let teacher = await db.collection("teachers").findOneAndUpdate({ _id: mongodb.ObjectId(req.params.id) }, { $set: req.body })

        await connection.close()

        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
    }
});

app.put("/user/:id", async function (req, res) {

    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let student = await db.collection("users").findOneAndUpdate({ _id: mongodb.ObjectId(req.params.id) }, { $set: req.body })

        await connection.close()

        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
    }
});

app.put("/book/:id", async function (req, res) {

    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let student = await db.collection("books").findOneAndUpdate({ _id: mongodb.ObjectId(req.params.id) }, { $set: req.body })

        await connection.close()

        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
    }
});

app.delete("/student/:id", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let student = await db.collection("students").findOneAndDelete({ _id: mongodb.ObjectId(req.params.id) });

        await connection.close()

        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
    }
});

app.delete("/teacher/:id", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let teacher = await db.collection("teachers").findOneAndDelete({ _id: mongodb.ObjectId(req.params.id) });

        await connection.close()

        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
    }
});

app.delete("/user/:id", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let teacher = await db.collection("users").findOneAndDelete({ _id: mongodb.ObjectId(req.params.id) });

        await connection.close()

        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
    }
});

app.delete("/book/:id", async function (req, res) {
    try {

        const connection = await mongoClient.connect(URL)

        const db = connection.db(DB)

        let teacher = await db.collection("books").findOneAndDelete({ _id: mongodb.ObjectId(req.params.id) });

        await connection.close()

        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).json({
            messege: "Somthig went wrong"
        })
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server conect on : ${port}`)
});