import "../styles/signup.css";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { signup } from "../api/auth";
import { ToastContainer, toast } from "react-toastify";
export default function Signup(props) {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //lấy id nếu edit profile của user

    //nếu có id thì lấy user từ mảng users gán vào userEdit. nếu có id thì userEdit
    //lưu dữ liệu vào server và chuyển về list user
    const onSubmit = async user => {
        user.id = Math.random().toString(10).substring(2);
        console.log(user)
        try {
            await signup(user);
            toast.success("Register success");
            history.push("/signin");
        } catch (error) {
            toast.error(error.response.data);
        }

    };
    const [passStatus, setPassStatus] = useState({
        password: "",
        status: false,
    });
    const onChangeStatus = () => {
        setPassStatus({ ...passStatus, status: !passStatus.status });
        console.log(passStatus);
    };
    return (
        <div style={{ marginTop: 40, marginBottom: 40 }}>
            <div className="container">
                <main>
                    <div className="row g-5">
                        <div className="col-md-7 col-lg-8">
                            <h1 className="mb-3">Register</h1>
                            <form
                                className="needs-validation"
                                onSubmit={handleSubmit(onSubmit)}>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="username" className="form-label">
                                            Full Name
                                        </label>
                                        <div className="input-group has-validation">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Input your fullname"
                                                {...register("fullname", { required: true })}
                                            />
                                        </div>
                                        {errors.fullname && (
                                            <span>you must input your fullname</span>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="username" className="form-label">
                                            Username
                                        </label>
                                        <div className="input-group has-validation">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="name@example.com"
                                                {...register("email", { required: true })}
                                            />
                                        </div>
                                        {errors.username && (
                                            <span>you must input your username</span>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <div className="input-group w-120">
                                            <input
                                                type={passStatus.status ? "text" : "password"}
                                                className="form-control"
                                                placeholder="Input password"
                                                {...register("password", { required: true })}
                                            />
                                            <span
                                                className="input-group-text"
                                                id="basic-addon1"
                                                onClick={onChangeStatus}>
                                                {passStatus.status ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-eye-slash"
                                                        viewBox="0 0 16 16">
                                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-eye"
                                                        viewBox="0 0 16 16">
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                    </svg>
                                                )}
                                            </span>
                                        </div>
                                        {errors.password && (
                                            <span>you must input your password</span>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="phone" className="form-label">
                                            Phone number
                                        </label>
                                        <div className="input-group has-validation">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="address"
                                                placeholder="0123456789"
                                                {...register("phone", { required: true })}
                                            />
                                        </div>
                                        {errors.phone && (
                                            <span>you must input your phone number</span>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="avatar" className="form-label">
                                            Avatar
                                        </label>
                                        <div className="input-group has-validation">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="https://cdn.fakercloud.com/avatars/abotap_128.jpg"
                                                {...register("avatar", { required: true })}
                                            />
                                        </div>
                                        {errors.avatar && <span>you must input your avatar</span>}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">
                                            Gender
                                        </label>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="true"
                                                {...register("gender")}
                                            />{" "}
                                            Nam
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="false"
                                                defaultChecked
                                                {...register("gender")}
                                            />{" "}
                                            Nữ
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <button className="w-50 btn btn-primary btn-lg" type="submit">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
