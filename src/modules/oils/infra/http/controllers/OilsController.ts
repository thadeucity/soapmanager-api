import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOilService from '@modules/oils/services/CreateOilService';
import UpdateOilService from '@modules/oils/services/UpdateOilService';
import DeleteOilService from '@modules/oils/services/DeleteOilService';

import ICreateOilDTO from '@modules/oils/dtos/ICreateOilDTO';
import IUpdateOilDTO from '@modules/oils/dtos/IUpdateOilDTO';

export default class CalculatorController {
  public async create(req: Request, res: Response): Promise<Response> {
    const inputOil: ICreateOilDTO = req.body;

    const createOil = container.resolve(CreateOilService);

    const oil = await createOil.execute(inputOil);

    return res.json(oil);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, inputOil }: IUpdateOilDTO = req.body;

    const updateOil = container.resolve(UpdateOilService);

    const updatedOil = await updateOil.execute({ id, inputOil });

    return res.json(updatedOil);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const deleteOil = container.resolve(DeleteOilService);

    await deleteOil.execute(id);

    return res.status(202).json({ message: `Oil ${id} deleted` });
  }
}
