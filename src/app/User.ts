import { Product } from './Product';

export interface User {
  username: string;
  email: string;
  password: string;
  alergens: string[];
  bookmarks: Product[];
}
