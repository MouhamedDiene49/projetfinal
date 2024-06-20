import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Basket, Error, Login, Account, Search, ViewProductSingle, ViewCategoryProductList } from "./views/index";
import { Navbar, Footer } from "./components/common/index";
import { CategoryProvider } from './context/categoryContext';
import { BasketProvider } from './context/basketContext';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './routers/ProtectedRoute';
import PublicRoute from './routers/PublicRoute';

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <BasketProvider>
          <Router>
            <Navbar />
            <Routes>
              {/* Protected routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="account" element={<Account />} />
                <Route path="basket" element={<Basket />} />
              </Route>

              {/* Public routes */}
              <Route element={<PublicRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="error" element={<Error />} />
                <Route path="login" element={<Login />} />
                <Route path="products/:id" element={<ViewProductSingle />} />
                <Route path="category/:categoryKey" element={<ViewCategoryProductList />} />
                <Route path="search/:searchKey" element={<Search />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
            <Footer />
          </Router>
        </BasketProvider>
      </CategoryProvider>
    </AuthProvider>
  );
}

export default App;
