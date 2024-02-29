import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'


import { onAuthStateChanged } from "firebase/auth";

import { addUser,removeUser } from '../utils/userSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store)=>store.user); 
  console.log("user is:" + user);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName, photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    })
    return ()=> unsubscribe();
  },[])
  
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      //dispatch(removeUser());
      //navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
        
        <img className='w-44'
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'></img>
                  
        {user && <div className='flex'>
          <img className='w-10 h-10 my-4' alt='userIcon' 
          src={user.photoURL}></img>
          <p className='p-2 m-4 text-lg'>{user.displayName}</p>
          <button onClick={handleSignOut} className='p-2 m-2'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header