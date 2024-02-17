import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const handleDataUpdate = (newData) => {
    setData(newData);
  };

  return (
    <div className="App">
      <Header onDataUpdate={handleDataUpdate} />
      <Main data={data} />
      <Footer />
    </div>
  );
}

export default App;