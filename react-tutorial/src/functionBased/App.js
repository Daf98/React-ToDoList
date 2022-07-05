import TodoContainer from "../functionBased/components/TodoContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NotMatch from "./pages/NotMatch";
import Navbar from "./components/Navbar";
import SinglePage from "./pages/SinglePage";
import AnotherPage from "./pages/AnotherPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/about/singlepage" element={<SinglePage />} />
        <Route exact path="/about/anotherpage" element={<AnotherPage />} />
        <Route exact path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
