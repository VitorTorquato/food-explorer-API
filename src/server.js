require('express-async-errors');
require('dotenv/config');

const cors = require('cors')
const express = require('express');

const routes = require('./routes');
const cookiParser = require('cookie-parser');

const AppError = require('./utils/AppError');
const uploadConfig = require('../src/config/upload')

const app = express();
app.use(cookiParser());
app.use(cors({
    origin:['http://localhost:3001', 'http://127.0.0.1:3001/'],
    credentials:true
}));
app.use(express.json());
app.use(routes);



app.use('/files' , express.static(uploadConfig.UPLOADS_FOLDER))

app.use((error , request , response , next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({ 
            status: "error",
            message: error.message
        });
    }
    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));