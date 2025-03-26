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
