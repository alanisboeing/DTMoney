import { ITransaction } from "./ITransaction";

export interface ITransactionContext {
  transactions : ITransaction[],
  fetchTransactions : (query?: string)=> Promise<void>,
  createTransaction : (data: ITransaction)=> Promise<void>
}