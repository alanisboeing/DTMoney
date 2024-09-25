import { TransactionContext } from "../contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";

export function useSummary(){
  const transactions = useContextSelector(TransactionContext, 
    (context)=>{
      return context.transactions
    })

  console.table(transactions)

  const summary = transactions.reduce(
    (summaryAcc, transaction) => {
      if (transaction.type == "income") {
        summaryAcc.income += transaction.price;
        summaryAcc.total += transaction.price;
      } 
      if (transaction.type == "outcome") {
        summaryAcc.outcome += transaction.price;
        summaryAcc.total -= transaction.price;
      }
      return summaryAcc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  return summary
}