import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/DefaultTheme";
import { GlobalStyle } from "./styles/Global";
import { Transactions } from "./pages/Transactions";
import { Header } from "./components/Header";
import { TransactionsProvider } from "./contexts/TransactionContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Header />
        <Transactions />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
