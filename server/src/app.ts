import express, { Request, Response} from "express";
import mongoose from 'mongoose'
import router from "./routes/routes";
import { json } from "body-parser";
import { MONGO_URI } from "./mySecret";
const app = express()
const PORT = process.env.PORT || 5000
const log = console.log

//* mongo konekcija
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err)=>{
    if (err) log(`Error in connection >>> ${err}`) 
    else log(`DB connection successful`)
})

//* body parser koji skuplja sav json http zahteva i stavi ga u req.body
app.use(json())

//* routeri
app.use('/chem', router)

//* i na kraju error handling page
app.use((err: Error, req: Request, res:Response)=> res.status(500).send({message:err.message}))

app.listen(PORT)