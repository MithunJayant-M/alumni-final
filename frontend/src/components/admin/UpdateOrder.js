import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function UpdateOrder () {
    
    
    const { loading, isOrderUpdated, error } = useSelector( state => state.orderState)
    const [orderStatus, setOrderStatus] = useState("Processing");



    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        const orderData = {};
        orderData.orderStatus = orderStatus;
    }
    
    useEffect(() => {
        if(isOrderUpdated) {
            toast('Order Updated Succesfully!',{
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER,
                
            })
           
            return;
        }

        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
            })
            return
        }
    }, [isOrderUpdated, error, dispatch])



    return (
        <div className="row">
            <div className="col-12 col-md-2">
                    <Sidebar/>
            </div>
            <div className="col-12 col-md-10">
                <Fragment>
                <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-8 mt-5 order-details">
    
                            <h1 className="my-5">Order # </h1>
    
                            <h4 className="mb-4">Shipping Info</h4>
                            <p><b>Name:</b></p>
        
    
                            <hr />
    
                            
    
    
                            <h4 className="my-4">Order Status:</h4>
                            <p className={orderStatus&&orderStatus.includes('Delivered') ? 'greenColor' : 'redColor' } ><b>{orderStatus}</b></p>
    
    
                            <h4 className="my-4">Order Items:</h4>
    
                            <hr />
                            <hr />
                        </div>
                        <div className="col-12 col-lg-3 mt-5">
                            <h4 className="my-4">Order Status</h4>
                            <div className="form-group">
                                <select 
                                className="form-control"
                                onChange={e => setOrderStatus(e.target.value)}
                                value={orderStatus}
                                name="status"
                                >
                                    <option value="Processing">Processing</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                              
                            </div>
                            <button
                                disabled={loading}
                                onClick={submitHandler}
                                className="btn btn-primary btn-block"
                                >
                                    Update Status
                            </button>

                        </div>
                    </div>
                </Fragment>
            </div>
        </div>
        
    )
}