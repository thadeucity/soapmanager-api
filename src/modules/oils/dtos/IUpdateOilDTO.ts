import ICreateOilDTO from '@modules/oils/dtos/ICreateOilDTO';

export default interface IUpdateOilDTO {
  id: string;
  inputOil: ICreateOilDTO;
}
