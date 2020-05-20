import AppError from '@shared/errors/AppError';

import FakeOilsRepository from '@modules/oils/repositories/fakes/FakeOilsRepository';
import CreateOilService from './CreateOilService';

let fakeOilsRepository: FakeOilsRepository;
let createOil: CreateOilService;

describe('CreateOil', () => {
  beforeEach(() => {
    fakeOilsRepository = new FakeOilsRepository();
    createOil = new CreateOilService(fakeOilsRepository);
  });

  it('should be able to create a new Oil', async () => {
    const oil = await createOil.execute({
      oilName: 'oil 1',
      inciName: 'oil 1 cient',
      sapNaOH: 0.5,
      sapKOH: 0.2,
      lauric: 5,
      myristic: 5,
      palmitic: 5,
      stearic: 5,
      ricinoleic: 5,
      oleic: 5,
      linoleic: 5,
      linolenic: 5,
      hardness: 5,
      cleansing: 5,
      condition: 5,
      bubbly: 5,
      creamy: 5,
      iodine: 5,
      ins: 100,
    });

    expect(oil).toHaveProperty('id');
  });

  it('should not be able to create two oils with the same name', async () => {
    await createOil.execute({
      oilName: 'oil 1',
      inciName: 'oil 1 cient',
      sapNaOH: 0.5,
      sapKOH: 0.2,
      lauric: 5,
      myristic: 5,
      palmitic: 5,
      stearic: 5,
      ricinoleic: 5,
      oleic: 5,
      linoleic: 5,
      linolenic: 5,
      hardness: 5,
      cleansing: 5,
      condition: 5,
      bubbly: 5,
      creamy: 5,
      iodine: 5,
      ins: 100,
    });

    await expect(
      createOil.execute({
        oilName: 'oil 1',
        inciName: 'oil 1 cient',
        sapNaOH: 0.5,
        sapKOH: 0.2,
        lauric: 5,
        myristic: 5,
        palmitic: 5,
        stearic: 5,
        ricinoleic: 5,
        oleic: 5,
        linoleic: 5,
        linolenic: 5,
        hardness: 5,
        cleansing: 5,
        condition: 5,
        bubbly: 5,
        creamy: 5,
        iodine: 5,
        ins: 100,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create two oils with the same Insi name', async () => {
    await createOil.execute({
      oilName: 'oil 1',
      inciName: 'oil 1 cient',
      sapNaOH: 0.5,
      sapKOH: 0.2,
      lauric: 5,
      myristic: 5,
      palmitic: 5,
      stearic: 5,
      ricinoleic: 5,
      oleic: 5,
      linoleic: 5,
      linolenic: 5,
      hardness: 5,
      cleansing: 5,
      condition: 5,
      bubbly: 5,
      creamy: 5,
      iodine: 5,
      ins: 100,
    });

    await expect(
      createOil.execute({
        oilName: 'not the same oil',
        inciName: 'oil 1 cient',
        sapNaOH: 0.5,
        sapKOH: 0.2,
        lauric: 5,
        myristic: 5,
        palmitic: 5,
        stearic: 5,
        ricinoleic: 5,
        oleic: 5,
        linoleic: 5,
        linolenic: 5,
        hardness: 5,
        cleansing: 5,
        condition: 5,
        bubbly: 5,
        creamy: 5,
        iodine: 5,
        ins: 100,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to define a NaOH SAP value if not provided', async () => {
    const oil = await createOil.execute({
      oilName: 'oil 1',
      inciName: 'oil 1 cient',
      sapKOH: 0.2,
      lauric: 5,
      myristic: 5,
      palmitic: 5,
      stearic: 5,
      ricinoleic: 5,
      oleic: 5,
      linoleic: 5,
      linolenic: 5,
      hardness: 5,
      cleansing: 5,
      condition: 5,
      bubbly: 5,
      creamy: 5,
      iodine: 5,
      ins: 100,
    });

    expect(oil.sap_naoh).toBe(oil.sap_koh * 0.7130125);
  });
});
