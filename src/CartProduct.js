import React from 'react';

export default function CartProduct(props) {
  const { product, onAdd } = props;
  return (
    <div class="border-2 p-3 drop-shadow-xl">
        <div class="p-4">
            <div className="image" class="border-2">
            <img src={product.image} alt={product.name} />
            </div>

            <div className="productInfo" class="text-xl font-semibold inline-flex grid-rows-1 grid-cols-2">
                <div class="p-4">{product.name}</div>
                <div class="p-4 gap-x-3">{product.price}</div>
            </div>

            <div className='AddButton'>
                <button class="rounded-full bg-green-400 hover:bg-green-300 text-xl font-semibold p-5" onClick={() => onAdd(product)}>Add To Cart</button>
            </div>

        </div>

    </div>
  );
}




