import { RequestHandler } from "express";
import { Chem } from "../models";
import { ChemSchema, vetoAny } from "../types";
import { shufleArr } from "./utils/shufleArr";
import { seeder } from "./utils/seeder";
import { makeChem } from "./utils/makeChem";
import { countChem } from "./utils/countChem";

// let chems: string[] = makeChem(shufleArr(seeder()))
// countChem(chems)

let getHandler: RequestHandler = async (req, res) => { //*
    let resp = await Chem.find({})

    res.status(200).send([resp, countChem(resp as vetoAny)]) //*  [resp jedinjenja, i zbir jedinjenja]
}
let postHandler: RequestHandler = async (req, res) => {
    //* nabavi input arr sa clienta 
    let inputArr: string[] = req.body.inputArr

    //* treba ovako da izgleda
    // {
    //     "inputArr":["a", "b"]
    // }

    //* napravi output arr na serveru
    let outputArr: string[] = makeChem(shufleArr(inputArr))

    let resp: vetoAny = await Chem.create({ inputArr, outputArr })

    res.status(201).send(resp)
}
const patchHandler: RequestHandler = async (req, res, next) => { //*
    let patchId: string = req.params.chem_id

    let { inputArr }: vetoAny = await Chem.findById(patchId)
    inputArr = shufleArr(inputArr)
    let newChemObj: ChemSchema = {
        inputArr, //* promesani stari inputarr
        outputArr: makeChem(inputArr) //* arr nakon opet primenjene funkcije
    }
    let resp: Partial<ChemSchema> = {}
    await Chem.findByIdAndUpdate(patchId, newChemObj, { new: true }, (err: Error, chem: vetoAny) => {
        if (err) return next(err.message)
        resp = chem
    })
    res.send(resp)
}
const delHandler: RequestHandler = async (req, res, next) => { //*
    let delId = req.params.chem_id

    //* delete upit ka db
    let resp: vetoAny = {}
    await Chem.findByIdAndDelete(delId, (err: Error, delVal: vetoAny) => {
        if (err) return next(err.message)
        resp = delVal
    })
    res.send(resp)
}

export const controlerFuncs = {
    getHandler,
    postHandler,
    patchHandler,
    delHandler
}