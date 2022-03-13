import express  from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import itemRoutes from './routes/items.js';
import typeRoutes from './routes/types.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/items', itemRoutes);
app.use('/types', typeRoutes);

const DB_CONNECTION_URL = 'mongodb+srv://3li:Tumbis@cluster0.gcjwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log('Server running on port: ', PORT)))
.catch((error) => console.log(error.message));