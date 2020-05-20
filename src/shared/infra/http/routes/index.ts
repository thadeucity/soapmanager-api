import { Router } from 'express';

import oilsRouter from '@modules/oils/infra/http/routes/oils.routes';
import calculatorRouter from '@modules/calculator/infra/http/routes/calculator.routes';

const routes = Router();

routes.use('/calculator', calculatorRouter);
routes.use('/oils', oilsRouter);

export default routes;
