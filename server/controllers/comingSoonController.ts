import { Router } from 'express';
import comingSoonService from '../services/comingSoonService';

const router = Router();

router.post('/', async (req, res) => {
    try {
        let message = await comingSoonService(req.body);
        res.json(message)
    } catch(err: any) {
        res.status(404).json({Error: err.message})
    }
})

export default router;