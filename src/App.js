import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
