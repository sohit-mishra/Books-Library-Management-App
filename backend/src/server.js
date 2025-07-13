require('module-alias/register')
const express = require('express');
const config = require('@/config/env');
const connectToDatabase = require('@/config/db');
const MyBook = require('@/routes/mybooksRoutes');
const Book = require('@/routes/bookRoutes');
const Auth = require('@/routes/authRoutes');
const PORT = config.PORT;
const app = express();
const cors = require('cors');
const cookieParser  = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: config.FRONTEND_URL,
    credentials:true
}));

connectToDatabase();

app.use('/api/auth', Auth);
app.use('/api/mybooks', MyBook);
app.use('/api/books', Book);


app.listen(PORT, ()=>{
    console.log("localhost is running http://localhost:" + PORT)
})