import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';

const MyItem = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://peaceful-journey-73897.herokuapp.com/inventory')
        .then(res=>res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div>
            <div>
                <h2 className='text-center mt-5 text-success'>My All Item : {products.length}</h2>

            </div>
            <div className='container'>
              
                <div className="row">
                    {
                        products.map(product => <ShowProducts key={product._id} product={product}></ShowProducts>)
                    }
                </div>
                
            </div>
            
        </div>
    );
};

export default MyItem;