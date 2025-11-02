import express from "express";
import { startups } from "./data/data.js"


const app = express();
const PORT = process.env.PORT || 3000

app.get('/api', (req, res)=> {

    let filteredData = startups
    const {industry, country, continent, is_seeking_funding, has_mvp} = req.query

    if(industry){
        filteredData = filteredData.filter(
            (startup)=> startup.industry.toLowerCase() === industry.toLowerCase()
        );
    }

    if(country){
        filteredData = filteredData.filter(
            (startup) => startup.industry.toLowerCase() === industry.toLowerCase()
        )
    }

    if(has_mvp){
        filteredData = filteredData.filter(
            (startup) => startup.industry === JSON.parse(has_mvp.toLowerCase())
        )
    }

    res.json(filteredData)
})

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))