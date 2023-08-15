import {Router} from "express";
import commingSoonController from './controllers/comingSoonController';

const router = Router();

router.use('/comingsoon', commingSoonController)

export default router;