import "../styles/addproduct.css";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { add, get, update } from "../api/call-api";
import { Link } from "react-router-dom";
export default function AddProduct(props) {
    const history = useHistory();
    const [product, setProduct] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //lấy id nếu edit profile của product
    const { id } = useParams();

    //nếu có id thì lấy product từ mảng products gán vào productEdit. nếu có id thì productEdit
    //lưu dữ liệu vào server và chuyển về list product
    useEffect(() => {
        console.log("useEffect add");
        if (id != undefined) {
            try {
                //call api bằng axios load product đã chọn
                get(id).then(response => setProduct(response.data));
            } catch (error) {
                console.log(error);
            }
        }
    }, []);
    const onSubmit = async product => {
        if (id != undefined) {
            //vì dữ liệu lấy từ form là 1 obj nhưng không có trường id nên phải gán id cho obj để cập nhật
            product.id = id;
            try {
                //cập nhật dữ liệu
                await update(product).then(response => props.onEdit(response.data));
                history.push("/shop");
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                //sử dụng axios để add product
                product.id = parseInt(Math.random().toString(10).substring(2));
                await add(product).then(response => props.onAdd(response.data));
                history.push("/shop");
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div>
            <div className="container">
                <main>
                    <div className="row g-5">
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Product information</h4>
                            <form
                                className="needs-validation"
                                onSubmit={handleSubmit(onSubmit)}>
                                <div className="row customize">
                                    <div className="col-12">
                                        <label htmlFor="productname" className="form-label">
                                            Name
                                        </label>
                                        <div className="input-group has-validation">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Input your fullname"
                                                defaultValue={product.name}
                                                {...register("name", { required: true })}
                                            />
                                        </div>
                                        {errors.name && <span>you must input product name</span>}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="productname" className="form-label">
                                            Image
                                        </label>
                                        <div className="input-group has-validation">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="productname"
                                                defaultValue={product.photo}
                                                {...register("photo", { required: true })}
                                            />
                                        </div>
                                        {errors.photo && <span>you must input product image</span>}
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="productname" className="form-label">
                                            Price
                                        </label>
                                        <div className="input-group has-validation">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="productname"
                                                defaultValue={product.price}
                                                {...register("price", { required: true })}
                                            />
                                        </div>
                                        {errors.price && <span>you must input product price</span>}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="productname" className="form-label">
                                            Description
                                        </label>
                                        <div className="input-group has-validation">
                                            <textarea
                                                class="form-control"
                                                rows="3"
                                                defaultValue={product.description}
                                                {...register("description", {
                                                    required: true,
                                                })}></textarea>
                                        </div>
                                        {errors.description && (
                                            <span>you must input product description</span>
                                        )}
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <Link
                                    className="w-30 btn btn-danger btn-lg"
                                    to={"/shop-single/" + product.id}>
                                    Cancel
                                </Link>
                                <button className="w-50 btn btn-primary btn-lg" type="submit">
                                    Confirm
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
