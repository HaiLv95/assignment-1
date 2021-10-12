import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import { getAll } from "./api/call-api";

function App() {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState("");

    useEffect(() => {
        try {
            getAll().then(response => {
                setProducts(response.data);
            });
        } catch (error) {
            console.log("failed: ", error);
        }
    }, []);

    // delete product
    const onHandleDelete = id => {
        const resultDelete = products.filter(product => product.id !== id);
        setProducts(resultDelete);
    };
    const onHandleEdit = product => {
        const productsUpdate = products.map(item =>
            item.id === product.id ? product : item
        );
        setProducts(productsUpdate);
    };
    const onHandleAdd = product => {
        setProducts([...products, product]);
    };
    return (
        <div className="App">
            <Routes
                products={products}
                onDelete={onHandleDelete}
                onEdit={onHandleEdit}
                onAdd={onHandleAdd}
            />
        </div>
    );
}

export default App;
