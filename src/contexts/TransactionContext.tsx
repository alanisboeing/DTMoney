import { useCallback, useEffect, useState } from "react";
import { ITransactionContext } from "../models/interfaces/ITransactionContext";
import { IPropsTransactionContext } from "../models/interfaces/IPropsTransactionContext";
import { ITransaction } from "../models/interfaces/ITransaction";
import { api } from "../libs/axios";
import { createContext } from "use-context-selector";

export const TransactionContext = createContext({} as ITransactionContext);

export function TransactionsProvider({ children }: IPropsTransactionContext) {
  const [transactions, setTransactions] = useState<ITransaction[]>(
    [] as ITransaction[]
  );

  const fetchTransactions = useCallback(
    async(query?: string) => {
      const response = await api.get("transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
          q: query,
        },
      });
      setTransactions(response.data);
    },[]
  )

  const createTransaction = useCallback(
    async(data: ITransaction) => {
      const { description, price, category, type } = data;
      const response = await api.post("transactions", {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      });
      setTransactions((state) => [response.data, ...state]);
    },[]
  )

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
