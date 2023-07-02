import React, { Fragment } from 'react';
import Home from './containers/Home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './containers/Signup';
import Login from './containers/Login';
import GlobalStyle from './styles/global';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <Fragment>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Fragment>
    </AppProvider>
  );
}

export default App;
