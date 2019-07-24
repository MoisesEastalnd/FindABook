const express = require("express");
const app = express();
//API Route 
app.get ("*", (req,res) => {
    res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

app.get("/", (req, res)=> res.send("howdy ya'll"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log (` Server started on port ${PORT}`));