import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid';

// Components
import Connection from './database/db.js';
import DefaultData from './default.js'
import Routes from './routes/routes.js'

dotenv.config()

const app = express();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


app.use(cors());
app.use('/', Routes)


const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_USERPASSWORD;

const URL = `mongodb+srv://${username}:${password}@cluster0.zg7mf.mongodb.net/FLIPKART-CLONE?retryWrites=true&w=majority`;

Connection(process.env.MONGODB_URL || URL);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
}
app.listen(PORT, () => console.log(`your server is running at ${PORT}`));

//  default data to database
DefaultData()

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
    paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
    paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
    paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
    paytmParams['ORDER_ID'] = uuidv4(),
    paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
    paytmParams['TXN_AMOUNT'] = '100',
    paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'neerajgoswami521@@gmail.com'
paytmParams['MOBILE_NO'] = '9911589967'