import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowInventory.css'

const ShowInventory = ({ product}) => {
    const { _id, picture, price, quantity, relevantName, supplierName } =product
    const navigate=useNavigate();

    const navigateTOInventoryDetails=id=>{
        navigate(`/ShowInventory/${id}`)
    }
    return (
        <div className="col-md-6  p-3 ">
            <section>
                <div class=" item-container container">
                    <div class="item-card">
                        <div class="content">
                            <div class="imgBx">
                                <img src={picture} className="card-img-top " alt="..." />
                            </div>
                            <p className="card-title">Supplier name: {supplierName}</p>
                            <p className="card-text">
                                RelevantName : {relevantName}
                            </p>
                            <p className="card-text">
                                Price : {price}
                            </p>
                            <p className="card-text">
                                Quantity : {quantity}
                            </p>
                            <p className="card-text">
                                <button onClick={() => navigateTOInventoryDetails(_id)} className="btn btn-success btn-block btn-large">Update</button>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShowInventory;