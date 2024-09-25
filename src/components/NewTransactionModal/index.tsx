import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionContext } from "../../contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.coerce.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type NewTransactionInputType = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {

  const createTransaction = useContextSelector(TransactionContext, 
    (context)=>{
      return context.createTransaction
    }
  )
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionInputType>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  });
  async function handleSubmitNewTransaction(data : NewTransactionInputType) {
    createTransaction(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <form onSubmit={handleSubmit(handleSubmitNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register("description")}
          />
          <input type="number" placeholder="Preço" {...register("price")} />
          <input
            type="text"
            placeholder="Categoria"
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({field}) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
