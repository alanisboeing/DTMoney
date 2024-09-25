import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-content: center;
`

export const NewTrasationButton = styled.button`
  height: 3.125rem;
  border: 0;
  font-weight: bold;

  padding: 0  1.25rem;
  border-radius: 6px;

  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};

  cursor: pointer;

  &:hover{
    background-color: ${props => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
  



`