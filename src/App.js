import React from 'react'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css"
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App(props) {
  return (
    <div className="app">
       <HeaderContainer />
       <Navbar />
       <div className="dialogs">
           <Route path="/profile/:userId?" render={()=> <ProfileContainer/> } />
           <Route path="/dialogs" component={()=> <DialogsContainer/>} />
           <Route path="/users" render={()=> <UsersContainer/>} />


           <Route path="/news" component={News} />
           <Route path="/music" component={Music} />
           <Route path="/settings" component={Settings} />

           <Route path='/login' render={() => <Login/>} />
       </div>
       <Footer />
    </div>
  );
}

export default App;
