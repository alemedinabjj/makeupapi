import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Details } from "./pages/Details";
import { Footer } from "./components/Footer";
import { ButtonToTop } from "./components/ButtonToTop";
import { Provider } from "react-redux";
import { CartPage } from "./pages/CartPage";
import store from "./reducers/Store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <ButtonToTop />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
