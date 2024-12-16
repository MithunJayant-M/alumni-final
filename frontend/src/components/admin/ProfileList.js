// import { Fragment, useEffect } from "react"
// import { Button } from "react-bootstrap"
// import { useDispatch, useSelector } from "react-redux"
// import { Link } from "react-router-dom"
// import { deleteProduct, getAdminProducts } from "../../actions/productActions"
// import { clearError, clearProductDeleted } from "../../slices/productSlice"
// import Loader from '../layouts/Loader';
// import { MDBDataTable} from 'mdbreact';
// import {toast } from 'react-toastify'
// import Sidebar from "./Sidebar"

// export default function ProductList() {
//     const { products = [], loading = true, error }  = useSelector(state => state.productsState)
//     const { isProductDeleted, error:productError }  = useSelector(state => state.productState)
//     const dispatch = useDispatch();

//     const setProducts = () => {
//         const data = {
//             columns : [
//                 {
//                     label: 'ID',
//                     field: 'id',
//                     sort: 'asc'
//                 },
//                 {
//                     label: 'Name',
//                     field: 'name',
//                     sort: 'asc'
//                 },
//                 {
//                     label: 'Price',
//                     field: 'price',
//                     sort: 'asc'
//                 },
//                 {
//                     label: 'Stock',
//                     field: 'stock',
//                     sort: 'asc'
//                 },
//                 {
//                     label: 'Actions',
//                     field: 'actions',
//                     sort: 'asc'
//                 }
//             ],
//             rows : []
//         }

//         products.forEach( product => {
//             data.rows.push({
//                 id: product._id,
//                 name: product.name,
//                 price : `$${product.price}`,
//                 stock: product.stock,
//                 actions: (
//                     <Fragment>
//                         <Link to={`/admin/product/${product._id}`} className="btn btn-primary"> <i className="fa fa-pencil"></i></Link>
//                         <Button onClick={e => deleteHandler(e, product._id)} className="btn btn-danger py-1 px-2 ml-2">
//                             <i className="fa fa-trash"></i>
//                         </Button>
//                     </Fragment>
//                 )
//             })
//         })

//         return data;
//     }

//     const deleteHandler = (e, id) => {
//         e.target.disabled = true;
//         dispatch(deleteProduct(id))
//     }

//     useEffect(() => {
//         if(error || productError) {
//             toast(error || productError, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//                 type: 'error',
//                 onOpen: ()=> { dispatch(clearError()) }
//             })
//             return
//         }
//         if(isProductDeleted) {
//             toast('Product Deleted Succesfully!',{
//                 type: 'success',
//                 position: toast.POSITION.BOTTOM_CENTER,
//                 onOpen: () => dispatch(clearProductDeleted())
//             })
//             return;
//         }

//         dispatch(getAdminProducts)
//     },[dispatch, error, isProductDeleted])


//     return (
//         <div className="row">
//         <div className="col-12 col-md-2">
//                 <Sidebar/>
//         </div>
//         <div className="col-12 col-md-10">
//             <h1 className="my-4">Product List</h1>
//             <Fragment>
//                 {loading ? <Loader/> : 
//                     <MDBDataTable
//                         data={setProducts()}
//                         bordered
//                         striped
//                         hover
//                         className="px-3"
//                     />
//                 }
//             </Fragment>
//         </div>
//     </div>
//     )
// }
import { Fragment, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../layouts/Loader";
import { MDBDataTable } from "mdbreact";
import { toast } from "react-toastify";
import Sidebar from "./Sidebar";
import { deleteProfile, getProfiles } from "../../actions/profileActions";
import { clearError, deleteProfileSuccess } from "../../slices/profileSlice";
import { profileSuccess } from "../../slices/profilesSlice";

export default function ProfileList() {
    const { profiles = [], loading = true, error, isdeleteProfileSuccess } = useSelector(state => state.profileState);

    const dispatch = useDispatch();

    const setProfiles = () => {
        const data = {
            columns: [
                {
                    label: "Profile Thumbnail",
                    field: "profileThumbnail",
                    sort: "asc"
                },
                {
                    label: "Full Name",
                    field: "fullName",
                    sort: "asc"
                },
                {
                    label: "Location Area",
                    field: "locationArea",
                    sort: "asc"
                },
                {
                    label: "Headline",
                    field: "headline",
                    sort: "asc"
                },
                {
                    label: "Job Title",
                    field: "jobTitle",
                    sort: "asc"
                },
                {
                    label: "Profile URL",
                    field: "profileURL",
                    sort: "asc"
                },
                
                {
                    label: "Actions",
                    field: "actions",
                    sort: "asc"
                }
            ],
            rows: []
        };

        profiles.forEach(profile => {
            data.rows.push({
                fullName: profile.FullName,
                locationArea: profile.LocationArea || "N/A",
                headline: profile.Headline || "N/A",
                jobTitle: profile.JobTitle || "N/A",
                linkedInURL: (
                    <a href={profile.LinkedInURL} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                ),
                profileURL: (
                    <a href={profile.ProfileURL} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                ),
                profileThumbnail: (
                    <img src={profile.ProfileThumbnail} alt="Profile Thumbnail" width="90" height="90" />
                ),
                actions: (
                    <Fragment>
                        <Link to={`/admin/products/${profile._id}`} className="btn btn-primary">
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <Button
                            onClick={e => deleteHandler(e, profile._id)}
                            className="btn btn-danger py-1 px-2 ml-1"
                        >
                            <i className="fa fa-trash" ></i>
                        </Button>
                    </Fragment>
                )
            });
        });

        return data;
    };

    const deleteHandler = (e, id) => {
        e.target.disabled = true;
        dispatch(deleteProfile(id));
    };

    useEffect(() => {
        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: "error",
                onClose: () => dispatch(clearError())
            });
        }

        if (isdeleteProfileSuccess) {
            toast("Profile Deleted Successfully!", {
                type: "success",
                position: toast.POSITION.BOTTOM_CENTER,
                onOpen: () => dispatch(deleteProfileSuccess())
            });

            // Reload data after deletion
            dispatch(getProfiles());
        }
        dispatch(getProfiles());
    }, [dispatch, error, isdeleteProfileSuccess]);

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <h1 className="my-4">Profile List</h1>
                <Fragment>
                    {loading ? (
                        <Loader />
                    ) : (
                        <MDBDataTable
                            data={setProfiles()}
                            bordered
                            striped
                            hover
                            className="px-3"
                        />
                    )}
                </Fragment>
            </div>
        </div>
    );
}
