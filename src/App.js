import "./App.css";
import Dashboard from "./presentation/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutProvider from "./presentation/Layout";
import "antd/dist/antd.min.css";

function App() {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </LayoutProvider>
    </BrowserRouter>
  );
}

export default App;
