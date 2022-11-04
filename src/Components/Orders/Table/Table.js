import React, { useEffect, useState } from 'react';

const Table = ({ product, deleteOrdersHandle }) => {
    // console.log(product);
    const { services_id, Name, price, _id } = product;
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${services_id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => deleteOrdersHandle(_id)} className="btn btn-ghost btn-xl text-xl text-red-600">X</button>
                </label>
            </th>
            <td className='w-1/2'>
                <div className="flex flex-col-reverse sm:flex-row items-center">
                    <div className="avatar mr-5">
                        <div className="w-24 rounded h-24">
                            <img src={service.img} alt="" />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <div className="font-bold text-xl">{Name}</div>
                        <div className="text-base text-orange-600 font-medium ">Price: ${price}</div>
                    </div>
                </div>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default Table;