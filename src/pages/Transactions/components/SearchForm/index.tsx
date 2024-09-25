import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionContext } from "../../../../contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputsType = z.infer<typeof searchFormSchema>;

export function SearchForm() {

  const fetchTransactions = useContextSelector(TransactionContext, 
    (context)=>{
      return context.fetchTransactions
    }
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputsType>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputsType) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="search"
        placeholder="Busque transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
}
