import { uuid } from 'uuidv4';

import IOilsRepository from '@modules/oils/repositories/IOilsRepository';
import ICreateOilDTO from '@modules/oils/dtos/ICreateOilDTO';
import ISearchOilNameDTO from '@modules/oils/dtos/ISearchOilNameDTO';

import Oil from '@modules/oils/infra/typeorm/entities/Oil';

class OilsRepository implements IOilsRepository {
  private oils: Oil[] = [];

  public async create(oilInfo: ICreateOilDTO): Promise<Oil> {
    const oil = new Oil();

    Object.assign(
      oil,
      { id: uuid() },
      {
        oil_name: oilInfo.oilName,
        inci_name: oilInfo.inciName,
        sap_naoh: oilInfo.sapNaOH,
        sap_koh: oilInfo.sapKOH,
        lauric: oilInfo.lauric,
        myristic: oilInfo.myristic,
        palmitic: oilInfo.palmitic,
        stearic: oilInfo.stearic,
        ricinoleic: oilInfo.ricinoleic,
        oleic: oilInfo.oleic,
        linoleic: oilInfo.linoleic,
        linolenic: oilInfo.linolenic,
        hardness: oilInfo.hardness,
        cleansing: oilInfo.cleansing,
        condition: oilInfo.condition,
        bubbly: oilInfo.bubbly,
        creamy: oilInfo.creamy,
        iodine: oilInfo.iodine,
        ins: oilInfo.ins,
      },
    );

    this.oils.push(oil);

    return oil;
  }

  public async update(inputOil: Oil): Promise<Oil> {
    const findOilIndex = this.oils.findIndex((oil) => oil.id === inputOil.id);

    this.oils[findOilIndex] = inputOil;

    return inputOil;
  }

  public async delete(id: string): Promise<void> {
    const findOilIndex = this.oils.findIndex((oil) => oil.id === id);

    this.oils.splice(findOilIndex, 1);
  }

  public async findByName({
    oilName,
    inciName,
  }: ISearchOilNameDTO): Promise<Oil | undefined> {
    const findOil = this.oils.find(
      (oil) => oil.oil_name === oilName || oil.inci_name === inciName,
    );

    return findOil;
  }

  public async findById(id: string): Promise<Oil | undefined> {
    const findOil = this.oils.find((oil) => oil.id === id);

    return findOil;
  }
}

export default OilsRepository;
