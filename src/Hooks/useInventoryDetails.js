import  { useEffect, useState } from 'react';

const UseInventoryDetails = (ShowInventoryId) => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://thawing-mountain-91486.herokuapp.com/service/${ShowInventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [ShowInventoryId]);
    return [service]
};

export default UseInventoryDetails;