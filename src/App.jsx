import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import authService from './appwrite/auth';
import { Footer, Header } from './components';
import { login, logout } from './store/authSlice';


function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData })); 
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

    return !loading ? (
        <div className='min-h-screen flex flex-wrap content-between bg-emerald-700'>
            <div className='w-full block'>
                <Header />
                <main>
                    <Outlet /> 
                </main>
                <Footer />
            </div>
        </div>
    ) : null;
}

export default App;