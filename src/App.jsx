import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer.ts";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

import "./styles/Reset.sass";
import "./styles/App.sass";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Preloader from "./components/Users/Preloader/Preloader";
import { Suspense } from "react";



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// const Music = React.lazy(() => import('./components/Music/Music'));
// const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
// const News = React.lazy(() => import('./components/News/News'));
// const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper__content">
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const NarutoApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default NarutoApp;
