import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import Oil from '@modules/oils/infra/typeorm/entities/Oil';
import IOilsRepository from '../repositories/IOilsRepository';
import IUpdateOilDTO from '../dtos/IUpdateOilDTO';

@injectable()
class UpdateOilService {
  constructor(
    @inject('OilsRepository')
    private oilsRepository: IOilsRepository,
  ) {}

  public async execute(data: IUpdateOilDTO): Promise<Oil> {
    const { inputOil, id } = data;

    const foundOil = await this.oilsRepository.findById(id);

    if (!foundOil) throw new AppError('No Oil found with this ID');

    const oilWithSameName = await this.oilsRepository.findByName({
      oilName: inputOil.oilName,
      inciName: inputOil.inciName,
    });

    if (oilWithSameName && oilWithSameName.id !== id) {
      throw new AppError('Name already in use');
    }

    foundOil.oil_name = inputOil.oilName;
    foundOil.inci_name = inputOil.inciName;
    foundOil.sap_koh = inputOil.sapKOH;
    foundOil.sap_naoh = inputOil.sapKOH * 0.7130125;
    foundOil.lauric = inputOil.lauric;
    foundOil.myristic = inputOil.myristic;
    foundOil.palmitic = inputOil.palmitic;
    foundOil.stearic = inputOil.stearic;
    foundOil.ricinoleic = inputOil.ricinoleic;
    foundOil.oleic = inputOil.oleic;
    foundOil.linoleic = inputOil.linoleic;
    foundOil.linolenic = inputOil.linolenic;
    foundOil.hardness = inputOil.hardness;
    foundOil.cleansing = inputOil.cleansing;
    foundOil.condition = inputOil.condition;
    foundOil.bubbly = inputOil.bubbly;
    foundOil.creamy = inputOil.creamy;
    foundOil.iodine = inputOil.iodine;
    foundOil.ins = inputOil.ins;

    await this.oilsRepository.update(foundOil);

    return foundOil;
  }
}

export default UpdateOilService;
