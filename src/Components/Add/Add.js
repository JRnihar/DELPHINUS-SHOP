import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Add = () => {
    const navigate=useNavigate()
    const [user] = useAuthState(auth)
    const email=user?.email
    const handleAddItem = async (e) => {
        e.preventDefault()
        const supplierName = e.target.supplierName.value;
        const relevantName = e.target.relevantName.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const quantity = e.target.quantity.value;
        const picture = e.target.picture.value;
       
        const product = {
            supplierName,
            relevantName,
            price,
            description,
            quantity,
            picture,

           
        }
        console.log(product);
        const  newProduct={
            ...product,email:email
        }
        

 
       await axios.post('https://peaceful-journey-73897.herokuapp.com/addItem', newProduct)
            .then(function(res){
                if(res?.data?.insertedId){
                    navigate('/orders')
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center p-3'>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleAddItem}>
                <input className='mb-2' placeholder='SupplierName' type="text" name="supplierName" />
                <input className='mb-2' placeholder='RelevantName' type="text" name="relevantName" />
                <textarea className='mb-2' placeholder='Description' type="text" name="description" />
                <textarea className='mb-2' placeholder='email' type="email" value={user?.email}  />
                <input className='mb-2' placeholder='Price' type="number" name="price" />
                <input className='mb-2' placeholder='Quantity' type="quantity" name='quantity' />
                <input className='mb-2' placeholder='Photo URL' type="text" name="picture" />
                <input type="submit" value="Add Service" className='btn btn-primary mb-3' />
            </form>
        </div>
    );
};

export default Add;