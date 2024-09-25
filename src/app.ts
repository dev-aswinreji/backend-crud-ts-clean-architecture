import express, {Request,Response} from "express"
import  cors  from "cors";
const app = express()
app.use(cors<Request>())

app.listen(3000)
