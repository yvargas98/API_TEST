import express = require('express')
import cors = require('cors')
import router from '../src/routes/index'
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});