import Products from "./components/products/Products";
import Cart from "./components/UI/Cart";
import Navbar from './components/UI/Navbar';
import {useState} from 'react'



function App() {
  const [showCart, setShowCart] = useState(false)

  const showHandler = () => {
    setShowCart(true)
  }
  const hideHandler = () => {
    setShowCart(false)
  }

  return (
    <div>
      {showCart && <Cart onHideCart={hideHandler}  />}
      <Navbar onShowCart={showHandler} />
      <Products />

    </div>
  );
}

export default App;
