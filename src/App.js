import React from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/Reset.sass";
import "./styles/App.sass";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ProfileContainer2 from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper__content">
        <Routes>
          <Route path="/" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
