import { Link, useHistory } from 'react-router-dom';
import '../styles/signin.css';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { signin } from '../api/auth';
function Signin() {
  const {register, handleSubmit, formState : {errors}} = useForm();
  const history = useHistory();
  const onHandleSubmit = async (data) =>{
      try {
        console.log(data,data)
        await signin(data).then(

          toast.success("Login success")
        );
        history.push("/")
      } catch (error) {
        toast.error(error.response.data);
      }
  }
    return (
      <div className="body-signin">
        <main className="form-signin">
          <form onSubmit={handleSubmit(onHandleSubmit)}>
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
              <label >Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                {...register("username")}
              />
            </div>
            <div className="mb-3">
              <label >Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <br />
            <hr />
            <div className="custom">
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
              <br />
              <br />
              <Link to="/signup" className="link-primary" type="submit">
                Sign up
              </Link>
            </div>
          </form>
        </main>
      </div>
    );
}

export default Signin;