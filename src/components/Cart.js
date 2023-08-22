import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';
// import { Delete } from 'react-icons/fa';


export default function Cart() {
    let data2 = useCart()
    let dispatch = useDispatchCart();
    console.log("Cart items:", data2);
    const handleCheckout = () => {
      console.log("Checkout button clicked");
      // Implement your checkout logic here
    };
  
    if (data2.length === 0) {
    //   console.log("Cart is empty");
      return (
        <div>
          <div className='m-5 w-100 text-center fs-3'>The Cart is Empty</div>
        </div>
      );
    }
  
    let totalPrice = data2.reduce((total, food) => total + food.price, 0);
  
    return (
      <div>
        <div>{console.log(data2)}</div>
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
          <table className='table table-hover'>
            <thead className='text-success fs-4'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Amount</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {data2.map((food, key) => {
                console.log("Cart item:", food);
                return (
                  <tr key={food.id}>
                    <th scope='row'>{key + 1}</th>
                    <td>{food.fname}</td>
                    <td>{food.price}</td>
                    <td>
                      <button
                        type='button'
                        className='btn p-0'
                        onClick={() => {
                          dispatch({ type: 'REMOVE', id: food.id });
                        }}
                      >
                        {/* <Delete /> */}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
          </div>
          <div>
            <button className='btn bg-success mt-5' onClick={handleCheckout}>
              Check out
            </button>
          </div>
        </div>
      </div>
    );
  }



