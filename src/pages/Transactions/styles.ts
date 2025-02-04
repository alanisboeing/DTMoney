import styled from "styled-components";
import { IPriceColor } from "../../models/interfaces/IPriceColor";

export const TransactionsContainer = styled.div`

`;

export const TransactionsTable = styled.table`
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 0;
  /* padding: 0 1.5rem; */

  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

`;

export const PriceColor = styled.span<IPriceColor>`
  color: ${props => props.variant == 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`
