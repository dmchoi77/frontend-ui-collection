import "./App.css";
import Header from "./component/common/Header";
import Categories from "./component/common/Categories";
import Content from "./component/common/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Content />
    </div>
  );
}

export default App;
