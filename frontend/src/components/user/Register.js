import {useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { register, clearAuthError } from '../../actions/userActions'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        phone:"",
        yearofadmission:"",
        yearofgrad:"",
        department:"",
        dateofbirth:"",
        employed:"",
        designation:"",
        companyname:"",
        companylocation:"",
        about:"",
    });
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.png");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector(state => state.authState)

    const onChange = (e) => {
        if(e.target.name === 'avatar') {
           const reader = new FileReader();
           reader.onload = () => {
                if(reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(e.target.files[0])
                }
           }


           reader.readAsDataURL(e.target.files[0])
        }else{
            setUserData({...userData, [e.target.name]:e.target.value })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userData.name)
        formData.append('email', userData.email)
        formData.append('password', userData.password)
        formData.append('phone', userData.phone)
        formData.append('yearofadmission', userData.yearofadmission)
        formData.append('yearofgrad', userData.yearofgrad)
        formData.append('department', userData.department)
        formData.append('dateofbirth', userData.dateofbirth)
        formData.append('employed', userData.employed)
        formData.append('designation', userData.designation)
        formData.append('companyname', userData.companyname)
        formData.append('companylocation', userData.companylocation)
        formData.append('about', userData.about)
        formData.append('avatar', avatar);
        dispatch(register(formData))
    }

    useEffect(()=>{
        if(isAuthenticated) {
            navigate('/');
            return
        }
        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    },[error, isAuthenticated, dispatch, navigate])

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
                <h1 className="mb-3">Register</h1>

            <div className="form-group">
                <label htmlFor="email_field">Name</label>
                <input name='name' onChange={onChange} type="name" id="name_field" className="form-control" />
            </div>

                <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                    type="email"
                    id="email_field"
                    name='email' 
                    onChange={onChange}
                    className="form-control"
                  
                />
                </div>
    
                <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                    name='password' 
                    onChange={onChange}
                    type="password"
                    id="password_field"
                    className="form-control"
                  
                />
                </div>
                <div className="form-group">
                <label htmlFor="phone_field">Phone</label>
                <input name='phone' onChange={onChange} type="phone" id="phone_field" className="form-control" />
            </div>
            
                <div className="form-group">
                <label htmlFor="yearofadmission_field">Yearofadmission</label>
                <input name='yearofadmission' onChange={onChange} type="number" id="yearofadmission_field" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="yearofgrad_field">Yearofgrad</label>
                <input name='yearofgrad' onChange={onChange} type="number" id="yearofgrad_field" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="department_field">Department</label>
                <input name='department' onChange={onChange} type="name" id="department_field" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="dateofbirth_field">Dateofbirth</label>
                <input name='dateofbirth' onChange={onChange} type="date" id="dateofbirth_field" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="employed_field">Employed</label>
                <input name='employed' onChange={onChange} type="name" id="employed_field" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="designation_field">Designation</label>
                <input name='designation' onChange={onChange} type="name" id="designation_field" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="companyname">Companyname</label>
                <input name='companyname' onChange={onChange} type="name" id="companyname" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="companylocation_field">Companylocation</label>
                <input name='companylocation' onChange={onChange} type="name" id="companylocation" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="about_field">About</label>
                <input name='about' onChange={onChange} type="name" id="about" className="form-control" />
            </div>

                <div className='form-group'>
                <label htmlFor='avatar_upload'>Avatar</label>
                <div className='d-flex align-items-center'>
                    <div>
                        <figure className='avatar mr-3 item-rtl'>
                            <img
                                src={avatarPreview}
                                className='rounded-circle'
                                alt='Avatar'
                            />
                        </figure>
                    </div>
                    <div className='custom-file'>
                        <input
                            type='file'
                            name='avatar'
                            onChange={onChange}
                            className='custom-file-input'
                            id='customFile'
                        />
                        <label className='custom-file-label' htmlFor='customFile'>
                            Choose Avatar
                        </label>
                    </div>
                </div>
            </div>
    
                <button
                id="register_button"
                type="submit"
                className="btn btn-block py-3"
                disabled={loading}
                >
                REGISTER
                </button>
            </form>
            </div>
        </div>
    )
}