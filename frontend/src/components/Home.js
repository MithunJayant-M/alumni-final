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
                // {
                //     label: "Profile Thumbnail",
                //     field: "profileThumbnail",
                //     sort: "asc"
                // },
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
                // profileThumbnail: (
                //     <img
                //         src={profile.ProfileThumbnail}
                //         alt="Profile Thumbnail"
                //         width="90"
                //         height="90"
                //     />
                // ),
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
