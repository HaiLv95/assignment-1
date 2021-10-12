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

export default function Routes(props) {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home {...props} />
                </Route>
                <Route path="/shop" exact>
                    <Shop {...props} />
                </Route>
                <Route path="/about" exact>
                    <About {...props} />
                </Route>
                <Route path="/shop-single/:id" exact>
                    <Shopsingle {...props} />
                </Route>
                <Route path="/signin" exact>
                    <Signin {...props} />
                </Route>
                <Route path="/signup" exact>
                    <Signup {...props} />
                </Route>
                <Route path="/add">
                    <AddProduct {...props} />
                </Route>
                <Route path="/edit/:id">
                    <AddProduct {...props} />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}
