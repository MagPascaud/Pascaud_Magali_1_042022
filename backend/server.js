const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const saucesRoutes = require('./routes/sauces');

const app = express();
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/sauces', saucesRoutes);

app.listen(3000, ()=>{
    console.log("mon serveur écoute le port 3000");
})
