import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import HomePage from "./pasges/HomePage";
import SignupPage from './pasges/SignupPage';
import LoginPage from './pasges/LoginPage';

import ProfilePage from './pasges/ProfilePage';

import  { Routes,Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';

import {Loader} from "lucide-react";
import { Toaster } from 'react-hot-toast';

function App() {
  const {authUser , checkAuth , isCheckingAuth,onlineUsers} = useAuthStore();

  console.log({onlineUsers});

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  console.log({authUser});

  if(isCheckingAuth && !authUser) return (
    <div className='flex item-center justify-center h-screen'>
      <Loader className="size-10 animate-spin"/>
    </div>
  )

  return (
    <div data-theme="retro">
    <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={authUser ? <HomePage /> :  <Navigate to="/login" />} />
        <Route path='/signup' element={!authUser ? <SignupPage /> : <Navigate to="/" />} />
        <Route path='/login' element={ !authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path='/profile' element={authUser ? <ProfilePage />:  <Navigate to="/login" />} />
     </Routes>

     <Toaster/>
     </BrowserRouter>
     </div>
  )
}

export default App
