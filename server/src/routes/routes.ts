import { Router } from "express";
import { controlerFuncs as CF } from "../controllers";
const router = Router()

router.get('/', CF.getHandler) //* get all chem
router.post('/', CF.postHandler) //* post new chem
// router.patch('/:chem_id', CF.patchHandler) //* remake old chem
// router.delete('/:chem_id', CF.delHandler) //* delete some chem

export default router