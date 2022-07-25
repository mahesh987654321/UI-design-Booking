import { Route, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/home/Home";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import List from "./Pages/list/List";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
      </Routes>
    </div>
  );
}

export default App;
