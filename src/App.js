import Header from "./components/Header";
import Login from "./components/Login";
import { Route, Routes } from 'react-router-dom';
import Body from "./components/Body";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cats" element={<Body />} />          
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
