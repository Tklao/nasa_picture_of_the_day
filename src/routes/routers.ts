import axios from "axios";
import { Request, Response, Router } from "express";
import { NasaRequestModel } from "../models/nasa_model";

const router = Router();

router.get("/pictureOfTheDay", async (req: Request, res: Response) => {
  const url: string = "https://api.nasa.gov/planetary/apod?api_key=tM2ETsnD4QUGo9R8nQ5q5LbR2Dicj3aWcxCxlFkV";
  const response = await axios.get(url);

  const nasaModel = new NasaRequestModel(response.data.title, response.data.explanation, response.data.url, response.data.date);
  res.send(`
    <h1> ${nasaModel.title}</h1>
    <h3>${nasaModel.explanation}</h3>
    <img width=300 src="${nasaModel.url}">
    <p>${nasaModel.date}</p> 
  `);
});

export default router;
