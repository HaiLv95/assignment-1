import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const {register, handleSubmit, formState : {errors}} = useForm();
    const user = useSelector(user => user.user);
    const onSubmit =(data) => {
      
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
                        <div className="navbar align-self-center d-flex">
                            <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="id"
                                    aria-label="Search"
                                    {...register("id")} />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                        <div
                            className="nav-profile-image"
                            style={{ marginLeft: 30 }}>
                            {user.status ? 
                                <Link className='nav-link flex-column' to="/profile">
                                    <div className='nav-profile-image'>
                                        <img src={user.user.avatar} alt='profile' style={{width: 50, height: 50, borderRadius: 25}}></img>
                                    </div>
                                </Link>
                                 : 
                                <Link to="/signin" class="btn btn-primary" style={{ color: 'white' }}>
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
