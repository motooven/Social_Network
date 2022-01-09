import React from 'react'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import "./App.css"
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



function App() {
  return (
    <div className="app">
       <Header />
       <Navbar />
       <div className="dialogs">
           <Route path="/profile" component={Profile} />
           <Route path="/dialogs" component={Dialogs} />
           <Route path="/news" component={News} />
           <Route path="/music" component={Music} />
           <Route path="/settings" component={Settings} />
       </div>
       <Footer />
    </div>
  );
}

export default App;
