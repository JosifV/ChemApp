import express, { Request, Response} from "express";
import mongoose from 'mongoose'
import router from "./routes/routes";
import { json } from "body-parser";
import { MONGO_URI } from "./mySecret";
const app = express()
const PORT = process.env.PORT || 5000
const log = console.log

//* mongo connection
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err)=>{
    if (err) log(`Error in connection >>> ${err}`) 
    else log(`DB connection successful`)
})

//* body parser
app.use(json())

//* router
app.use('/chem', router)

//* error handling page
app.use((err: Error, req: Request, res:Response)=> res.status(500).send({message:err.message}))

app.listen(PORT)