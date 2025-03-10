// import { Fragment, useEffect, useState } from "react"
// import { Button } from "react-bootstrap"
// import { useDispatch, useSelector } from "react-redux"
// import { deleteReview, getReviews } from "../../actions/profileActions"
// import { clearError, clearReviewDeleted } from "../../slices/profileSlice"
// import Loader from '../layouts/Loader';
// import { MDBDataTable} from 'mdbreact';
// import {toast } from 'react-toastify'
// import Sidebar from "./Sidebar"

// export default function ReviewList() {
//     const { reviews = [], loading = true, error, isReviewDeleted }  = useSelector(state => state.productState)
//     const [productId, setProductId] = useState("");
//     const dispatch = useDispatch();

//     const setReviews = () => {
//         const data = {
//             columns : [
//                 {
//                     label: 'ID',
//                     field: 'id',
//                     sort: 'asc'
//                 },
//                 {
//                     label: 'Rating',
//                     field: 'rating',
//                     sort: 'asc'
//                 },
//                 {
//                     label: 'User',
//                     field: 'user',
//                     sort: 'asc'
//                 },
//                 {
//                     label: 'Comment',
//                     field: 'comment',
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

//         reviews.forEach( review => {
//             data.rows.push({
//                 id: review._id,
//                 rating: review.rating,
//                 user : review.user.name,
//                 comment: review.comment ,
//                 actions: (
//                     <Fragment>
//                         <Button onClick={e => deleteHandler(e, review._id)} className="btn btn-danger py-1 px-2 ml-2">
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
//         dispatch(deleteReview(productId, id))
//     }

//     const submitHandler = (e) =>{
//         e.preventDefault();
//         dispatch(getReviews(productId))
//     }

//     useEffect(() => {
//         if(error) {
//             toast(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//                 type: 'error',
//                 onOpen: ()=> { dispatch(clearError()) }
//             })
//             return
//         }
//         if(isReviewDeleted) {
//             toast('Review Deleted Succesfully!',{
//                 type: 'success',
//                 position: toast.POSITION.BOTTOM_CENTER,
//                 onOpen: () => dispatch(clearReviewDeleted())
//             })
//             dispatch(getReviews(productId))
//             return;
//         }

       
//     },[dispatch, error, isReviewDeleted])


//     return (
//         <div className="row">
//         <div className="col-12 col-md-2">
//                 <Sidebar/>
//         </div>
//         <div className="col-12 col-md-10">
//             <h1 className="my-4">Review List</h1>
//             <div className="row justify-content-center mt-5">
//                 <div className="col-5">
//                     <form onSubmit={submitHandler}>
//                         <div className="form-group">
//                             <label >Product ID</label>
//                             <input 
//                                 type="text"
//                                 onChange= {e => setProductId(e.target.value)}
//                                 value={productId}
//                                 className="form-control"
//                             />
//                         </div>
//                         <button type="submit" disabled={loading} className="btn btn-primary btn-block py-2">
//                             Search
//                         </button>
//                     </form>
//                 </div>
//             </div>
//             <Fragment>
//                 {loading ? <Loader/> : 
//                     <MDBDataTable
//                         data={setReviews()}
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
import { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile, getProfiles } from "../../actions/profileActions";
import { clearError } from "../../slices/profileSlice";
import Loader from '../layouts/Loader';
import { MDBDataTable } from 'mdbreact';
import { toast } from 'react-toastify';
import Sidebar from "./Sidebar";

export default function ReviewList() {
    const { profiles = [], loading = true, error } = useSelector(state => state.profilesState);
    const [profileId, setProfileId] = useState("");
    const dispatch = useDispatch();

    const setProfiles = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'FullName',
                    field: 'FullName',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }
            ],
            rows: []
        };

        profiles.forEach(profile => {
            data.rows.push({
                id: profile._id,
                FullName: profile.FullName,
                email: profile.email,
                actions: (
                    <Fragment>
                        <Button onClick={e => deleteHandler(e, profile._id)} className="btn btn-danger py-1 px-2 ml-2">
                            <i className="fa fa-trash"></i>
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

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(getProfiles(profileId));
    };

    useEffect(() => {
        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: () => { dispatch(clearError()); }
            });
            return;
        }
        dispatch(getProfiles(profileId));
    }, [dispatch, error]);

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <h1 className="my-4">Profile List</h1>
                <div className="row justify-content-center mt-5">
                    <div className="col-5">
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label>Profile ID</label>
                                <input
                                    type="text"
                                    onChange={e => setProfileId(e.target.value)}
                                    value={profileId}
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" disabled={loading} className="btn btn-primary btn-block py-2">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                <Fragment>
                    {loading ? <Loader /> :
                        <MDBDataTable
                            data={setProfiles()}
                            bordered
                            striped
                            hover
                            className="px-3"
                        />
                    }
                </Fragment>
            </div>
        </div>
    );
}
