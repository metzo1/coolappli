import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 4833,
  login: 'q^Z@9v\\DG8TO\\+UxQ\\]Mw0pVw\\C2Rj7',
};

export const sampleWithPartialData: IUser = {
  id: 4138,
  login: 'D8L+@0P112\\1npa',
};

export const sampleWithFullData: IUser = {
  id: 31823,
  login: 'TD@DIPX\\`MRZePs\\ gHJ2y\\"u',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
