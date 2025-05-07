import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get('/me', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('me?');
})

export default router