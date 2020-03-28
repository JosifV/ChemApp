import mongoose from 'mongoose'

let Schema = mongoose.Schema;

const ChemShcema = new Schema({
    inputArr:[String],
    outputArr:[String],
    elCount:Object
})

export const Chem = mongoose.model('chem', ChemShcema)
 