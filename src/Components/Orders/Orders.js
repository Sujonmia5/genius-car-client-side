import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Context';
import Table from './Table/Table';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [user.email])

    const deleteOrdersHandle = (id) => {
        // console.log(id);
        const proceed = window.confirm('are sure deleted your orders')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaningProduct = products.filter(product => product._id !== id)
                        setProducts(remaningProduct)
                    }
                })
                .catch(() => { })
        }
    }
    return (
        <div className='mx-auto'>
            <h1 className='text-center text-[#FF3811] font-semibold text-xl my-10
            '>Your Total Orders: {products.length} items</h1>
            <div className="overflow-x-auto w-full md:w-3/4 mx-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className='bg-[#f0b6aa] text-white text-lg text-center font-semibold'>Delete Item</th>
                            <th className='bg-[#06aef6] text-white text-lg text-center font-semibold'>Name</th>
                            <th className='bg-[#7505ed] text-white text-lg text-center font-semibold'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <Table
                                key={product._id}
                                product={product}
                                deleteOrdersHandle={deleteOrdersHandle}
                            >
                            </Table>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;