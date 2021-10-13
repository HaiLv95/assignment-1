import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about";
import AddProduct from "./components/addProduct";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Shop from "./components/shop";
import Shopsingle from "./components/shop-single";
import Signin from "./components/Signin";
import Signup from "./components/signup";
import Profile from './components/profile';

export default function Routes() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/shop" exact>
                    <Shop  />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/shop/shop-single/:id" exact>
                    <Shopsingle />
                </Route>
                <Route path="/signin" exact>
                    <Signin />
                </Route>
                <Route path="/signup" exact>
                    <Signup/>
                </Route>
                <Route path="/shop/add">
                    <AddProduct />
                </Route>
                <Route path="/shop/edit/:id">
                    <AddProduct />
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}
