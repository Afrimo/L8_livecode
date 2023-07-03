import express from "express";

export const moviesApi = express.Router();

const movies  = [
    {
        title: "Rise of the planet of the apes"
    },
    {
        title: "Sangre por sangre"
    }
]
moviesApi.get("/", (req, res) => {
    res.json(movies)
})





