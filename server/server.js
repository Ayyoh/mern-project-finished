import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRouter from './routes/product.routes.js'
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use('/api/products', productRouter)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/dist")));

    app.get(/^\/(?!api).*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, "client/dist", "index.html"));
      });
}

console.log('NODE_ENV:', process.env.NODE_ENV);


app.listen(PORT, () => {
    connectDB();
    console.log(`Running on Port ${PORT}`);
})