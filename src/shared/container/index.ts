import { container } from 'tsyringe';

import IOilsRepository from '@modules/oils/repositories/IOilsRepository';
import OilsRepository from '@modules/oils/infra/typeorm/repositories/OilsRepository';

container.registerSingleton<IOilsRepository>('OilsRepository', OilsRepository);
