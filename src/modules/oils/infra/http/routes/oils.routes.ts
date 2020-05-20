import { Router } from 'express';

import OilsController from '../controllers/OilsController';

const oilsRouter = Router();
const oilsController = new OilsController();

oilsRouter.post('/', oilsController.create);
oilsRouter.put('/', oilsController.update);
oilsRouter.delete('/', oilsController.delete);

export default oilsRouter;
