import express from 'express';
import path from 'path';
import router from '../Routes/Interpreter'

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('Server is running!!!');
})

app.use(express.json())
app.use('/interpreter',router)

app.listen(port, () => {
    try {
        return console.log(`Server is running in port ${port}`);
    } catch (error) {
        return console.error(error);
    }
});