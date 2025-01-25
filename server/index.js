import express from 'express';
import  Connection  from './dataBase/db.js';
import routes from './Routes/route.js';
import cors from 'cors';
const app = express();


app.use(cors());
app.use(express.urlencoded({ extended:true}));
app.use(express.json({ extended:true}));
app.use('/',routes);
const PORT= 5000;
Connection();
app.listen(PORT, () => {
    console.log(`server is stared on PORT ${PORT}`);
})