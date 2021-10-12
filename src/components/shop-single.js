import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { get, remove } from '../api/call-api';

function Shopsingle(props) {
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState("")
    useEffect(() => {
        console.log("useEffect shop single");
        get(id).then(response => setProduct(response.data))
    }, [])
    //delete product
    const onDelete = (id) => {
        remove(id);
        props.onDelete(id)
        history.push("/shop");
    }
    return (
        <div>
            {/* Modal */}

            {/* Open Content */}
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img
                                    className="card-img img-fluid"
                                    src={product.photo}
                                />
                            </div>
                        </div>
                        {/* col end */}
                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="h2">{product.name}</h1>
                                    <p className="h3 py-2">${product.price}</p>

                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Brand:</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted">
                                                <strong>Easy Wear</strong>
                                            </p>
                                        </li>
                                    </ul>
                                    <h6>Description:</h6>
                                    <p>{product.description}  </p>
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <Link
                                                className="btn btn-success btn-lg"
                                                to={"/edit/" + product.id}>
                                                Edit
                                            </Link>
                                        </div>
                                        <div className="col d-grid">
                                            <button
                                                type="submit"
                                                className="btn btn-danger btn-lg"
                                                name="submit"
                                                value="addtocard"
                                                onClick={() => onDelete(product.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Close Content */}
        </div>
    );
}

export default Shopsingle;