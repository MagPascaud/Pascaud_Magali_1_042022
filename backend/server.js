const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const saucesRoutes = require('./routes/sauces');

const app = express();
app.use(cors());

app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://MagPascaud:lisse47170@cluster0.ekvgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/api/auth', authRoutes);
app.use('/api/sauces', saucesRoutes);

app.listen(3000, ()=>{
    console.log("mon serveur écoute le port 3000");
})
