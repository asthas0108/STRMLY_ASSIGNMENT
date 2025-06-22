import express from "express";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import dotenv from "dotenv"
import authRouter from "./routes/auth.routes.js";
import videoRouter from "./routes/video.routes.js"
import cookieParser from "cookie-parser";
import path from 'path';
import cors from 'cors';


const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// app.use(helmet());
// app.use(rateLimit({ 
//     windowMs: 15 * 60 * 1000, 
//     max: 100 
// }));


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("database connected")
}).catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send("server is working");
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started at post 5000");
});

// app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api", videoRouter)
// app.use("/api/listing", listingRouter);


app.use((err, req, res, next) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })

})


