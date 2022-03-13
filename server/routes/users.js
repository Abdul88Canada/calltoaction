import exporess from 'express';

import { getUser, createUser } from '../controllers/users.js';

const router = exporess.Router();

router.get('/', getUser);
router.post('/', createUser);

export default router;