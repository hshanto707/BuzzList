import express from 'express';
import { StatusCodes } from 'http-status-codes'

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'Welcome to BuzzList users API' });
})

export default router;
