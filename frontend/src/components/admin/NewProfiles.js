// import { Fragment, useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import { useDispatch, useSelector} from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { createProfile } from "../../actions/profileActions";
// import { clearError, clearProductCreated } from "../../slices/profileSlice";
// import { toast } from "react-toastify";

// export  default function NewProduct () {
//     const [name, setName] = useState("");
//     const [price, setPrice] = useState("");
//     const [description, setDescription] = useState("");
//     const [category, setCategory] = useState("");
//     const [stock, setStock] = useState(0);
//     const [seller, setSeller] = useState("");
//     const [images, setImages] = useState([]);
//     const [imagesPreview, setImagesPreview] = useState([]);
    
//     const { loading, isProductCreated, error } = useSelector( state => state.productState)

//     const categories = [
//         'Electronics',
//         'Mobile Phones',
//         'Laptops',
//         'Accessories',
//         'Headphones',
//         'Food',
//         'Books',
//         'Clothes/Shoes',
//         'Beauty/Health',
//         'Sports',
//         'Outdoor',
//         'Home'
//     ];

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const onImagesChange = (e) => {
//         const files = Array.from(e.target.files);

//         files.forEach(file => {
            
//             const reader = new FileReader();

//             reader.onload = () => {
//                 if(reader.readyState == 2 ) {
//                     setImagesPreview(oldArray => [...oldArray, reader.result])
//                     setImages(oldArray => [...oldArray, file])
//                 }
//             }

//             reader.readAsDataURL(file)


//         })

//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name' , name);
//         formData.append('price' , price);
//         formData.append('stock' , stock);
//         formData.append('description' , description);
//         formData.append('seller' , seller);
//         formData.append('category' , category);
//         images.forEach (image => {
//             formData.append('images', image)
//         })
//         dispatch(createProfile(formData))
//     }

//     useEffect(() => {
//         if(isProductCreated) {
//             toast('Product Created Succesfully!',{
//                 type: 'success',
//                 position: toast.POSITION.BOTTOM_CENTER,
//                 onOpen: () => dispatch(clearProductCreated())
//             })
//             navigate('/admin/products')
//             return;
//         }

//         if(error)  {
//             toast(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//                 type: 'error',
//                 onOpen: ()=> { dispatch(clearError()) }
//             })
//             return
//         }
//     }, [isProductCreated, error, dispatch])


//     return (
//         <div className="row">
//             <div className="col-12 col-md-2">
//                     <Sidebar/>
//             </div>
//             <div className="col-12 col-md-10">
//                 <Fragment>
//                     <div className="wrapper my-5"> 
//                         <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
//                             <h1 className="mb-4">New Product</h1>

//                             <div className="form-group">
//                             <label htmlFor="name_field">Name</label>
//                             <input
//                                 type="text"
//                                 id="name_field"
//                                 className="form-control"
//                                 onChange={e => setName(e.target.value)}
//                                 value={name}
//                             />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="price_field">Price</label>
//                                 <input
//                                 type="text"
//                                 id="price_field"
//                                 className="form-control"
//                                 onChange={e => setPrice(e.target.value)}
//                                 value={price}
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="description_field">Description</label>
//                                 <textarea 
//                                     className="form-control"
//                                     id="description_field" 
//                                     rows="8"
//                                     onChange={e => setDescription(e.target.value)}
//                                     value={description}
//                                   ></textarea>
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="category_field">Category</label>
//                                 <select onChange={e => setCategory(e.target.value)} className="form-control" id="category_field">
//                                     <option value="">Select</option>
//                                     {categories.map( category => (
//                                         <option key={category} value={category}>{category}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="stock_field">Stock</label>
//                                 <input
//                                 type="number"
//                                 id="stock_field"
//                                 className="form-control"
//                                 onChange={e => setStock(e.target.value)}
//                                 value={stock}
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="seller_field">Seller Name</label>
//                                 <input
//                                 type="text"
//                                 id="seller_field"
//                                 className="form-control"
//                                 onChange={e => setSeller(e.target.value)}
//                                 value={seller}
//                                 />
//                             </div>
                            
//                             <div className='form-group'>
//                                 <label>Images</label>
                                
//                                     <div className='custom-file'>
//                                         <input
//                                             type='file'
//                                             name='product_images'
//                                             className='custom-file-input'
//                                             id='customFile'
//                                             multiple
//                                             onChange={onImagesChange}
                                        
//                                         />

//                                         <label className='custom-file-label' htmlFor='customFile'>
//                                             Choose Images
//                                         </label>
//                                     </div>
//                                     {imagesPreview.map(image => (
//                                         <img
//                                             className="mt-3 mr-2"
//                                             key={image}
//                                             src={image}
//                                             alt={`Image Preview`}
//                                             width="55"
//                                             height="52"
//                                         />
//                                     ))}
//                             </div>

                
//                             <button
//                             id="login_button"
//                             type="submit"
//                             disabled={loading}
//                             className="btn btn-block py-3"
//                             >
//                             CREATE
//                             </button>

//                         </form>
//                     </div>
//                 </Fragment>
//             </div>
//         </div>
        
//     )
// }
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProfile, updateProfile } from "../../actions/profileActions";
import { clearError } from "../../slices/profileSlice";
import Sidebar from "./Sidebar";

export default function NewProfiles() {
    const [formData, setFormData] = useState({
        LinkedInSchoolURL: "",
        ResultsCount: "",
        FullName: "",
        FirstName: "",
        LastName: "",
        Headline: "",
        JobTitle: "",
        LocationArea: "",
        ProfileURL: "",
        ProfilePublicURL: "",
        SalesNavProfileURL: "",
        ProfileID: "",
        MemberURN: "",
        TrackingID: "",
        ConnectionDegree: "",
        ProfileThumbnail: "",
    });

    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const { loading, profile, error } = useSelector((state) => state.profiles || {});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagePreview(reader.result);
                    setProfileImage(file);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => data.append(key, value));
        if (profileImage) data.append("avatar", profileImage);
        dispatch(createProfile(data));
        navigate("/admin/products");
    };

    useEffect(() => {
        if (profile) {
            toast("Profile Created Successfully!", {
                type: "success",
                position: toast.POSITION.BOTTOM_CENTER,
                onOpen: () => dispatch(updateProfile()),
            });
            navigate("/products");
        }

        if (error) {
            toast(error, {
                type: "error",
                position: toast.POSITION.BOTTOM_CENTER,
                onOpen: () => dispatch(clearError()),
            });
        }
    }, [profile, error, dispatch, navigate]);

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <Fragment>
                    <div className="wrapper my-5">
                        <form
                            onSubmit={submitHandler}
                            className="shadow-lg"
                            encType="multipart/form-data"
                        >
                            <h1 className="mb-4">New Profile</h1>

                            {Object.keys(formData).map((field) => (
                                <div className="form-group" key={field}>
                                    <label htmlFor={`${field}_field`}>
                                        {field.replace(/([A-Z])/g, " $1").trim()}
                                    </label>
                                    <input
                                        type="text"
                                        id={`${field}_field`}
                                        name={field}
                                        className="form-control"
                                        value={formData[field]}
                                        onChange={onInputChange}
                                    />
                                </div>
                            ))}

                            <div className="form-group">
                                <label>Profile Image</label>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        name="profile_image"
                                        className="custom-file-input"
                                        id="customFile"
                                        onChange={onImageChange}
                                    />
                                    <label className="custom-file-label" htmlFor="customFile">
                                        Choose Image
                                    </label>
                                </div>
                                {imagePreview && (
                                    <img
                                        className="mt-3"
                                        src={imagePreview}
                                        alt="Image Preview"
                                        width="100"
                                        height="100"
                                    />
                                )}
                            </div>

                            <button
                                id="create_button"
                                type="submit"
                                disabled={loading}
                                className="btn btn-block py-3"
                            >
                                {loading ? "Loading..." : "CREATE"}
                            </button>
                        </form>
                    </div>
                </Fragment>
            </div>
        </div>
    );
}
