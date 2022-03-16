import express from 'express';

import {getTypes, createType, updateType} from '../controllers/types.js';

const router = express.Router();


router.get('/', getTypes);
router.post('/', createType);
router.patch('/:id', updateType);

export default router;