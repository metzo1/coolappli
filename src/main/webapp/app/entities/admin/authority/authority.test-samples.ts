import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'ba708a71-561c-4fa8-b1cb-45ee73bd390c',
};

export const sampleWithPartialData: IAuthority = {
  name: '6d92985c-8334-4eda-a4ea-b534b6d17282',
};

export const sampleWithFullData: IAuthority = {
  name: 'eed11754-33f6-4152-911a-3ed305bde9b2',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
