import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import Oil from '@modules/oils/infra/typeorm/entities/Oil';
import IOilsRepository from '../repositories/IOilsRepository';
import ICreateOilDTO from '../dtos/ICreateOilDTO';

@injectable()
class CreateOilService {
  constructor(
    @inject('OilsRepository')
    private oilsRepository: IOilsRepository,
  ) {}

  public async execute(data: ICreateOilDTO): Promise<Oil> {
    const inputOil = data;

    if (!inputOil.sapNaOH) {
      inputOil.sapNaOH = inputOil.sapKOH * 0.7130125;
    }

    const oilWithSameName = await this.oilsRepository.findByName({
      oilName: inputOil.oilName,
      inciName: inputOil.inciName,
    });

    if (oilWithSameName) throw new AppError('This Oil was already registered');

    const oil = await this.oilsRepository.create(inputOil);

    return oil;
  }
}

export default CreateOilService;
