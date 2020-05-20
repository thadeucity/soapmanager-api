import { getRepository, Repository } from 'typeorm';

import IOilsRepository from '@modules/oils/repositories/IOilsRepository';
import ICreateOilDTO from '@modules/oils/dtos/ICreateOilDTO';
import ISearchOilNameDTO from '@modules/oils/dtos/ISearchOilNameDTO';

import Oil from '../entities/Oil';

class OilsRepository implements IOilsRepository {
  private ormRepository: Repository<Oil>;

  constructor() {
    this.ormRepository = getRepository(Oil);
  }

  public async create(data: ICreateOilDTO): Promise<Oil> {
    const oil = this.ormRepository.create({
      oil_name: data.oilName,
      inci_name: data.inciName,
      sap_naoh: data.sapNaOH,
      sap_koh: data.sapKOH,
      lauric: data.lauric,
      myristic: data.myristic,
      palmitic: data.palmitic,
      stearic: data.stearic,
      ricinoleic: data.ricinoleic,
      oleic: data.oleic,
      linoleic: data.linoleic,
      linolenic: data.linolenic,
      hardness: data.hardness,
      cleansing: data.cleansing,
      condition: data.condition,
      bubbly: data.bubbly,
      creamy: data.creamy,
      iodine: data.iodine,
      ins: data.ins,
    });

    await this.ormRepository.save(oil);

    return oil;
  }

  public async update(inputOil: Oil): Promise<Oil> {
    const updatedOil = await this.ormRepository.save(inputOil);
    return updatedOil;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findById(id: string): Promise<Oil | undefined> {
    const findOil = await this.ormRepository.findOne(id);
    return findOil;
  }

  public async findByName({
    oilName,
    inciName,
  }: ISearchOilNameDTO): Promise<Oil | undefined> {
    const findOil = await this.ormRepository.findOne({
      where: [
        {
          oil_name: oilName,
        },
        {
          inci_name: inciName,
        },
      ],
    });

    return findOil;
  }
}

export default OilsRepository;
