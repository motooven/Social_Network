import React from 'react'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css"
import Dialogs from "./components/Dialogs";



function App() {
  return (
    <div className="app">
       <Header />
       <Navbar />
       <div className="dialogs">
           <Dialogs />
           {/*<Content />*/}
       </div>
       <Footer />
    </div>
  );
}

export default App;
