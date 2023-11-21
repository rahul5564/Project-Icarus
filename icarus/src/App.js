import { Routes, Route } from "react-router-dom";
import { Like } from "./Pages/Components/like";
import { Cart } from "./Pages/Components/cart";
import { Main } from "./Main";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
