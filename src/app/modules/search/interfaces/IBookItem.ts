import {ImageLinks} from './IBooksVolumes';

export interface IBookItem {
  title: string;
  subtitle?: string;
  imageLinks?: ImageLinks;
  description?: string;
}
