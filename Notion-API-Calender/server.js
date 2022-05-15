require("dotenv").config();
const express = require("express");
const { getTags, createEvent } = require("./notion");


const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// let tags = [];
// getTags().then(data => {
//     tags = data;
// })
// setInterval(async () => {
//     tags = await getTags();
// }, 1000 * 60 * 60 * 24) // update tags once a day



// app.get("/", (req, res) => {
//     res.render("index", { tags });
// })

// app.post("/create-event", async (req, res) => {
//     const { title, description, tagIds = [] } = req.body;

//     await createEvent({
//         title, 
//         description, 
//         tagIds: (Array.isArray(tagIds) ? tagIds : [tagIds]).map(tagId => {
//             return {id: tagId }
//         }),
//     }),
//     res.redirect("/");
// });



app.listen(process.env.PORT);
