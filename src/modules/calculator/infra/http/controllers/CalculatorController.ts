import { Request, Response } from 'express';

export default class CalculatorController {
  public post(req: Request, res: Response): Response {
    const oil = {
      name: 'teste',
      inci_name: 'teste a',
      sap_NaOH: 0,
      sap_KOH: 0,
      physicalProperties: {
        hardness: 0,
        cleansing: 0,
        // Mais outras 4 ou 5 propriedades
      },
      composition: {
        lauric: 0,
        myristic: 0,
        // Mais 4 propriedades
      },
    };

    return res.json({ message: 'HEY IU' });
  }
}
