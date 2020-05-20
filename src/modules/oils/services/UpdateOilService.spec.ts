import AppError from '@shared/errors/AppError';

import FakeOilsRepository from '@modules/oils/repositories/fakes/FakeOilsRepository';
import CreateOilService from './CreateOilService';
import UpdateOilService from './UpdateOilService';

let fakeOilsRepository: FakeOilsRepository;
let createOil: CreateOilService;
let updateOil: UpdateOilService;

describe('CreateOil', () => {
  beforeEach(() => {
    fakeOilsRepository = new FakeOilsRepository();
    createOil = new CreateOilService(fakeOilsRepository);
    updateOil = new UpdateOilService(fakeOilsRepository);
  });

  it('should be able to update an Oil', async () => {
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

    const updatedOil = await updateOil.execute({
      id: oil.id,
      inputOil: {
        oilName: 'oil 1 updated',
        inciName: 'oil 1 cient updated',
        sapKOH: 0.4,
        lauric: 2,
        myristic: 2,
        palmitic: 2,
        stearic: 2,
        ricinoleic: 2,
        oleic: 2,
        linoleic: 2,
        linolenic: 2,
        hardness: 5,
        cleansing: 5,
        condition: 5,
        bubbly: 5,
        creamy: 5,
        iodine: 5,
        ins: 200,
      },
    });

    expect(updatedOil.id).toBe(oil.id);
    expect(updatedOil.lauric).toBe(2);
    expect(updatedOil.bubbly).toBe(5);
  });

  it('should not be able to update a non-existing Oil', async () => {
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
      updateOil.execute({
        id: 'non-existing-id',
        inputOil: {
          oilName: 'oil 1 updated',
          inciName: 'oil 1 cient updated',
          sapNaOH: 0.7,
          sapKOH: 0.4,
          lauric: 2,
          myristic: 2,
          palmitic: 2,
          stearic: 2,
          ricinoleic: 2,
          oleic: 2,
          linoleic: 2,
          linolenic: 2,
          hardness: 5,
          cleansing: 5,
          condition: 5,
          bubbly: 5,
          creamy: 5,
          iodine: 5,
          ins: 200,
        },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the oil name to a name that is already in use', async () => {
    await createOil.execute({
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

    const oil = await createOil.execute({
      oilName: 'oil 2',
      inciName: 'oil 2 cient',
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
      updateOil.execute({
        id: oil.id,
        inputOil: {
          oilName: 'oil 1',
          inciName: 'oil 1 cient',
          sapKOH: 0.4,
          lauric: 2,
          myristic: 2,
          palmitic: 2,
          stearic: 2,
          ricinoleic: 2,
          oleic: 2,
          linoleic: 2,
          linolenic: 2,
          hardness: 5,
          cleansing: 5,
          condition: 5,
          bubbly: 5,
          creamy: 5,
          iodine: 5,
          ins: 200,
        },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should update both SAP values at the same time', async () => {
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

    const updatedOil = await updateOil.execute({
      id: oil.id,
      inputOil: {
        oilName: 'oil 1 updated',
        inciName: 'oil 1 cient updated',
        sapKOH: 0.4,
        lauric: 2,
        myristic: 2,
        palmitic: 2,
        stearic: 2,
        ricinoleic: 2,
        oleic: 2,
        linoleic: 2,
        linolenic: 2,
        hardness: 5,
        cleansing: 5,
        condition: 5,
        bubbly: 5,
        creamy: 5,
        iodine: 5,
        ins: 200,
      },
    });

    expect(updatedOil.sap_naoh).toBe(updatedOil.sap_koh * 0.7130125);
  });
});
