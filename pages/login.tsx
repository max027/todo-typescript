import { useAuthContext } from '@/context/ContextProvider';
import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'


const login = () => {
  const router=useRouter()
  const {user,login}=useAuthContext();

  const [data,setData]=useState({
      email:'',
      password:''
    })

  const handeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(data.email,data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err);
    }
  };
 
     
  return (
    <form
      onSubmit={handeSubmit}
      className="flex-1 flex  flex-col justify-center pt-2 items-center gap-5 "
    >
      <h1 className="text-xl">Login</h1>
      <input
        type="email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
        placeholder="Email"
        className="outline-none text-sm p-2 w-full max-w-[34ch] border border-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300  "
      />

      <input
        type="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
        placeholder="password "
        className="outline-none text-sm p-2 w-full max-w-[34ch] border border-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 "
      />

      <button
        type="submit"
        className="w-full max-w-[30ch] border border-white hover:bg-indigo-600 py-1 px-1 text-white   shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Submit
      </button>

      <span className="text-sm">Already Registered,Click here to <Link href='/Register'> Register</Link> </span>
    </form>
  );

}

export default login
