const app = require('./app');
const dotenv = require('dotenv');

const connectDatabase = require('./config/connectDB');

dotenv.config({path : './config/config.env'});
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`)
})