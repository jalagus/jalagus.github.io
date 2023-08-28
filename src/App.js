import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';


function App() {
  const [activeMenu, setActiveMenu] = useState('Home');

  const renderContent = () => {
    switch (activeMenu) {
      case 'Home':
        return <Home />;
      case 'Education':
        return <Education />;
      case 'Projects':
        return <Projects />;
      case 'Publications':
        return <Publications />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <div className="content">{renderContent()}</div>
      <Footer />
    </div>
  );
}

export default App;