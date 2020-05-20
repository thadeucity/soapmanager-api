import { Router } from 'express';

import CalculatorController from '../controllers/CalculatorController';

const calculatorRouter = Router();
const calculatorController = new CalculatorController();

calculatorRouter.post('/', calculatorController.post);

export default calculatorRouter;
