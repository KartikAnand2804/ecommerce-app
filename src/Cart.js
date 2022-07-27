import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Cart = () => {
  return (
    <div class="h-full flex inline-block">
      <div class="grid grid-cols-3 grid-rows-3 p-4">

        {/* Product */}
        <div class="p-4">
        <div class="justify-center items-center p-6 text-center border-2 rounded-md shadow-xl shadow-slate-400">
           <div className="productImage" class="justify-center p-4 border-2">
            <img alt="ProductImage" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
           
           <div className="productDetailContainer" class="grid grid-rows-1 grid-cols-2 justify-center p-2">
            <div className="ProductName" class ="text-2xl font-serif font-extrabold justify-center items-center">Product title</div>
            <div className="ProductPrice" class ="text-xl italic font-mono font-extrabold justify-center items-center"><CurrencyRupeeIcon/>1231</div>
           </div>

           <div className="ProductDescription" class="p-2 inline-block">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
           
           <div clasName="removeButton" class="py-4"><button class="rounded-full bg-red-400 hover:bg-red-300 justify-center p-3 text-center font-semibold text-white">Remove from cart</button></div>
        </div>
        </div>

               {/* Product */}
               <div class="p-4">
        <div class="justify-center items-center p-6 text-center border-2 rounded-md shadow-xl shadow-slate-400">
           <div className="productImage" class="justify-center p-4 border-2">
            <img alt="ProductImage" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
           
           <div className="productDetailContainer" class="grid grid-rows-1 grid-cols-2 justify-center p-2">
            <div className="ProductName" class ="text-2xl font-serif font-extrabold justify-center items-center">Product title</div>
            <div className="ProductPrice" class ="text-xl italic font-mono font-extrabold justify-center items-center"><CurrencyRupeeIcon/>1231</div>
           </div>

           <div className="ProductDescription" class="p-2 inline-block">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
           
           <div clasName="removeButton" class="py-4"><button class="rounded-full bg-red-400 hover:bg-red-300 justify-center p-3 text-center font-semibold text-white">Remove from cart</button></div>
        </div>
        </div>

               {/* Product */}
               <div class="p-4">
        <div class="justify-center items-center p-6 text-center border-2 rounded-md shadow-xl shadow-slate-400">
           <div className="productImage" class="justify-center p-4 border-2">
            <img alt="ProductImage" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
           
           <div className="productDetailContainer" class="grid grid-rows-1 grid-cols-2 justify-center p-2">
            <div className="ProductName" class ="text-2xl font-serif font-extrabold justify-center items-center">Product title</div>
            <div className="ProductPrice" class ="text-xl italic font-mono font-extrabold justify-center items-center"><CurrencyRupeeIcon/>1231</div>
           </div>

           <div className="ProductDescription" class="p-2 inline-block">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
           
           <div clasName="removeButton" class="py-4"><button class="rounded-full bg-red-400 hover:bg-red-300 justify-center p-3 text-center font-semibold text-white">Remove from cart</button></div>
        </div>
        </div>
           
        </div>

        <div className="OrderSummaryContainer" class="w-11/12 p-4">
          <div class="p-4">
           <div className="OrderSummary" class="justify-center items-center border-2 rounded-md shadow-xl shadow-slate-400 bg-slate-300 h-full p-4 text-2xl font-bold">
                OrderSummary
              <hr align="center" width="90%"/>
              <div className="ProductList mt-12 mb-12">
                <div className="NameAndPrice" class="font-semibold text-xl">
                    ProductName :   <CurrencyRupeeIcon/>Price<br></br>
                    ProductName :   <CurrencyRupeeIcon/>Price<br></br>
                    ProductName :   <CurrencyRupeeIcon/>Price<br></br>
                </div>
              </div>
              <hr align="center" width="90%"/>
              <div className="TotalPrice" class="text-xl font-bold">
                  Total Amount is <CurrencyRupeeIcon/>TotalPrice
              </div>

              <div className="checkoutButton" class="mt-12 flex justify-center">
                <button class="rounded-full bg-green-300 hover:bg-green-200 border-2 p-3 text-lg w-2/4">Checkout</button>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Cart