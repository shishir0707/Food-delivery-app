import React from 'react'
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { MdShoppingBasket } from 'react-icons/md';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

const [{user}, dispatch] = useStateValue()

    const login = async () => {
        const {
            user : { providerData },
        } = signInWithPopup(firebaseAuth, provider);
        dispatch({
            type : actionType.SET_USER,
            user :  providerData[0],
        });
    }

    return (
        <AnimatePresence>
            <header className='w-screen fixed z-50 p-6 px-16'>
                {/* destope & tablet */}
                <div className='hidden md:flex w-full h-full items-center justify-between'>
                    <Link to={'/'} className='flex items-center gap-2'>
                        <img src={Logo} alt='logo' className='w-8 object-cover' />
                        <p className='text-headingColor text-xl font-bold'> City</p>
                    </Link>

                    <div className='flex items-center gap-8'>
                        <ul className='flex items-center gap-8'>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                                Home
                            </li>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                                Menu
                            </li>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                                About us
                            </li>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                                Service
                            </li>
                        </ul>

                        <div className='relative flex items-center justify-center'>
                            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                                <p className='text-xs text-white font-semibold'>2</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <motion.img
                                whileTap={{ scale: 0.6 }}
                                src={Avatar}
                                alt="userprofile"
                                onClick={login}
                                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer'
                            />
                        </div>

                    </div>

                </div>

                {/* mobile */}
                <div className='flex md:hidden w-full'>

                </div>

            </header>
        </AnimatePresence>

    )
}

export default Header