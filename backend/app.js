// const express = require('express');
// const app = express();
// const errorMiddleware = require('./middlewares/error');
// const cookieParser = require('cookie-parser')
// const path = require('path')
// const dotenv = require('dotenv');
// dotenv.config({path:path.join(__dirname,"config/config.env")});


// app.use(express.json());
// app.use(cookieParser());
// app.use('/uploads', express.static(path.join(__dirname,'uploads') ) )

// const products = require('./routes/product')
// const auth = require('./routes/auth')
// const payment = require('./routes/payment')

// app.use('/api/v1/',products);
// app.use('/api/v1/',auth);
// app.use('/api/v1/',payment);

// if(process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));
//     app.get('*', (req, res) =>{
//         res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
//     })
// }

// app.use(errorMiddleware)

// module.exports = app;
const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, "config/config.env") });

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const profile = require('./routes/profile');
const auth = require('./routes/auth');
const payment = require('./routes/payment');

// Use routes
app.use('/api/v1/', profile);
app.use('/api/v1/', auth);
app.use('/api/v1/', payment);

// Serve frontend for production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
    });
}

// Middleware for handling errors
app.use(errorMiddleware);

module.exports = app;
