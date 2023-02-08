import React from 'react';
import logo from './logo.svg';
import '../../good_works/src/css/style.css';
import TodoList from './routes/todo-list/todo-list';
// import { list } from '../src/list';
import RegistrationForm from './components/registration/registration-form';
import RegistrationContainer from './components/registration/registration-container';
import LoginContainer from './components/login/login-container';
import { Route, Router, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import UserProfile from './components/user-profile/user-profile';
import PublicApiService from './api/PublicApiService';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="registration" element={<RegistrationContainer />} />
        <Route path="login" element={<LoginContainer />} />
        <Route path="userProfile" element={<UserProfile />} />
      </Route>
    </Routes>
    // <div>
    //   <RegistrationContainer />
    //   <LoginContainer />
    //   {/* <TodoList  /> */}
    // </div>
  );
}

export default App;
