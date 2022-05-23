import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryDetails.css'



const InventoryDetails = () => {
    const { ShowInventoryId } = useParams();
    
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://peaceful-journey-73897.herokuapp.com/inventory/${ShowInventoryId}`;
      
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [service]);


    const handleDeliver = ShowInventoryId =>{
       const NewService=service
       NewService.quantity=service.quantity-1;
       
        if(NewService.quantity>=0){
            axios
                .put(`https://peaceful-journey-73897.herokuapp.com/inventory/${ShowInventoryId}`,NewService)
                .then((res)=>console.log(res.data))
        }else{
            alert('not enough product')
        }

       
    }
    const handleUpdate = e =>{
        e.preventDefault()
       const quantity=parseInt(e.target.number.value);
        const NewService = service
        NewService.quantity = service.quantity + quantity;
    //    console.log(name);
       
       
        
        axios
            .put(`https://peaceful-journey-73897.herokuapp.com/inventory/${ShowInventoryId}`, NewService)
            .then((res) => console.log(res.data))
      

       
    }
   
    return (
      <div>
            <div className='body'>
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={service.picture} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <p>RelevantName : {service.relevantName}</p>
                        <p>Supplier name : {service.supplierName}</p>
                        <p>Price : {service.price}</p>
                        <p>Quantity : {service.quantity}</p>
                        <div>
                            Description : {service.description}
                        </div>
                        <button onClick={()=>{handleDeliver(service._id)}} className='btn btn-success mt-2'>Delivered</button>
                    </div>
                    <div>
                        <div>
                            <h4 className='mt-4'>Increase your quantity please!!!!!</h4>
                        </div>
                        <form className='d-flex ' onSubmit={handleUpdate}>
                            <input type="number" name="number" className='form-control' />
                            <input className='btn btn-success ms-2' type="submit" value="Increase" />

                        </form>
                    </div>

                </div>

            </div>
            <Link className='d-flex  justify-content-center p-3 btn btn-success' to='/myItem'> <i>Go to Manage All item</i> </Link>
            
      </div>
    );
};

export default InventoryDetails;