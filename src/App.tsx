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
import { UserContextProvider } from './contexts/UserContext';


export function App() {
  return (
   
   <Router>
      <div className="App">

        <UserContextProvider>
          <Header />

          <Switch>
            <Route path="/" exact component={HomeBoard} />
            <Route path="/products" exact component={ProductsPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/promotions" component={PromotionsPage} />
            <Route path="/order" exact component={OrderPage} />
            <Route path="/report" component={ReportPage} />
            <Route path="/users" exact component={UserPage} />
            <Route path="/sales" exact component={SalesPage} />
            <Route path="/paymentoption" exact component={PaymentOption} />
            <Route path="/paymentoption/newpaymentoption" component={NewPaymentOption} />
            <Route path="/products/newproduct" component={NewProductPage} />
            <Route path="/promotion/newpromotion" component={NewPromotionPage} />
            <Route path="/order/neworder" component={NewOrderPage} />
            <Route path="/users/newuser" component={NewUserPage} />
            <Route path="/users/updateuser/:id" exact component={UpdateUserPage} />
            <Route path="/products/updateproduct" component={UpdateProductPage} />
            <Route path="/promotions/updatepromotions" component={UpdateProductPage} />
          </Switch>

          <Footer />
        </UserContextProvider>
        <GlobalStyle />
      </div>
   </Router>
  
  );
}


//<Header />
//<HomeBoard />
//<GlobalStyle />