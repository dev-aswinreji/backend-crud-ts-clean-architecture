import express, { Application, Request } from "express"
import cors from "cors";
import userRoutes from './routes/userRoutes';
const app: Application = express()

app.use(cors<Request>())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', userRoutes)

const PORT = process.env.PORT 
console.log(process.env.JWT_SECRET);

app.listen(PORT, () => {
    console.log(`Server is listening to port http://localhost:${PORT}`);
})
