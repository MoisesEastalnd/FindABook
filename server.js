const express = require("express");
const app = express();

app.use(express.urlencoded({ extend: true}));
app.use(express.json());
//Serve static assets (for heroku)
if (process.env.NODE_ENV ==="production") {
    app.use(express.static("client/build"));
}


//Defined Routes
app.use("/api/books/Search", require("./routes/Search"));
app.use("/api/books/Save", require("./routes/Save"));


app.get ("*", (req,res) => {
    res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

app.get("/", (req, res)=> res.send("howdy ya'll"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log (` Server started on port ${PORT}`));