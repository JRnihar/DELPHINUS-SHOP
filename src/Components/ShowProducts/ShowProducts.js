import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ShowProducts = ({ product}) => {
    const { _id, picture, price, quantity, relevantName, supplierName, description } = product
    const [services, setServices] = useState([]);


    const handleDelete=id=>{
       
        const procced = window.confirm('Are you sure? You want to delete?')
        if(procced){
            console.log(id);
            const url = `https://peaceful-journey-73897.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(serivce => serivce._id !== id)
                    setServices(remaining)
                }
                )
        }
    }

    return (
        <div className="col-md-6  p-3 ">
            <div className="card-group" >
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Supplier name: {supplierName}</h5>
                        <p className="card-text">
                            RelevantName : {relevantName}
                        </p>
                        <p className="card-text">
                            Price : {price}
                        </p>
                        <p className="card-text">
                            Quantity : {quantity}
                        </p>
                       
                        <p className="card-text text-info">
                            Description : {description}
                        </p>
                        <div className="card-text d-flex justify-content-between">
                            <div>
                                {/* <button onClick={() => handleDelete(_id)} className="btn btn-danger btn-block btn-large">Delete</button> */}
                                <Link to="/add" className="btn btn-success btn-block btn-large">Add</Link>
                            </div>
                            <div>
                                
                                <button onClick={() => handleDelete(_id)} className="btn btn-danger btn-block btn-large">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;