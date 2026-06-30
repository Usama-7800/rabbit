import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* admin layout  */}
          {/* <Route path='/' element={<Home />} /> */}
          {/* user layout  */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route>{/* admin layout */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
