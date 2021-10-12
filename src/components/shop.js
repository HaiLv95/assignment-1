import { Link } from 'react-router-dom'

function Shop(props) {
    return (
      <div>
        {/* Modal */}
        {/* Start Content */}
        <div className="container py-5">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Shoes</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <Link role="button" className="btn btn-success" to="/add">
                  Create
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                {props.products &&
                  props.products.map(item => (
                    <div className="col-md-4">
                      <div className="card mb-4 product-wap rounded-0">
                        <div className="card rounded-0">
                          <img
                            className="card-img rounded-0 img-fluid"
                            src={item.photo}
                            width={302}
                            height={302}
                          />
                          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                              <li>
                                <Link
                                  className="btn btn-success text-white mt-2"
                                  to={"/shop-single/" + item.id}>
                                  <i className="far fa-eye" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <Link
                            to={"/shop-single/" + item.id}
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