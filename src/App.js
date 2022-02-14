import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Accordion from "./component/Accordion";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/toggle">Toggle</Link>
      <Link to="/modal">Modal</Link>
      <Link to="/tab">Tab</Link>
      <Link to="/tag">Tag</Link>
      <Link to="/accordion">Accordion</Link>

      <Routes>
        <Route path="toggle" element={<Toggle />} />
        <Route path="modal" element={<Modal />} />
        <Route path="tab" element={<Tab />} />
        <Route path="tag" element={<Tag />} />
        <Route path="accordion" element={<Accordion />} />
      </Routes>
    </div>
  );
}

export default App;
