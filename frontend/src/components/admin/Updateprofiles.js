import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProfile, updateProfile } from "../../actions/profileActions";
import { clearError } from "../../slices/profileSlice";
import { toast } from "react-toastify";

export default function UpdateProfile() {
    const [fullName, setFullName] = useState("");
    const [headline, setHeadline] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [locationArea, setLocationArea] = useState("");
    const [profileThumbnail, setProfileThumbnail] = useState("");
    const [profileThumbnailPreview, setProfileThumbnailPreview] = useState([]);

    const { id: profileId } = useParams();

    const { loading, error, profile } = useSelector(state => state.profiles||{});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onThumbnailChange = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileThumbnailPreview([reader.result]);
                setProfileThumbnail([file]);
            }
        };
        reader.readAsDataURL(file);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("FullName", fullName);
        formData.append("Headline", headline);
        formData.append("JobTitle", jobTitle);
        formData.append("LocationArea", locationArea);
        formData.append("ProfileThumbnail", profileThumbnail);

        dispatch(updateProfile(profileId, formData));
        navigate('/admin/products');
    };
    useEffect(() => {
        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: "error",
                onOpen: () => dispatch(clearError()),
            });
            return;
        }

        if (profile ) {
            setFullName(profile.FullName);
            setHeadline(profile.Headline || "");
            setJobTitle(profile.JobTitle || "");
            setLocationArea(profile.LocationArea || "");
            setProfileThumbnail(profile.ProfileThumbnail ||"");
        } else 
            dispatch(getProfile(profileId));
    
    }, [profile, error, profileId, dispatch]);

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <Fragment>
                    <div className="wrapper my-5">
                        <form onSubmit={submitHandler} className="shadow-lg" encType="multipart/form-data">
                            <h1 className="mb-4">Update Profile</h1>

                            <div className="form-group">
                                <label htmlFor="fullName_field">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName_field"
                                    className="form-control"
                                    onChange={(e) => setFullName(e.target.value)}
                                    value={fullName}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="headline_field">Headline</label>
                                <input
                                    type="text"
                                    id="headline_field"
                                    className="form-control"
                                    onChange={(e) => setHeadline(e.target.value)}
                                    value={headline}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="jobTitle_field">Job Title</label>
                                <input
                                    type="text"
                                    id="jobTitle_field"
                                    className="form-control"
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    value={jobTitle}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="locationArea_field">Location Area</label>
                                <input
                                    type="text"
                                    id="locationArea_field"
                                    className="form-control"
                                    onChange={(e) => setLocationArea(e.target.value)}
                                    value={locationArea}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="profileThumbnail_field">profileThumbnail field</label>
                                <input
                                    type="text"
                                    id="profileThumbnail_field"
                                    className="form-control"
                                    onChange={(e) => setProfileThumbnail(e.target.value)}
                                    value={profileThumbnail}
                                />

                            </div>

                            <button
                                id="update_button"
                                type="submit"
                                disabled={loading}
                                className="btn btn-block py-3"
                            >
                                UPDATE
                            </button>
                        </form>
                    </div>
                </Fragment>
            </div>
        </div>
    );
}

