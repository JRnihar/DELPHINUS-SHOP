import React, { useState } from 'react';

const MyItems = ({product}) => {
    const { _id, supplierName, relevantName, price, quantity }=product
    const [products, setProduct] = useState([])
    const myStyle = {
        hight: "50000px",
        width: '50px',
        borderRadius: 1000
    }
    const handleDelete = id => {
        console.log(id);

        const procced = window.confirm('are you sure?')
        if (procced) {
            console.log(id);
            const url = `https://peaceful-journey-73897.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProduct(remaining)
                }
                )
        }
    }
    return (
        
                
                        <tr>
                            
                            <td>{supplierName}</td>
                            <td>{relevantName}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <td><img src={product.picture} style={myStyle} alt="" /></td>
                            <td><i onClick={() => handleDelete(_id)} style={{ color: 'red' }} class="fa-solid fa-trash-can"></i></td>
                        </tr>
                   
          
    );
};

export default MyItems;