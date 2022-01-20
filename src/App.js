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


function App(props) {
  return (
    <div className="app">
       <Header />
       <Navbar />
       <div className="dialogs">
           <Route path="/profile" render={()=> <Profile     dialogsPost={props.state.dialogsPage.Post}
                                                            newPostText={props.state.dialogsPage.newPostText}
                                                            dispatch={props.dispatch}
                                                            //addPost={props.addPost}
                                                            //updateNewPostText={props.updateNewPostText}
                                                /> } />

           <Route path="/dialogs" component={()=> <Dialogs dialogsData={props.state.profilePage.dialogsData}
                                                           dialogsMessage={props.state.profilePage.dialogsMessage}
                                                           newPostText={props.state.profilePage.newPostText}
                                                           dispatch={props.dispatch}
                                                           //addPost={props.addPost}
                                                           //updateNewPostTextSecondPage={props.updateNewPostTextSecondPage}
                                                           //newPostText={props.state.profilePage.newPostText}
                                                           //addPostSecondPage={props.addPostSecondPage}
                                                />} />

           <Route path="/news" component={News} />
           <Route path="/music" component={Music} />
           <Route path="/settings" component={Settings} />
       </div>
       <Footer />
    </div>
  );
}

export default App;
