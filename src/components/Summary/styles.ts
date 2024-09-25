import styled from "styled-components";
import { ICardVariantColor } from "../../models/interfaces/ICardVariantColor";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

export const SummaryCard = styled.div<ICardVariantColor>`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.5rem;

  background: ${props => props.variant == 'green' ? props.theme["green-700"] : props.theme["gray-600"]};
  border-radius: 6px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

 
  
`;

