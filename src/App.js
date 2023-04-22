import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import PreLoader from "./components/PreLoader";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <PreLoader />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </>
  );
}

export default App;
