import { SearchMovie } from './search-movie';
export interface ResponseSearch {
  Response: string;
  Search: SearchMovie[];
  totalResults: string;
}
