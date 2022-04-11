const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());

app.use('/api/auth', authRoutes);
// app.post("/api/auth/login", (req, res)=>{
//     console.log("je suis la route login");
//     res.send("j'ai répondu");
// });

app.listen(3000, ()=>{
    console.log("mon serveur écoute le port 3000");
})
