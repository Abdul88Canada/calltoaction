import express from 'express';

import {getTypes, createType} from '../controllers/types.js';

const router = express.Router();


router.get('/', getTypes);
router.post('/', createType);

export default router;