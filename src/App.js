import React from "react";

import Routes from './routes';



import "./styles.css";

import Header from "./components/Header/indexHeader";
import Main from './pages/main/indexMain';

const App = () => (
  <div className="App">
  <Header />
  <Routes />
</div>
);





export default App;
