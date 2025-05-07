import { Router } from "express";
const router = Router();
router.get('/me', (req, res, next) => {
    res.status(200).send('me?');
});
export default router;
