import "./App.css";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import AlertForm from "./components/AlertForm";
import InfoGrab from "./components/InfoGrabForm";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <InfoGrab />
      <AlertForm />
    </div>
  );
}

export default App;
