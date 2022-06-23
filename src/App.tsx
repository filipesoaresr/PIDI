import React from 'react';
import {Header} from './components/Header';
import { HomeBoard } from './pages/HomeBoard';
import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import ProductsPage from './pages/Product/ProductsPage';
import NewProductPage from './pages/Product/NewProductPage';
import LoginPage from './pages/LoginPage';
import PromotionsPage from './pages/Promotion/PromotionsPage';
import OrderPage from './pages/Order/OrderPage';
import ReportPage from './pages/ReportPage';
import UserPage from './pages/User/UserPage';
import SalesPage from './pages/Sales/SalesPage';
import Footer from './components/Footer';
import NewPromotionPage from './pages/Promotion/NewPromotionPage';
import NewOrderPage from './pages/Order/NewOrderPage';
import NewUserPage from './pages/User/NewUserPage';
import PaymentOption from './pages/PaymentOption/PaymentOptionPage';
import NewPaymentOption from './pages/PaymentOption/NewPaymentOption';
import UpdateUserPage from './pages/User/UpdateUserPage';
import UpdateProductPage from './pages/Product/UpdateProductPage';
import UpdateOrderPage from './pages/Order/UpdateOrderPage';
import ShowOrderPage from './pages/Order/ShowOrderPage';
import ErrorServerPage from './pages/ErrorPages/internal-server-error';
import ErrorUnauthorizedPage from './pages/ErrorPages/unauthorized';
import ErrorNotFoundPage from './pages/ErrorPages/not-found';
import ErrorRequestPage from './pages/ErrorPages/bad-request';
import ErrorForbiddenPage from './pages/ErrorPages/forbidden';
import ListSalesPage from './pages/Sales/ListSalesPage';
import UpdatePromotionPage from './pages/Promotion/UpdatePromotionPage';


import { ProductProvider } from './contexts/ProductContext';
import { UserProvider } from './contexts/UserContext';
import { PaymentProvider } from './contexts/PaymentContext';
import { OrderProvider } from './contexts/OrderContext';
import { PromotionProvider } from './contexts/PromotionContext';
import { AuthProvider } from './contexts/AuthContext';


export function App() {
  return (
   
   <Router>
      <div className="App">
        <AuthProvider>
        <UserProvider>
        <PaymentProvider>
        <PromotionProvider>
        <ProductProvider >
          <Header />

          <Switch>
            <Route path="/" exact component={HomeBoard} />
            <Route path="/login" component={LoginPage} />
            <Route path="/products" exact component={ProductsPage} />
            <Route path="/products/newproduct" component={NewProductPage} />
            <Route path="/products/updateproduct" component={UpdateProductPage} />
            <Route path="/users" exact component={UserPage} />
            <Route path="/users/newuser" component={NewUserPage} />
            <Route path="/users/updateuser/" exact component={UpdateUserPage} />
            <Route path="/promotions" component={PromotionsPage} />
            <Route path="/promotion/newpromotion" component={NewPromotionPage} />
            <Route path="/promotion/updatepromotions" component={UpdatePromotionPage} />
            <Route path="/paymentoption" exact component={PaymentOption} />
            <Route path="/paymentoption/newpaymentoption" component={NewPaymentOption} />
            <Route path="/order" exact component={OrderPage} />
            <Route path="/order/neworder" component={NewOrderPage} />
            <Route path="/report" component={ReportPage} />
            <Route path="/sales" exact component={SalesPage} />
            <Route path="/order/updateorder" exact component={UpdateOrderPage} />
            <Route path="/order/showorder" exact component={ShowOrderPage} />
            <Route path="/sales/listsalespage" exact component={ListSalesPage} />
            <Route path="/internal-server-error-500" exact component={ErrorServerPage} />

          </Switch>

          <Footer />
        </ProductProvider>
        </PromotionProvider>
        </PaymentProvider>
        </UserProvider>
        </AuthProvider>
        <GlobalStyle />
      </div>
   </Router>
  
  );
}


//<Header />
//<HomeBoard />
//<GlobalStyle />