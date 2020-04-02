import { Router } from "express";
import { controlerFuncs as CF } from "../controllers";
const router = Router()

router.get('/', CF.getHandler) //* get all chem
router.post('/', CF.postHandler) //* post new chem
// router.patch('/:chem_id', CF.patchHandler) //* remake old chem

export default router