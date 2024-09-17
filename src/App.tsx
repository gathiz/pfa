import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Overview from "./components/overview/Overview.tsx";
import Transactions from "./components/transactions/Transactions.tsx";
import Pots from "./components/pots/Pots.tsx";
import Budgets from "./components/budgets/Budgets.tsx";
import Bills from "./components/bills/Bills.tsx";

const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
