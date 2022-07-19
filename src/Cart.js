import React from 'react'

const Cart = () => {
  return (
    <div class="h-full w-full">
      <div class="grid grid-cols-3 grid-rows-3">
        <div class="justify-center items-center p-6 text-center">
           <div className="productImage"></div>
           <div className="productName"></div>
           <div className="productPrice"></div>
           <div clasName="removeButton"></div>
        </div>


      </div>
    </div>
  )
}

export default Cart