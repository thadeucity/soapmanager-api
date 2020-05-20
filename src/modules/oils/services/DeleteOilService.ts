// import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import IOilsRepository from '../repositories/IOilsRepository';

@injectable()
class CreateOilService {
  constructor(
    @inject('OilsRepository')
    private oilsRepository: IOilsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.oilsRepository.delete(id);
  }
}

export default CreateOilService;
