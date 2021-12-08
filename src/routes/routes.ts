import { Router } from 'express';
import * as AuthController from '../controllers/authController'

const router = Router();

router.get('/ping', AuthController.ping);

export default router;