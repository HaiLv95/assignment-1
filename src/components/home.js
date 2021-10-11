import '../styles/home.css';
function Home(props) {
  const productBanner = props.products[0];
    return (
      <div>
        {/* Modal */}
        {/* Start Banner Hero */}
        <div
          id="template-mo-zay-hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row p-5">
                  <div
                    className="mx-auto col-md-8 col-lg-6 order-lg-last"
                    >
                    <img className="img-fluid" src={productBanner.img}  alt={productBanner.name}></img>
                  </div>
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left align-self-center">
                      <h1 className="h1 text-success">
                        <b>{productBanner.name}</b>
                      </h1>
                      <p>{productBanner.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Banner Hero */}
      </div>
    );
}

export default Home;