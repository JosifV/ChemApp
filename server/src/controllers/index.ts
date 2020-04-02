import { RequestHandler } from "express";
import { Chem } from "../models";
import { ChemSchema, vetoAny, PostResp } from "../types";
import { shufleArr } from "./utils/shufleArr";
import { makeChem } from "./utils/makeChem";
import { countChem } from "./utils/countChem";

let getHandler: RequestHandler = async (req, res) => { //*
    let resp = await Chem.find({})
    res.status(200).send(resp)
}
let postHandler: RequestHandler = async (req, res) => { //*
    //* get input arr
    let inputArr: string[] = req.body.inputArr

    //* make output arr
    let outputArr: string[] = makeChem(shufleArr(inputArr))

    let resp: PostResp = await Chem.create({ inputArr, outputArr, elCount: countChem(outputArr) })

    res.status(201).send(resp)
}
//  const patchHandler: RequestHandler = async (req, res, next) => { //* wont do
//     let patchId: string = req.params.chem_id

//     let { inputArr }: vetoAny = await Chem.findById(patchId)
//     inputArr = shufleArr(inputArr)
//     let newChemObj: ChemSchema = {
//         inputArr, //* shufle old arr
//         outputArr: makeChem(inputArr) //* make chems out of shufled arr
//     }
//     let resp: Partial<ChemSchema> = {}
//     await Chem.findByIdAndUpdate(patchId, newChemObj, { new: true }, (err: Error, chem: vetoAny) => {
//         if (err) return next(err.message)
//         resp = chem
//     })
//     res.send(resp)
// } 

export const controlerFuncs = {
    getHandler,
    postHandler,
    // patchHandler,
}