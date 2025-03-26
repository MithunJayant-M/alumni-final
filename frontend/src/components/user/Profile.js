import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Profile () {
    const { user }  = useSelector(state => state.authState);

    return (
        <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-3">
                <figure className='avatar avatar-profile'>
                    <img className="rounded-circle img-fluid" src={user.avatar??'./images/default_avatar.png'} alt='' />
                </figure>
                <Link to="/myprofile/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                    Edit Profile
                </Link>
            </div>
    
            <div className="col-12 col-md-5">
                <h4>Full Name</h4>
                <p>{user.name}</p>
    
                <h4>Email Address</h4>
                <p>{user.email}</p>
                <h4>Phone</h4>
                <p>{user.phone}</p>
                <h4>Yearofadmission</h4>
                <p>{user.yearofadmission}</p>
                <h4>Yearofgrad</h4>
                <p>{user.yearofgrad}</p>
                <h4>Department</h4>
                <p>{user.department}</p>
                <h4>Dateofbirth</h4>
                <p>{user.dateofbirth}</p>
                <h4>Employed</h4>
                <p>{user.employed}</p>
                <h4>Designation</h4>
                <p>{user.designation}</p>
                <h4>Companyname</h4>
                <p>{user.companyname}</p>
                <h4>Companylocation</h4>
                <p>{user.companylocation}</p>
                <h4>About</h4>
                <p>{user.about}</p>

                <h4>Joined</h4>
                <p>{String(user.createdAt).substring(0, 10)}</p>

                <Link to="/orders" className="btn btn-danger btn-block mt-5">
                    Community page
                </Link>

                <Link to="/myprofile/update/password" className="btn btn-primary btn-block mt-3">
                    Change Password
                </Link>
            </div>
        </div>
    )
}