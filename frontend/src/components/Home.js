// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProfiles } from "../actions/profileActions";
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Profile from "./product/Profile";
// import  {toast} from 'react-toastify';
// import Pagination from 'react-js-pagination';

// export  default function Home(){
//     const dispatch = useDispatch();
//     const {Profiles, loading, error, profilesCount, resPerPage} =    useSelector((state) => state.profileState)
//     const [currentPage, setCurrentPage] = useState(1);
 
//     const setCurrentPageNo = (pageNo) =>{

//         setCurrentPage(pageNo)
       
//     }

//     useEffect(()=>{
//         if(error) {
//             return toast.error(error,{
//                 position: toast.POSITION.BOTTOM_CENTER
//             })
//         }
//         dispatch(getProfiles(null, null, null, null, currentPage)) 
//     }, [error, dispatch, currentPage])


//     return (
//         <Fragment>
//             {loading ? <Loader/>:
//                 <Fragment>
//                     <MetaData title={'Buy Best Profiles'} data={getProfiles()} />
//                     <h1 id="profiles_heading">Latest Profiles</h1>
//                     <section id="Profiles" className="container mt-5">
//                         <div className="row">
//                             { Profiles && Profiles.map(profile => (
//                                 <Profile col={3} key={profile._id}  profile={profile}/>
//                             ))}
                        
//                         </div>
//                     </section>
//                     {profilesCount > 0 && profilesCount > resPerPage?
//                     <div className="d-flex justify-content-center mt-5">
//                            <Pagination 
//                                 activePage={currentPage}
//                                 onChange={setCurrentPageNo}
//                                 totalItemsCount={profilesCount}
//                                 itemsCountPerPage={resPerPage}
//                                 nextPageText={'Next'}
//                                 firstPageText={'First'}
//                                 lastPageText={'Last'}
//                                 itemClass={'page-item'}
//                                 linkClass={'page-link'}
//                            />     
//                     </div> : null }
//                 </Fragment>
//            }
//         </Fragment>
//     )
// }
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./layouts/Loader";
import { MDBDataTable } from "mdbreact";
import { getProfiles } from "../actions/profileActions";

export default function ProfileList() {
    const { profiles = [], loading = true } = useSelector(state => state.profileState);

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
            ],
            rows: profiles.map(profile => ({
                fullName: profile.FullName,
                locationArea: profile.LocationArea || "N/A",
                headline: profile.Headline || "N/A",
                jobTitle: profile.JobTitle || "N/A",
                profileURL: (
                    <a href={profile.ProfileURL} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                ),
                profileThumbnail: (
                    <img
                        src={profile.ProfileThumbnail}
                        alt="Profile Thumbnail"
                        width="90"
                        height="90"
                    />
                ),
                actions: (
                    <a href={profile.LinkedInURL} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                )
            }))
        };

        return data;
    };

    useEffect(() => {
        dispatch(getProfiles());
    }, [dispatch]);

    return (
        <div className="row">
            <div className="col-12 col-md-20">
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
