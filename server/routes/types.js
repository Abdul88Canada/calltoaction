import express from 'express';

import {getTypes, createType, updateType, getOneType, updateTypeCount, deleteType} from '../controllers/types.js';

const router = express.Router();


router.get('/', getTypes);
router.get('/:id', getOneType);
router.post('/', createType);
router.patch('/:id', updateType);
router.patch('/:id/updateCount', updateTypeCount);
router.delete('/:id', deleteType);

export default router;