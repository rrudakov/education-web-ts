export interface Dress {
  id: number;
  title: string;
  description: string;
  size: number;
  pictures: string[];
  price: string;
  created_on: string;
  updated_on: string;
}

export interface DressForm {
  title: string;
  description: string;
  size: number;
  pictures: string[];
  price: string;
  uploadDialogOpen: boolean;
}

export interface DressesState {
  dresses: Dress[];
  form: DressForm;
}

export const initialState: DressesState = {
  dresses: [],
  form: {
    title: '',
    description: '',
    size: 0,
    pictures: [],
    price: '',
    uploadDialogOpen: false,
  },
};
