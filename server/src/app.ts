import express from 'express';
import 'dotenv/config'
import router from '../routes';
import cors from 'cors';

const app = express();
app.set('trust proxy', 1);
app.use(cors());
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello, Express with Typescript');
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});