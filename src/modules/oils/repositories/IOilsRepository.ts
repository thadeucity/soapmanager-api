import Oil from '../infra/typeorm/entities/Oil';
import ICreateOilDTO from '../dtos/ICreateOilDTO';
import ISearchOilNameDTO from '../dtos/ISearchOilNameDTO';

export default interface IOilsRepository {
  findById(id: string): Promise<Oil | undefined>;
  findByName({
    oilName,
    inciName,
  }: ISearchOilNameDTO): Promise<Oil | undefined>;
  create(data: ICreateOilDTO): Promise<Oil>;
  update(data: Oil): Promise<Oil>;
  delete(id: string): Promise<void>;
}
