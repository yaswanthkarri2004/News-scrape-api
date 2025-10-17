const express = require('express');
const cors  = require('cors');
const newsRouter = require('./routers/newsrouters');
const categoryRouter = require('./routers/categoryRouter');

const app = express();
app.use(cors());
app.use(express.json());

//Route
app.use("/api/news",newsRouter);

app.use("/categories",categoryRouter);

app.get("/robo",(req,res)=>{
    res.send("Welcome to categories");
})



// app.use("/", (req, res) => {
//   res.send("Welcome to News API.....");
// });



// 404 handler — must be after all routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});