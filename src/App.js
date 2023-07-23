import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import CoursePage from './components/CoursePage';
import LecturePage from './components/LecturePage';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <Routes>
                <Route
                    path="/loginPage"
                    element={
                        <PrivateRouteForLogin>
                            <LoginPage />
                        </PrivateRouteForLogin>
                    }
                />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <HomePage />
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/coursePage/:id"
                    element={
                        <PrivateRoute>
                            <CoursePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/lecturePage/:id"
                    element={
                        <PrivateRoute>
                            <LecturePage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
        </Provider>
    );
};

export default App;

const PrivateRoute = ({ children }) => {
    const authToken = localStorage.getItem("authToken");
    if(authToken) {
        return children;
    }
    else {
        return <Navigate to={"/loginPage"} />;
    }
};

const PrivateRouteForLogin = ({ children }) => {
    const authToken = localStorage.getItem("authToken");
    if(!authToken) {
        return children;
    }
    else {
        return <Navigate to={"/"} />;
    }
};