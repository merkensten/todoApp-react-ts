import React from 'react';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import './utils/global/css/Global.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>To-Do App</h1>
      <Footer />
    </div>
  );
}

export default App;
