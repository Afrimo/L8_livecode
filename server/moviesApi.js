import express from "express";

export const moviesApi = express.Router();
moviesApi.get("/", (req, res) => {
    res.json([
        {
            title: "Rise of the planet of the apes"
        },
        {
            title: "Sangre por sangre"
        }
    ])
})





