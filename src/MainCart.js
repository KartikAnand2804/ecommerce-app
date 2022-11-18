// import Header from './components/Header';
import Cart from './Cart';
import Basket from './Basket';
import data from './data';
import { useState } from 'react';
function App() {
  // const { products } = data;

  const { products } = data;
  

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="MainCart">
      {/* <Header countCartItems={cartItems.length}></Header> */}
      <div class='inline-flex grid grid-cols-3 p-4 '>
        <div class='col-span-2 '><Cart products={ products } onAdd={onAdd}/></div>

        <div class='p-4 '>
            <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            ></Basket>
        </div>

      </div>
    </div>
  );
}

export default App;