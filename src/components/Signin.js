import { useForm } from "react-hook-form";
import { signin } from "../api/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/signin.css";
import { Link, useHistory } from "react-router-dom";
const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const history = useHistory();

    const onSubmit = async data => {
        try {
            // call api
            const result = await signin(data);
            console.log(result);
            // trả về dữ liệu user và lưu vào localStorage
            localStorage.setItem("info", JSON.stringify(result.data));
            // Hiển thị thông báo thành công
            toast.success("Đăng nhập thành công");
            setTimeout(() => history.push("/"), 3000);
        } catch (error) {
            toast.error(error.response.data);
        }
    };
    return (
        <div className="body-signin">
            <main className="form-signin">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ToastContainer />
                    <div style={{ textAlign: "center" }}>
                        <img
                            className="mb-4"
                            src="https://lh3.googleusercontent.com/proxy/jyIjOEtoh32ZvAp8zyuHqiC409Jw8_wGD-lIkMbMbeB3eHFpiS1kKIER4aoxzEtL_AuuK61H4OMw9IB7JeCjmeNZm_68hOC-iDqPHPPgxQ"
                            alt=""
                            width={72}
                            height={57}
                        />
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="email"
                            {...register("email")}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="mat khau "
                            {...register("password")}
                        />
                    </div>
                    <button type="submit" className="w-100 btn btn-lg btn-primary">
                        Đăng nhập
                    </button>
                    <br />
                    <hr />
                    <div className="custom">
                        <br />
                        <br />
                        <Link to="/signup" className="link-primary">
                            Sign up
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    );
};
export default Signin;
