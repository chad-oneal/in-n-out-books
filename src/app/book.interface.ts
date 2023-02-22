/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Modified by: Chad ONeal
 * Date: 02/02/2023
 * Description: Book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
