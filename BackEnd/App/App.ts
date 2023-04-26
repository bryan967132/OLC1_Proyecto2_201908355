import express from 'express';
import router from '../Routes/Interpreter'
const app = express();
const port = 3000;
let cors = require('cors')
app.use(cors())
app.use(express.json())
app.get('/',(req,res) => {
    res.send('Server is running!!!');
})
app.use('/interpreter',router)
app.listen(port, () => {
    try {
        return console.log(`Server is running in port ${port}`);
    } catch (error) {
        return console.error(error);
    }
});