import '../styles/home.css';
function Home() {
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
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img
                                        className="img-fluid"
                                        src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_450,c_limit/cff35764-02f5-464c-9bc6-0b4b6c3f5c24/retro-gts-shoe-rHcd47.png"
                                        alt="Banner"></img>
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success">
                                            <b> Nike Air Zoom Pegasus 38</b>
                                        </h1>
                                        <p>Your workhorse with wings returns.The Nike Air Zoom Pegasus 38 has that extra bounce for long, short or everyday runs.It's cool and breathable with a wider fit at the toes and plenty of cushioned support that will make you feel like you're flying on the road.Bold colours nod to the world coming together to celebrate sport.</p>
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