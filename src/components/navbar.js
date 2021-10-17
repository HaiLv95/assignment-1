import React from 'react';
import { Link, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {
    const history = useHistory();
    const dispatch = useDispatch()
    const userReducer = useSelector(state => state.user);
    const onHandleSignOut = (data) => {
        dispatch({ type: "LOG_OUT" });
        history.push("/")
    }
    return (
        <div>
            {/* Header */}
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <NavLink
                        className="navbar-brand text-success logo h1 align-self-center"
                        to="/">
                        Mr.Double
                    </NavLink>
                    <div
                        className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/shop">
                                        Shop
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        
                        <div
                            className="nav-profile-image"
                            style={{ marginLeft: 30 }}>
                            {userReducer.status ?
                                <div>
                                    <div className="btn-group">
                                        <Link className='nav-link flex-column' to="/profile">
                                            <div className='nav-profile-image'>
                                                <img src={userReducer.user.avatar} alt='profile' style={{ width: 50, height: 50, borderRadius: 25 }}></img>
                                            </div>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: 30, marginTop: 20 }}>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className='dropdown-item' to="/profile">Profile</Link></li>
                                            <li><button className='dropdown-item' onClick={onHandleSignOut}>SignOut</button></li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <Link to="/signin" className="btn btn-primary" style={{ color: 'white' }}>
                                    Sign-In
                                </Link>}
                        </div>
                    </div>
                </div>
            </nav>
            {/* Close Header */}
        </div>
    );
}
