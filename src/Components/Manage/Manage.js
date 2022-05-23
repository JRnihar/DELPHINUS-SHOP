import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItems from '../MyItems/MyItems';


const Manage = () => {
    const[user]=useAuthState(auth)
    const email = user?.email
    
    const [products,setProduct]=useState([])
    console.log(products);
    useEffect(()=>{
       
        const run=async()=>{
            await axios
                .get(`https://peaceful-journey-73897.herokuapp.com/myItem/${email}`)
                .then(function(res){
                    setProduct(res.data)
                })
               
        }
        run()
    }, [email,products])
   
    

    return (
        <div>
          <div>
              <h2 className='text-center p-4'> My Item : {products.length}</h2>
          </div>
            <table class="table mt-5 table-hover mb-5">
                <thead>
                    <tr>
                        
                        <th scope="col">supplier Name</th>
                        <th scope="col">RelevantName</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Image</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
          
              {
                  products.map(product=><MyItems key={product._id} product={product}></MyItems>)
              }
        
                </tbody>
            </table>
        </div>
    );
};

export default Manage;