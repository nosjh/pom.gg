import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import RosterT1Container from "./containers/RosterT1Container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path={`/${process.env.REACT_APP_HOST}`} element={<Main />} /> */}
      <Route path="/roster/:TeamId" element={<RosterT1Container />} />
    </Routes>
  );
}

export default App;
