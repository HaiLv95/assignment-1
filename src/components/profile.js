function Profile() {
    return (
          <div className="container">
        <div className="row">
          <div className="col col-lg-2">
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px' }}>
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                            <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                            <span className="fs-4">Sidebar</span>
                        </a>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page">
                                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link link-dark">
                                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link link-dark">
                                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
                                    Orders
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link link-dark">
                                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link link-dark">
                                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg>
                                    Customers
                                </a>
                            </li>
                        </ul>
                    </div>
          </div>
          <div className="col-6">

                    <div className="container-fluid p-0">
                        <section
                            className="resume-section p-3 p-lg-5 d-flex d-column"
                            id="about">
                            <div className="my-auto">
                                <img src="img/logo-s.png" className="img-fluid mb-3" alt="" />
                                <h1 className="mb-0">
                                    Johndon
                                    <span className="text-primary">Bonsen</span>
                                </h1>
                                <div className="subheading mb-5">
                                    THE NEXT BIG IDEA IS WAITING FOR ITS NEXT BIG CHANGER WITH
                                    <a href="#">THEMSBIT</a>
                                </div>
                                <p className="mb-5" style={{ maxWidth: "500px" }}>
                                    I am experienced in leveraging agile frameworks to provide a
                                    robust synopsis for high level overviews. Iterative approaches
                                    to corporate strategy foster collaborative thinking to further
                                    the overall value proposition.
                                </p>
                            </div>
                        </section>
                    </div>
          </div>
          <div className="col">
            Column
          </div>
        </div>
      </div>


    );
}

export default Profile;