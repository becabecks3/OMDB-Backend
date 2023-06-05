const express = require('express');

//Modulos de rutas 
const movieRoutes = require('./routes/movieRoutes');



const app = express();
const port = 3000;


app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json();
  });



//Rutas 
app.use('/api/films', movieRoutes); 


app.listen(port, () => console.info(`> listening at ${port}`));