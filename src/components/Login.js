import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile   } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'
const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true);

    // ref used to refer value of fields
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const [errorMessage, setErrorMessage] = useState(null); 

  const handleButtonClick = ()=>{
    const message = checkValidData(email.current.value,password.current.value);
    console.log(message);
    setErrorMessage(message);

    if(message) return;

    // Sign In/ Sign Up logic
    if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
               const  user = userCredential.user;
               updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://th.bing.com/th?id=OIP.fio1nXsUCvmMVKmVqHO0cgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                    }).then(() => {
                        const {uid,email,displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
               console.log(" Sign Up User: ", user);
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ":" + errorMessage);
                // ..
            });
        
    }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(" Sign In User: ", user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ":" + errorMessage);
            });
    }
  }  

  const toggleSignForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }  
  return (
    <div>
        <Header></Header>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='body'></img>
        </div>
        <form 
            onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 m-auto right-0 left-0 opacity-80 rounded-lg'>
            <h1 className='text-white font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {
                !isSignInForm && 
                <input 
                        ref={name}
                        type='text' 
                        placeholder='Full Name' 
                        className='p-4 my-2 w-full bg-gray-500 rounded-lg'/>
            }
            <input
                ref={email} 
                type='text' 
                placeholder='Email' 
                className='p-4 my-2 w-full bg-gray-500 rounded-lg'/>
            <input 
                ref={password}
                type='password' 
                placeholder='Password' 
                className='p-4 my-2 w-full bg-gray-500 rounded-lg'/>
            <p className='text-red-500 text-lg font-bold py-2'>{errorMessage}</p>
            <button className='p-4 my-4 text-white bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className='text-white cursor-pointer' 
                    onClick={toggleSignForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : 
                                                            "Already Registered Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login