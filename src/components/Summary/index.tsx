import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";
import { currencyFormatter } from "../../utils/formatters";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {

  const summary = useSummary()

  return (
    <SummaryContainer >
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#80b37e" />
        </header>
        <h2>{currencyFormatter.format(summary.income)}</h2>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <h2>
          {currencyFormatter.format(summary.outcome)}
        </h2>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <h2>{currencyFormatter.format(summary.total)}</h2>
      </SummaryCard>
    </SummaryContainer>
  );
}
