import Sidebar from "./Sidebar";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { getProfiles } from "../../actions/profileActions";
import {getUsers} from '../../actions/userActions'
import { Link } from "react-router-dom";

export default function Dashboard () {
    const { profiles = [] } = useSelector( state => state.profilesState);
    const { users = [] } = useSelector( state => state.userState);
    const dispatch = useDispatch();
    let outOfStock = 0;

    if (profiles.length > 0) {
        profiles.forEach( profile => {
            if( profile.stock === 0  ) {
                outOfStock = outOfStock + 1;
            }
        })
    }

    let totalAmount = 0;



    useEffect( () => {
       dispatch(getProfiles());
       dispatch(getUsers);
    }, [])


    return (
        <div className="row">
            <div className="col-12 col-md-2">
                    <Sidebar/>
            </div>
            <div className="col-13 col-md-10">
                <h1 className="my-2">Dashboard</h1>
                <div className="row pr-4">
                    <div className="col-xl-5 col-sm-6 mb-3">
                        <div className="card text-white bg-success o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">profiles<br /> <b>{profiles.length}</b></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/dash">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-sm-6 mb-3">
                        <div className="card text-white bg-info o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Users<br /> <b>{users.length}</b></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}