import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
function Shop() {
    //products <=> products : productReducer
    //dùng useSeclector để gọi ra rootReducer (products : productReducer ). sau đó lấy products trong initialState
    const productSelector = useSelector(state => state.products);
    const user = useSelector(user => user.user);
    const history = useHistory();
    const [inputSearch, setInputSearch] = useState('');
    const [outputSearch, setOutputSearch] = useState([]);
    const onHandleClick = () => {
        if (user.status) {
            history.push("/shop/add")
        } else {
            history.push("/signin")
        }
    }
    //set product ban đầu
    //set product khi tìm kiếm
    useEffect(() => {
        setOutputSearch([]); 
        console.log(1, outputSearch);
        console.log(2, productSelector.products)
        productSelector.products.filter(product =>{
            if (product.name.toLowerCase().includes(inputSearch.toLowerCase())){
                console.log(product)
                setOutputSearch(outputSearch =>[...outputSearch,product]);
            };
        });
    }, [inputSearch])
    return (
        <div>
            {/* Modal */}
            {/* Start Content */}
            <div className="container py-5">

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Shoes</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="navbar align-self-center d-flex" style={{padding: 0}}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="search by name"
                                onChange={e => setInputSearch(e.target.value)}/>
                        </div>
                                <button className="btn btn-success" onClick={onHandleClick}>
                                    Create
                                </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            {outputSearch &&
                                outputSearch.map(item => (
                                    <div className="col-md-4">
                                        <div className="card mb-4 product-wap rounded-0">
                                            <div className="card rounded-0">
                                                <img
                                                    className="card-img rounded-0 img-fluid"
                                                    src={item.photo}
                                                    style={{ width: 300, height: 300 }}
                                                    alt=''
                                                />
                                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <Link
                                                                className="btn btn-success text-white mt-2"
                                                                to={"/shop/shop-single/" + item.id}>
                                                                <i className="far fa-eye" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <Link
                                                    to={"/shop/shop-single/" + item.id}
                                                    className="h3 text-decoration-none">
                                                    {item.name}
                                                </Link>
                                                <p className="text-center mb-0">${item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Content */}
        </div>
    );
}

export default Shop;