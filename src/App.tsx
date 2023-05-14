import { Route, Routes } from "react-router-dom";
import Navigator from "./pages/Navigator/Navigator";
import Layout from "./Layout";
import Summary from "./pages/Summary/Summary";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Summary />} />
          <Route path="navigator" element={<Navigator />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
