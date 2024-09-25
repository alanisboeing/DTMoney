import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceColor, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionContext";
import { currencyFormatter, dateFormatter } from "../../utils/formatters";
import { useContextSelector } from "use-context-selector";


export function Transactions() {
  const transactions = useContextSelector(TransactionContext, 
    (context)=>{
      return context.transactions
    }
  )
  return (
    <TransactionsContainer>
      <Summary />
      <SearchForm />
      <TransactionsTable>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceColor variant={transaction.type}>
                    {transaction.type == "outcome" && "- "}
                    {currencyFormatter.format(transaction.price)}
                  </PriceColor>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            );
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
}
