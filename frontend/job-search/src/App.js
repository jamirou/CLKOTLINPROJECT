import logo from "./logo.svg";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import RoutesConfig from "./router/router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <RoutesConfig></RoutesConfig>
        </Layout>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
