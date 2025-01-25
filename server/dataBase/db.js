import mongoose from 'mongoose';


const Connection = () =>{
    const DB_URI =`mongodb://<YourUsername>:<Cluster-Password>@mailsystem-shard-00-00.gbghs.mongodb.net:27017,mailsystem-shard-00-01.gbghs.mongodb.net:27017,mailsystem-shard-00-02.gbghs.mongodb.net:27017/?ssl=true&replicaSet=atlas-jv68lr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=MailSystem`;
    try {
        mongoose.connect(DB_URI);
        console.log(`Database connected successfully`);
    } catch (error) {
        console.log("error while connection to the database", error.message)
    }
}
export default Connection;