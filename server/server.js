const express = require('express')
require("dotenv").config();
const chats = require("./chats")
const cors = require("cors")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


connectDB()
const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({message: "hello!"});
})


app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);




// Error Handling middleware
app.use(notFound);
app.use(errorHandler);



app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`);
})