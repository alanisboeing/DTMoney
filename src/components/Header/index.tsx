import {
  ContentContainer,
  HeaderContainer,
  NewTrasationButton,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <ContentContainer>
        <img src={Logo} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTrasationButton>Nova transação</NewTrasationButton>
          </Dialog.Trigger>

          <NewTransactionModal></NewTransactionModal>

          {/* <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal> */}
        </Dialog.Root>
      </ContentContainer>
    </HeaderContainer>
  );
}
