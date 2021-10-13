import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import { getAll } from "./api/call-api";
import { useDispatch} from "react-redux";
import { actionType } from "./reducer/actiontype";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            getAll().then(response => {
                //truyền dữ liệu product về reducer
               dispatch({type: actionType.GETALL_PRODUCT, payload : response.data});
            });
        } catch (error) {
            console.log("failed: ", error);
        }
    }, []);
    
    return (
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
