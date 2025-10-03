import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SavedRecipe from "./pages/SavedRecipe";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-recipe" element={<SavedRecipe />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
