export interface ITransaction {
  id?: string,
  description: string,
  price: number,
  category: string,
  createdAt?: string,
  type: 'income' |  'outcome',

}