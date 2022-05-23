import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowInventory from '../ShowInventory/ShowInventory';
const HomeItem = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://peaceful-journey-73897.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,6)))
    }, [products])
    return (
        <div>
            <div>
                <h1 className='text-center mt-5 text-success'> <i>First 6 Item</i> </h1>
            </div>
            <div className='container'>
                <div className="row">
                    {
                        products.map(product => <ShowInventory key={product._id} product={product}></ShowInventory>)
                    }
                </div>
                
            </div>
            
        </div>
    );
};

export default HomeItem;