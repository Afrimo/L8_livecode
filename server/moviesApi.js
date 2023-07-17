import express from "express";

const movies  = [
    {
        title: "Rise of the planet of the apes",
        year: "2011",
        plot: "Some niggas fighting over territory"
    },
    {
        title: "Sangre por sangre",
        year: "1987",
        plot: "mexican gang violence and shit"
    }
]

export function MoviesApi(db){
    const api = express.Router();
    console.log("hei")

    api.get("/", async (req, res) =>{

        //res.json(movies)
        const collection = db.collection("movies")
        console.log(collection)
/*
        const movies = await db
            .collection("movies")
            .find({})
            .map(({ title, year, plot }) => {title, year,plot})
            .toArray();

        res.json(movies)*/
    })

    api.post("/", (req, res) => {
        const {title, year, plot} = req.body;

        movies.push( {title, year, plot})

        res.sendStatus(284)
    })

    return api;
}



