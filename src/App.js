import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";

function App() {

  const [cart, setCart] = useState({});
  const [itemsInCart, setItemsInCart] = useState(0);

  function addItem(newRecord) {
    setCart(oldCart => {
      const oldCopy = JSON.parse(JSON.stringify(oldCart));
      if (oldCart[newRecord.title]) {
        oldCopy[newRecord.title].quantity += 1;
      } else {
        oldCopy[newRecord.title] = { ...newRecord };
        oldCopy[newRecord.title].quantity = 1;
      }
      return oldCopy;
    })
    setItemsInCart(old => old + 1);
  }

  function deleteItem(deletedRecord) {
    setCart(oldCart => {
      const oldCopy = JSON.parse(JSON.stringify(oldCart));
      if (oldCart[deletedRecord.title].quantity === 1) {
        delete oldCopy[deletedRecord.title];
      } else {
        oldCopy[deletedRecord.title].quantity -= 1;
      }
      return oldCopy;
    })
    setItemsInCart(old => old - 1);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar cart={cart} itemsInCart={itemsInCart} addItem={addItem} deleteItem={deleteItem} />} >
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop addItem={addItem} />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
