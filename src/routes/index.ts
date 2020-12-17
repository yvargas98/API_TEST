import { Router } from 'express'

const router: Router = Router();

router.get('/', async (req, res) => {
    res.send('Welcome!');
});

export default router;