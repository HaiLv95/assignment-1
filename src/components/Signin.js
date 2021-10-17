import { useForm } from "react-hook-form";
import { signin } from "../api/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/signin.css";
import { Link, useHistory} from "react-router-dom";
import { useDispatch} from 'react-redux'
const Signin = () => {
    const {
        register,
        handleSubmit,
    } = useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    const onSubmit = async data => {
        try {
            // call api
            const result = await signin(data);
            // trả về dữ liệu user và lưu vào localStorage
            localStorage.setItem("info", JSON.stringify(result.data));
            // Hiển thị thông báo thành công
            toast.success("Đăng nhập thành công");
            dispatch({type: "LOG_IN", payload: result.data.user})
            setTimeout(() => history.goBack(), 3000);
        } catch (error) {
            // toast.error(error.response.data);
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
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZsL6PVn0SNiabAKz7js0QknS2ilJam19QQ&usqp=CAU"
                            alt=""
                            width={72}
                            height={72}
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
