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
