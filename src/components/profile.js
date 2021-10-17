import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
function Profile() {
    const history = useHistory();
    const userSelector = useSelector(state => state.user);
    const userProfile = userSelector.user;
    if (!userSelector.status) {
        history.push("/");
    }
    return (
          <div className="container">
        <div className="row">
          <div className="col col-lg-2">
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '220px' }}>
                        <hr />
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page">
                                   Edit Profile
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link active">
                                    Change password
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
                                <h1 className="mb-0">
                                    <span className="text-primary">{userProfile.fullname}</span>
                                </h1>
                                <div className="subheading mb-5">
                                  
                                </div>
                                <p className="mb-5" style={{ maxWidth: "500px" }}>
                                    {userProfile.description}
                                </p>
                            </div>
                        </section>
                    </div>
          </div>
          <div className="col">
                    <img src={userProfile.avatar} className="img-fluid mb-3" alt="" />
          </div>
        </div>
      </div>


    );
}

export default Profile;